//singleton

const mysy = Symbol("hey")//using symbol as key

const jsUser = {
    name : "Nayan",
    "full name" : "Nayanbhai k",
    age : 18,
    [mysy] : "Symbol",//this is syntax for Symbol
    location : "Jaipur",
    email : "naya178@gmail.com",
    isLoggedIn : false,
    loginDays : ["Monday", "Tuesday"]
}

//accessing objects
//approach 1:
console.log(jsUser.email)
//but this is not suggested approach

//approach 2:
console.log(jsUser["email"])
//behind the scene email is a string

//but what if i want to access value "full name" the dot operator will not be useful
console.log(jsUser["full name"])
//here the [] comes into the picture

//use symbol as a key and print it's value
console.log(jsUser[mysy])//Symbol

//changing object values
jsUser.email = "nayan789@jus"
// Object.freeze(jsUser) //will not allow modifications on javaScript object
jsUser.email = "nayan789@xyz"
console.log(jsUser["email"])

//jsUser[email] = "nayan789@xyz" gives error

console.log(jsUser)
//here in this output you can refer to symbol

jsUser.greeting = function(){
    console.log("Hello bro!")
}
jsUser.greetingTwo = function(){
    console.log(`Hello, ${this.name}`)
}

//This defines a function and assigns it to the greeting property of the jsUser object.

//we have used string interpolation here using backtics (`) so that we can write 
//${this.name}
//refering object it self using 'this'
jsUser.greeting()//Hello bro!
jsUser.greetingTwo()//Hello, Nayan



