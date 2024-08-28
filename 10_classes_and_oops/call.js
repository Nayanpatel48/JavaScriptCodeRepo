//interview will be creacked using it
function setUserName(userName){
    //complex DB calls
    this.userName=userName
}

function createUser(userName, email, password){
    //explicitly calling method
    setUserName.call(this, userName)
    
    this.email=email
    this.password=password
}

const chai = new createUser('chai','chai@fb.com','123')
console.log(chai)