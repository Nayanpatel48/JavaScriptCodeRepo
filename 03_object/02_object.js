const tinderUser1 = new Object()//singleton object in interview
const tinderUser2 = {}//non singleton object in intrview

console.log(tinderUser1)//{}
console.log(tinderUser2)//{}

//giving values to tinder user
tinderUser1.name = "Sammy"
tinderUser1.id = "123abc"
tinderUser1.age = "14"
console.log(tinderUser1)

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Nayan",
            lastName : "Patel"
        }
    }
}
console.log(regularUser.fullName.userFullName.lastName)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}
//approach 1
const obj3 = Object.assign(obj1, obj2)
//here all values are going into obj1
console.log(obj3)
console.log(obj1 == obj3)//true

//approach 2
const obj5 = Object.assign({},obj1,obj2,obj4)
//here we have gaurantee that {} is a target and obj1, obj2 and obj4 are the sources
//not compulory but easy
console.log(obj5)

const obj6 = {...obj1,...obj2}
//mostly we use spreat operator 90% time
console.log(obj6)

//when data comes from database it comes in the form of array of objects
//as per below
const arrDb = [
    {
        name : "Nayan",
        id : "Nayan@345gmail.com"
    },
    {
        name : "Mayank",
        id : "Mayank@345gmail.com"
    },
    {
        name : "Jigar",
        id : "Jigar@345gmail.com"
    }
]
console.log(arrDb[0].name)//Nayan
//accessing first user's username
console.log(arrDb[2].name)//Jigar
//accessing second user's username

console.log(tinderUser1)
console.log(Object.keys(tinderUser1))
//we are taking all key values from tinderuser1
console.log(Object.values(tinderUser1))
//we are taking all values from tinderuser1
console.log(Object.entries(tinderUser1))
//in each pair of values first value is key and second one is value

console.log(tinderUser1.hasOwnProperty('name'))//true
//if property exists in tinderUser1 it returns true 
console.log(tinderUser1.hasOwnProperty('address'))//false
//if property doesn't exists in tinderUser1 it returns true

/////////////////////////////destructuring///////////////////////////////////

const course = {
    couseName : "js in hindi",
    prize : "999",
    courseInstructor : "Hitsh"
}

//descturing value 
//changing name of value
const {courseInstructor : instructor} = course
//console.log(courseInstructor)
console.log(instructor)


//json typical structure just for brief understanding
// {
//     "course" : "js in hindi",
//     "nameOfInstructor" : "hitesh",
//     "prize" : "999"
// }




