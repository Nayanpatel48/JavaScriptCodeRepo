const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumbers.map((num) => {return num+10})
//if you do not use return keyword then you get all undefined values
console.log(newNums)

///////////////////////////////chaining/////////////////////////////

const newNums1= myNumbers
.map((num) => num*10)
.map((num) => num+1)
.filter((num) => num>50)

console.log(newNums1)
//maps will be too much useful