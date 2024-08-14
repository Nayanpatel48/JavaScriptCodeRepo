// function sayMyName () {
//     console.log("Nayan")
//     console.log("Hiren")
//     console.log("Akhil")
// }
//above is the syntax for function

//just sayMyName alone is the reference of the function by running it nothing will happen
//if we want to execute it then sayMyName()
//this will be useful in dom manipulation and react learning

// sayMyName()

// function addTwoNumbers(number1, number2)
// {
//     console.log(number1+number2)
// }

// addTwoNumbers(2,4)
// addTwoNumbers(2,"A")//2A

//storing result into variable
// const ans = addTwoNumbers(2,4)
// console.log(`ans : ${ans}`)

// function addTwoNumbers(number1, number2)
// {
//     let result = number1+number2
//     return result
//     console.log("Nayan")
// }

// const ans2 = addTwoNumbers(2,4)
// console.log(`ans : ${ans2}`)

// function loginUserMessage(userName)
// {
//     return `${userName} is logged in.`
// }

// console.log(loginUserMessage("Nayan"))

// console.log(loginUserMessage())//undefined is logged in. here value is not passed to the functions 

// function loginUserMessage(userName)
// {
//     if(userName == undefined)
//         return "Please enter the userName."
//     return `${userName} is logged in.`
// }
// //by degfault "", undefined is false by default
// console.log(loginUserMessage())//please enter the userName.

// function loginUserMessage(userName= "sam")
// {
//     if(userName == undefined)
//         return "Please enter the userName."
//     return `${userName} is logged in.`
// }
// //default paramters

// console.log(loginUserMessage())

// function calculateCartPrize(num1)
// {
//     return num1
// }
// console.log(calculateCartPrize(2))//2
// console.log(calculateCartPrize(2, 34, 56))//2

// function calculateCartPrize(...num1)
// {
//     return num1
// }
// //rest operator/spread operator ->passing multiple values into function ...num1
// console.log(calculateCartPrize(2, 34, 56))

// function calculateCartPrize(val1, val2 ,...num1)
// {
//     return num1
// }

// console.log(calculateCartPrize(2, 34, 33, 44, 56))

// const user = {
//     name : 'Nayan',
//     prize : 1800
// }
// //passing object into function

// function handleObject(anyObject)
// {
//     console.log(`user name is ${anyObject.name}, prize is ${anyObject.prize}`)
// }
// //handleObject(user)
// //also true
// handleObject({name : 'Nayan',prize : 1800})
// //direct object passing

// const myArray = [12,4,6,88]

// function returnSecondValueFromArray(getArray)
// {
//     return getArray[1]
// }
// //console.log(`${returnSecondValueFromArray(myArray)} is second value`)
// console.log(returnSecondValueFromArray([12,4,6,88])