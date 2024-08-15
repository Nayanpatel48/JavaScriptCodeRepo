///////////////////////////////==========if=============////////////////////////////////////
if(true)
{

}
if(true)
{

}
const isUserLoggedIn = true
if(isUserLoggedIn)
{
    console.log("User logged in successfully!")
}

//==, !=, <=,>=,<,>
if(3!=2)
{
    console.log("true 3 != 2")
}

if(2 == "2")
{
    console.log("True")
}//True

//=== is strict equal means data type is also matters here.

if(2 === "2")
{
    console.log("Executed")
}

//if else
const temprature = 41

if(temprature > 40)
    console.log("Temprature is greater than 40.")//executed
else
    console.log("Temprature is less  than or equal to 40")

const score = 200

if(score>100)
{
    const power = "Fly"
    console.log(`User power ${power}`)
}
//User power Fly.
//console.log(`User power ${power}`) scoper error in this statement

//when we use var
if(score>100)
{
    var power = "Fly"
}
console.log(`User power ${power}`)

//do not use var it has a global scope accessed anywhere so don't use it

const balance = 1000

if(balance >500) console.log("Test");//implicit scope it is executed in only one line, must use ; here
//test

// if(balance >500) console.log("Test"),
// console.log("Test1");
//do not write like above


//////////////////////////=============multiple conditions========///////////////////////////
if(balance < 500)
{
    console.log("less than")
}
else if(balance < 750)
{
    console.log("less than 750")
}
else if(balance < 900)
{
    console.log("less than 900")
}
else
{
    console.log("less than 1200")
}
//less than 1200

const userLoggedIn = true
const debitCard = true
const loggedInFromUser = false
const loggedInFromEmail = true

//user should be logged in and debit card

if(userLoggedIn && debitCard)
{
    console.log("User is allowed for shopping.")
}

if(loggedInFromEmail || loggedInFromUser)
{
    console.log("Allow user")
}
//allow user