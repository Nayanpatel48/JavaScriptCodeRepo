firstName = ""
lastName = ""

//this is function constructor
function myFunction(arg1, arg2){
    this.firstName=arg1
    this.lastName=arg2
}

//this will create a new object
const obj1 = new myFunction("Nayan", "Ram")

console.log(obj1.firstName)
//this will return "Nayan"