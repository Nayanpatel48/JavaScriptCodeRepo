//there are two types of datatypes : primitive and non primitive datatypes

//primitive types =>Call by value
//7 types => String, boolean, null, Number, undefined, Symbol(used to make any value unique), Big int(very big values)

//we don't define language in javaScript
//javaScript is a dynamically typed language means that the data type of the variable is determined during run time.

const score = 89
const score1 = 78.0
//both comes in NUmber category

const isLLoggedIn = false
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
