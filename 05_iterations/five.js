//////////////////foreach/////////////////////////
const  coding = ["java", "Kotlin", "c", "cpp"]

coding.forEach(function (value) {console.log(value)} )
//this will simply print all the values from 
//here in above you don't have to give a name to the function

/////////////////callback function//////////////////

coding.forEach( (value) => {console.log(value)} )

////////////////passing reference to the for each////////////////
function printMe(value)
{
    console.log(value)
}

coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    console.log(item, index, arr)
})

const myCoding = [
    {
        language : "Java",
        languageFileName : "java"
    },
    {
        language : "Python",
        languageFileName : "py"
    },
    {
        language : "Cplusplus",
        languageFileName : "cpp"
    }
]

//this will be very useful for databases
myCoding.forEach((item) =>{
    console.log(item.language)
})
//java
//python
//Cplusplus