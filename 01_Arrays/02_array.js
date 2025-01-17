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
//here this is called as `spread syntax` here it takes all the values of marvelHeroes & 
//dcHeroes individually and place them into all_newHeroes.

//spread syntax VS conactinating function:
//1)interms of performace both have negligable difference on small size arrays but when there are 
//large arrays the concatinating more efficient because it has to unpack each element individually.
//2)you can concate the non-array objects into an array using concate() but you can not do same 
// using spread syntax you must be ensure that the element must be array or array-type object.

console.log(all_newHeroes)

const another_array = [[1,3,4],90,90,[2],90,[24,5,6]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)
//all values are spread out using .flat()

//data scraping time useful

console.log(Array.isArray("Nayan"))
//to check if the provided argument is of type array or not we use isArray() method.

console.log(Array.from("Nayan"))
//string to array

console.log(Array.from({name:"Nayan"})) //intresting
//the .from() method will only convert the iterable objects and does not convert non iterable
//objects in this case also the given argument is an object which is not iterable.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))