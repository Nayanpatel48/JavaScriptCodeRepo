const  coding = ["java", "Kotlin", "c", "cpp"]

const values = coding.forEach((item) => {
    console.log(item)
})

console.log(values)
//undefined

const values1 = coding.forEach((item) => {
    //console.log(item)
    return item
})
//for loop does not return anything

console.log(values1)
//undefined

const myNums = [1,2,3,4,5,6,7,8,9,10]

//only values greater than 4
//.filter returns the values
const myNumAnswer = myNums.filter( (num) => {return num>4})
//must use return
console.log(myNumAnswer)

const newNums = []
myNums.forEach((num) => {
    if(num > 4)
    {
        newNums.push(num)
    }
})

console.log(newNums)
//[5,6,7,8,9,10]

const booksArray = [
    {book : "book1", genere:"Fiction", dateOfPublish:1934},
    {book : "book2", genere:"History", dateOfPublish:1937},
    {book : "book3", genere:"Fiction", dateOfPublish:1939},
    {book : "book4", genere:"Drama", dateOfPublish:1934},
    {book : "book5", genere:"Drama", dateOfPublish:1933},
    {book : "book6", genere:"Sci-fi", dateOfPublish:1939},
    {book : "book7", genere:"Sci-fi", dateOfPublish:1930},
    {book : "book8", genere:"Fiction", dateOfPublish:1978}
]

//user wants all history books
// const userBooks = booksArray.filter((bk) => bk.genere === "Fiction")
// console.log(userBooks)

//user wants all books which are pulbilshed before 1935
const userBooks = booksArray.filter((bk) => {return bk.dateOfPublish > 1935 && bk.genere === "History"})
console.log(userBooks)