// let myName = "Hitesh     " 

// console.log(myName.truelength)//6

let myHero = ["thor", "spiderman", "BlackWiddow"]

let heroPower= {
    thor : "hammer",
    spiderman: "string",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}
//injecting inside Object

Object.prototype.hitesh = function(){
    console.log("Hitesh is present in all objects.");
}

// heroPower.hitesh()
//Hitesh is present in all objects.

//myHero.hitesh()
//Hitesh is present in all objects.

Array.prototype.heyHitesh = function(){
    console.log("Hitesh says hello.");
}

myHero.heyHitesh()
//Hitesh says hello.

//heroPower.heyHitesh()

//////////////////////////inheritance//////////////////

//every object is an instance in itself

//old syntax
const user = {
    name : 'chai',
    email: 'chai@exam.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport={
    makeAssignment: 'js assignment',
    fullTime : true,
    __proto__: TeachingSupport
}

Teacher.__proto__=user

///modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

////////////////////////////////////////

let anotheruserName = 'chaia aur code'
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.name}`)
    console.log(`True length is ${this.trim().length}`)
}
anotheruserName.trueLength()
//True length is 14

"hitesh".trueLength()
"iceTea".trueLength()