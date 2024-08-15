const userEmail = "Nayan@145.gmail"

if(userEmail)
{
    console.log("We have user email.")
}
else
{
    console.log("We does not have user email.")
}
//we assumed that string is true
//we have user email.

const userEmail1 = ""

if(userEmail1)
{
    console.log("We have user email.")
}
else
{
    console.log("We does not have user email.")
}
//We does not have user email.

////////////////==============falsy values=======/////////////////////////////
//false, 0, -0, BigInt, 0n, "", null, undefined, nan(not a number)

/////////////////////==========truthy values=======//////////////////////
//all other values than above falsy values are truthy values, like "0",'false', "false", " "(space),
//{}, [], function(){} (empty function)

const arr=[]
if(arr.length ===0)
{
    console.log("Array is empty!")
}
//Array is empty!

const emptyObject = {}
if(Object.keys(emptyObject).length === 0)
{
    console.log("Array is empty!")
}
//Array is empty!

if(false == 0)
{
    console.log("false == 0 is true")
}

///////////+++++++++++++==Nullish Coalescing operator ?? : null undefined+++++++++++/////////////////
//just made for null and undefined

let val1
val1 = 5 ?? 10
console.log(val1)
//5

let val2 
val2 = null ?? 10
console.log(val2)
//10

let val3
val3 = undefined ?? 15 
console.log(val3)
//15

let val4 
val4 = null ?? 10 ?? 20
console.log(val4)
//10 because 10 comes first

////////////++++++++++++++Turnary operator+++++++++++/////////////////////

const iceTeaPrize = 100

iceTeaPrize <= 80 ? console.log("80") : console.log("more than 80.") 
//more than 80