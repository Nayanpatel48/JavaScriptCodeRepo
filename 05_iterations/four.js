const myObject = {
    js : 'javaScript',
    cpp : 'cplusplus',
    java : 'Java'
}

////////////////////////for in loop //////////////////////////////////

// for (const key in object) {
    
// }
//syntax

for(const key in myObject)
{
    console.log(key)
}
//all key are printed here

for(const key in myObject)
{
    console.log(`${key} key shotcut is for ${myObject[key]}`)
}
//js is key shotcut for javaScript
//cpp key shotcut is for cplusplus
//java key shotcut is for Java

//using for in loop for array
const myArray = ["cpp", "kt", "swift", "ruby"]
for (const i in myArray) {
    console.log(i)
}
//not values but key are printed
for (const i in myArray) {
    console.log(myArray[i])
}
//now values are printed

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('FR', 'France')

for (const key in map) {
    console.log(key)
}
//maps is not iteratable
//so nothing will be printed