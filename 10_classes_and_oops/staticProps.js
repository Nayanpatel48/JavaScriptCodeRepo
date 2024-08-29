class User{
    constructor(userName){
        this.userName=userName
    }

    logMe(){
        console.log(`UserName: ${this.userName}`)
    }
/////////////////////static//////////////////
//static keyword does not allow any one to access the createId
//not event it's child
    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
//console.log(hitesh.createId())

class Teacher extends User{
    constructor(userName, email){
        super(userName)
        this.email=email
    }
}
const iphone=new Teacher("iphone", "i@phone.com")
iphone.logMe()
console.log(iphone.createId())