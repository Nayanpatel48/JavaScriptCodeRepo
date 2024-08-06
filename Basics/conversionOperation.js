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
