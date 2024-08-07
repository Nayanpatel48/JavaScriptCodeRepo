const name = "Nayan"
const repoCount = 50

//outdated style do not use 
console.log(name+repoCount)

//String concatinate
console.log(`Hello my name is ${name} and repocount is ${repoCount}`)


//by doing it it will give you more methods
const gameName = new String(`Dota_game`)
//the string methods
console.log(gameName.indexOf(`o`))
//we can access prototype as below
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase)//but does not change the original value
console.log(gameName.charAt(2))
console.log(gameName.indexOf('D'))

const newString = gameName.substring(0,4)
console.log(newString)

const newString1 = gameName.substring(-3,-6)
console.log(newString1)//not allow

//trimming the whitespaces
const newString2 = "    Nayan    "
console.log(newString2)
console.log(newString2.trim())

//strings are most powerful in any programming language
const url = "https://www.youtube.com^&watch?v=sscX432bMZo&t=1960s"
url.replace('^&', '/')
console.log(url)
console.log(url.includes('w'))

//string to array
const name1 = new String(`na-yan-pat-el`)
console.log(name1.split('-'))
//splited based on -

