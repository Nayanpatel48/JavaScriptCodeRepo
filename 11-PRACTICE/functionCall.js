firstName = ""
lastName = ""

const person = {
    fullName : function(){
        return this.firstName+" "+this.lastName
    }
}
const person1 = { firstName:"Nayan",lastName:"Patel"}
const person2 = { firstName:"Ram",lastName:"Kotvani"}

console.log(person.fullName.call(person1))
//This will return Nayan Patel