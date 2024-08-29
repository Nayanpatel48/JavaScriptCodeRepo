//ES6

// class User{
//     constructor(userName, email, password){
//         this.userName=userName
//         this.email=email
//         this.password=password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUserName(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

//constructor is called atomatically when we use new keyword

//creating user

// const user1 = new User(
//     "Nayan","nayan@45.gmail", "28782842"
// )
// console.log(user1.encryptPassword())//28782842abc
// console.log(user1.changeUserName())//NAYAN

//behind the scene

function UserC(userName, email, password){
    this.userName=userName
    this.email=email
    this.password=password
}

UserC.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
UserC.prototype.changeUserName=function(){
    return `${this.userName.toUpperCase()}`
}
const user2 = new UserC(
    "Nayan","nayan@45.gmail", "28782842"
)
console.log(user2.encryptPassword())//28782842abc
console.log(user2.changeUserName())//NAYAN