//there are two types of datatypes : primitive and non primitive datatypes

//primitive types =>Call by value
//7 types => String, boolean, null, Number, undefined, Symbol(used to make any value unique), Big int(very big values)

//we don't define language in javaScript
//javaScript is a dynamically typed language means that the data type of the variable is determined during run time.

const score = 89
const score1 = 78.0
console.log(typeof score)
console.log(typeof score1)
//both comes in NUmber category

let name = "Nayan"
console.log(typeof name)
const isLLoggedIn = false
console.log(typeof isLLoggedIn)
//Boolean
const value = null
//null 
let hi 
//undefined

const id = Symbol('123')
const id2 = Symbol('123')
//return usnique symbol anytime
console.log(id == id2)//false

const bigNumber = 23723894838999827498n
//it uses the big integer => 'n' in last


//Reference type(non - primitive) => Array, Object, Function

const heros = ["Spidy", "Iron man","Wolverine"]
heros[0]="Deadpool"
console.log(heros)
//this is object
let myObject = {
    name : "Nayan",
    age: 20
}
//this is also an object
//everything inside { } is an object in above example


const fnctn = function(){
    console.log("Hello World")
}

console.log(typeof bigNumber)
console.log(typeof value)

console.log(typeof fnctn)
console.log(typeof myObject)
console.log(typeof heros)
console.log(typeof id)
console.log(typeof hi)

//Assignment
//Summary of data type and their return type:
//In this code => console.log(x)
// when x is below:
//89,78.0 => number
//const isLLoggedIn = false => boolean
//const value = null => Object
//const id2 = Symbol('123') => Symbol
//let hi => undefined
//const bigNumber = 23723894838999827498n =>bigint
//const heros = ["Spidy", "Iron man","Wolverine"] => object
//let myObject = {
//    name : "Nayan",
//    age: 20
//} =>object
//const fnctn = function(){
//    console.log("Hello World")
//} => function
//let name = "Nayan" => String

//=====================================================

//stack = primitive type values are store => whenever we take value it will give copy
//Heap (non primitive value) => get original value 

let myYouTubeName = "NayanChannel"

let anotherName = myYouTubeName

//anotherName is a copy of myYouTubeName
console.log(anotherName)

anotherName = "PatelNayan"

console.log(myYouTubeName)
console.log(anotherName)

//from heap when we take value it will return refrence of original value value
let user1 = {
    email : "User@gmail.com",
    upi :"hjk@gh"
}

let user2 = user1

//using . we can access object value
user2.email = "jjj@89"
console.log(user1.email)
console.log(user2.email)

