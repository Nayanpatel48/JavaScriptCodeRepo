let score = 67

//doing investigation study
//getting value type
console.log(typeof score)
console.log(typeof(score))

//"37NM" => Nan
score = "37NM"
let valueInNUmber = Number(score)
console.log(typeof valueInNUmber)

console.log(valueInNUmber)

//null =>object
score = null
console.log(typeof score)

//true => 1, false =>0
score = true
console.log(typeof score)

score = false
console.log(typeof score)

//below 1 => boolean true,0 => false, "" => false, "Nayan"=true
let isLoggedIn = 0

let booleanIsLogfedIn = Boolean(isLoggedIn)
console.log(booleanIsLogfedIn)

// 89 => String conversion
let someNumber = 89
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

//****************opeartions**************************

let value =3
value = -value
console.log(value)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2%2)

let str1 = "Nayan"
let str2 = "Patek"
let str3 = str1+str2
console.log(str3)

//below => this type of code is not good practice very bad :(
console.log("1"+2)//12
console.log(1+"2")//12
console.log("1"+2+2)//122
console.log(1+2+"2")

//below is not good practice
console.log(+true)//1
console.log(+"")//0

//in coding most important is code readability in big companies
let num1, num2, num3
num1=num2=num3=2+2
console.log(num1)
console.log(num2)
console.log(num3)

//prefix and postfix
let gameCounter = 0
gameCounter++//first use and incremenet
++gameCounter//first 
console.log(gameCounter)//1


//prefix postfix assignment working is as below
//read documentaion after class it will help you a lot

let x = 3
const y = x++//first value of x is assigned to y then incremeneted
console.log(`x:${x}, y:${y}`)
//x:3, y:4
let z = 4
const u = ++z//first value of z is incremeneted then assigned to u
console.log(`z:${z}, u:${u}`)
//z:5, u:5

