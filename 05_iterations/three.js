const arr = [1,2,3,4,5]

/////////////for of loop////////////////

for (const i of arr) {
    console.log(i)
}

const name = "Nayan"
for (const j of name) {
    console.log(j)
}

///////////////Map////////////

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('FR', 'France')

console.log(map)
map.set('IN', 'India')

console.log(map)
//maps are known for it's unique values means they does not contains duplicate values

//using forof loop on map
for (const key of map) {
    console.log(key)
}
//value are printed along with it's key values

//if we want to access the key and values saperately then we can do it as fllows
//here in [key, value] we have did the destructuring of an array
for (const [key, value] of map) {
    console.log(`here key is ${key} and value is ${value}`)
}

const object ={
    'game1' : 'NFS',
    'game2' : 'Spiderman'    
}

// for (const [key, value] of object) {
//     console.log(`key is ${key} and value is ${value}.`)
// }
//this will cause an error because objects are not iterable