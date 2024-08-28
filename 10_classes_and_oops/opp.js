const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log('got user details from database')
        console.log(`username:${this.username}`)
        console.log(this)
        //here we used 'this'
    }
}

console.log(user.username)
user.getUserDetails()
console.log(this)//o/p:{}

// const primiseOne = new Promise()
// const date = new Date()
//new keyword is used to make a new constructor it is also
//called as constructor function

function users(userName, loginCount, isLoggedIn){
    this.userName=userName
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.userName}`)
    }
    return this
}

const usersix = new users("nayan", 12, true)
const userSeven = new users("Hi",34,true)
console.log(usersix)
console.log(userSeven)
console.log(userSeven.constructor)

//instanceOf method must read in javaScript

