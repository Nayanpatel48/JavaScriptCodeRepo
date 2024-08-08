//array

const arr = [0,1,2,3,4,5]
//javaScript arrays are resizable

console.log(arr[0])//0
//accessing array elements

//interview question:
//when we copy arrays then it makes deep copies ( does not share the same reference)
//shallow copy (shares the same reference)

const superheroList = ["Superman","Flash"]

const arr2 = new Array(1,2,3,4)
console.log(arr2[2])//3

arr2.push(89)
console.log(arr2)
arr2.push(11)
console.log(arr2)
arr2.pop()
console.log(arr2)

arr2.unshift(900)
console.log(arr2)
arr2.shift()
//we inserted 900 at the beginning of the array and we shifted all the elements one 
//index
//be careful while using it if there are too many values in array at that time 
//the load on the computer will be increased 
console.log(arr2)
//900 added and removed using shift

console.log('900 was there in arr2? ->'+arr2.includes(900))
console.log('1 was there in arr2? ->'+arr2.includes(1))
//checks whether the element is there in the array or not

const arr3 = arr2.join()
console.log(arr3)
console.log(typeof arr3)//string

///////////////slice, splice/////////////////////////////////////////////

arr4 = [1,2,34,5,6,7,7]
console.log("original array:"+arr4)

//slice
const ar1 = arr4.slice(1,3)

console.log("after using slice: "+ar1)
console.log("after using slice original array: "+arr4)

//splice
const ar2 = arr4.splice(1,4)

console.log("after using splice: "+ar2)
console.log("after using splice original array: "+arr4)
//it's difference is often asked by interviewers







