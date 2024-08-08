const marvelHeroes = ["Spiderman", "Ironman","Thor"]
const dcHeroes = ["Aquaman", "Flashman","Batman"]

// marvelHeroes.push(dcHeroes)
// //array into array

// console.log(marvelHeroes)

// console.log(marvelHeroes[3][1])

const newArray = marvelHeroes.concat(dcHeroes)
//concat returns new arrays
console.log(newArray)

const all_newHeroes = [...marvelHeroes, ...dcHeroes]
//just like droping glass on floowr and then values s[readed all over]
console.log(all_newHeroes)

const another_array = [[1,3,4],90,90,[2],90,[24,5,6]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)
//all values are spread out

//data scraping time useful

console.log(Array.isArray("Nayan"))
console.log(Array.from("Nayan"))
//string to array
console.log(Array.from({name:"Nayan"})) //intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))