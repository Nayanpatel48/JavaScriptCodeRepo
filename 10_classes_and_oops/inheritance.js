class User{
    constructor(userName){
        this.userName=userName
    }

    logMe(){
        console.log(`USERNAME is ${this.userName}`)
    }
}

class Teacher extends User{
    constructor(userName, password, email){
        super(userName)
        this.password=password
        this.email=email
    }

    addCourse(){
        console.log(`A new course was added by ${this.userName}`)
    }
}

const user1 = new Teacher("Jiten", "12345", "'jiten7@gmail.com")
user1.logMe()
user1.addCourse()

const user2= new User("Nayan")
// user2.addCourse()
// user2 does not have access to addCourse() function

console.log(user1 === user2)
console.log(user1 === Teacher)
console.log(user1 instanceof Teacher)//truef