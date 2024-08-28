//do investigative study

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete')
        resolve()//we connected then and resolve
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

//we can also do as follows
new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task 2 is completed')
        resolve()//we connected then and resolve
    }, 1000)
}).then(function(){
    console.log('Async 2 resolved.')
})
//Here instread of doing it in two saperate code blocks we did it in
//one single code block

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"chai",
             email:"chai@exaple.com"})//we can pass args
             //here in above we passed the object to resolve method 
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Hitesh", password:"123"})
        } else {
            reject('Error: something went wrong')
        }
        
    }, 1000)
})

//avoid callback hell
promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(()=>console.log("The promise is either resolved or rejected."))
//prefer above style good redabibilty
//we can do chaining of then() very useful in db 

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"javaScripy", password:"123"})
        } else {
            reject('Error: JS went wrong')
        }
        
    }, 1000)
})

//primise is object
//using different approach
async function consumePromiseFive() {
    try{
        const responce=await promiseFive
        console.log(responce)
    } catch(error){
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

//above method can be written as below also

//fetch('https://jsonplaceholder.typicode.com/users')
fetch('https://api.github.com/users/hiteshchoudhary')
.then((responce) => {
    return responce.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))
