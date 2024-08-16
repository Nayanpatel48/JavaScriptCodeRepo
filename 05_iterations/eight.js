//////////////////////////////////.reduce()/////////////////////////////////////
const myArray = [2,3,4,5,6,7]

const myTotal = myArray.reduce(function (acc, currVal) {
    console.log(`accumulator is ${acc} and current value is ${currVal}`)
    return acc+currVal
},0)
console.log(myTotal)
//27

//using arrow function

const myTotal1 = myArray.reduce((acc, currVal) => acc+currVal,0)

console.log(myTotal1)
//27

const myCart = [
    {
        name : "js course",
        prize : 2999
    },
    {
        name : "py course",
        prize : 999
    },
    {
        name : "data scince course",
        prize : 12999
    }
]

const totalCost = myCart.reduce((acc, item) => acc+item.prize,0)
console.log(totalCost)//16999