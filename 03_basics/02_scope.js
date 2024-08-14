var c = 300
let a = 300

if(true)
{
    //all things inside are block scope    
    let a=10
    const b=20
    //var c=30 avoid var
    c=30
    console.log(a)//30
}
//all out side is global scope
//console.log(a) not printed
//console.log(b) not printed
console.log(c) //30

console.log(a)//300

//////////////////////////////////////nested scope////////////////////////////////////////////////

function one()
{
    const userName = "Nayan"
    function two()
    {
        const website = "Youtube"
        console.log(userName)
    }
    //console.log(website)
    //website scope is over in two() cuntion
    two()//Nayan
}

one()

if(true)
{
    const userName = "Nayan"
    if(userName == "Nayan")
    {
        const webiste = "Youtube"
        console.log(userName + webiste)
    }
    //console.log(webiste)
    //webiste scope is over so causes error
}

//console.log(userName)
//username scope is over so causes error

//+++++++++++++++++++++++++++++ intresting ++++++++++++++++++++++++

function addOne(num)
{
    return num+1
}
addOne(5)


//addTwo(5)

const addTwo = function(num){return num+2}
//expression
addTwo(5)