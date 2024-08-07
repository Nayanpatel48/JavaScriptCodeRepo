const score = 800
console.log(score)//800

//we are creating Number type object
const newScore = new Number(900)
console.log(newScore)//[Number: 900]

console.log(newScore.toString())//900
console.log(newScore.toString().length)//3
//by making this newScore string we can perform additional string methods on them

//we can use .toFixed() method for precision
console.log(newScore.toFixed(3))//900.000

const otherNumber = 787.8989
console.log(otherNumber.toPrecision(3))//788
console.log(otherNumber.toPrecision(4))//787.9
console.log(otherNumber.toPrecision(2))//7.9e+2
//to precision means i want precise value but i just want to 
//focus on only that many elements only

const hundreds = 100000000000
console.log(hundreds.toLocaleString('en-IN'))//1,00,00,00,00,000

//max, min, safe value
console.log(Number.MAX_VALUE)//1.7976931248623157e+308
console.log(Number.MIN_VALUE)//5e-324
console.log(Number.MAX_SAFE_INTEGER)//9007199254740991
console.log(Number.MIN_SAFE_INTEGER)//-9007199254740991

//=======================Maths=================================
//The most intrestiong thing in javaScript is it's maths

console.log(Math)//Object [Math] {} 
//it is a object having so many values

console.log(Math.PI)//3.14149....3

console.log(Math.abs(-4))//4
console.log(Math.round(9.89))//10
console.log(Math.ceil(4.4))//5
//in .ceil() function it take upper value, in this exp 4.4's upper value is 5
console.log(Math.floor(4.9))//4
//in .floor() method it takes the lower value, in this exp 4.9's lower value is 4
console.log(Math.max(1,2,3,4))//4
console.log(Math.min(9,45,9))//9

console.log(Math.random())
//the value of .random() method is always between 0 and 1 

//suppose i want to randomly generate value between 0 and 10 
console.log((Math.random()*10) +1)//output will be between 0 and 1
//+1 just insurer that value will be atleast 1 nit 0
//use parantheses in case of confusion in the order of expression execution

min = 10
max = 100
//if i want to generate values in between 10 and 100 randomly
console.log(Math.floor(Math.random()*(max-min+1))+min)