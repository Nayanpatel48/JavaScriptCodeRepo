//always do investigative study cause it is the best
const user = {
    username: "Nayan",
    prize : 900,
    welcomeMessage : function(){
        console.log(`${this.username} welcome to webiste.`)
        console.log(this)
    }
    //this is current context(values)
    //this is use to access all the variables which are inside this object 
}

user.welcomeMessage()//Nayan welcome to website.
user.username= "sam";
user.welcomeMessage()//sam welcome to website

console.log(this)//{} when we are in node environment we get empty object

//the global object inside browser is window object

function chai()
{
    console.log(this)
}
//when we print this inside node environment
chai()

function chaiNumberTwo()
{
    let username = "Nayan"
    console.log(this.username)//undefined
    //this will be used in object only to refer to it's values r properties
    console.log(username)//Nayan
}
chaiNumberTwo()
//undefined
//Nayan

const chaiNumberThree = () => {
    let username = "Nayan"
    console.log(this.username)
    console.log(this)
}
chaiNumberThree()//{}
//arrow function

// const addTwo = (num1, num2) => {
//     return num1+num2
// }
//arrow function
//console.log(addTwo(4,5))//9

const addTwo2 = (num1, num2) => (num1+num2)
//implicit return
console.log(addTwo2(4,5))//9


// const objectReturn = (num1, num2) => (username : "Nayan")
//without wraping username : "Nayan" into curly braces function can not return object it returns undefined

const objectReturn = (num1, num2) => ({username : "Nayan"})

console.log(objectReturn(2,3))//{ username : 'Nayan'}

const myArray = [1,2,3,4,5]
//console.log(myArray.forEach(() => {}))//undefined





