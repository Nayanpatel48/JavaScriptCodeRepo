//Dates

let myDate = new Date()
console.log(myDate)

console.log(myDate.getDate())//8
console.log(myDate.getDay())//4
console.log(myDate.getFullYear())//2024
console.log(myDate.getHours())//19
console.log(myDate.getMilliseconds())//786
console.log(myDate.getMinutes())//6
console.log(myDate.getMonth())//7
console.log(myDate.getSeconds())//25
console.log(myDate.getTime())//1723124185786
console.log(myDate.getTimezoneOffset())//-330
console.log(myDate.getUTCDate())//8
console.log(myDate.getUTCDay())//4
console.log(myDate.getUTCFullYear())//2024
console.log(myDate.getUTCHours())//13
console.log(myDate.getUTCMilliseconds())//786
console.log(myDate.getUTCMinutes())//36
console.log(myDate.getUTCMonth())//7
console.log(myDate.getUTCSeconds())//25
console.log(myDate.setDate(3))//1722692185786
console.log(myDate.setFullYear(899))//-33778896422214
console.log(myDate.setHours(90))//-33778640822214
console.log(myDate.setMilliseconds(89))//-33778640822911
console.log(myDate.setMinutes(23))//-33778639802911
console.log(myDate.setMonth(7))//-33778639802911
console.log(myDate.setSeconds(34))//-33778639793911
console.log(myDate.setTime(1))//1
console.log(myDate.toJSON())//1970-01-01T00:00:00.001Z
console.log(myDate.toString())//Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Tme)
console.log(myDate.toTimeString())//05:30:00 GMT+0530 (India Standard Time)
console.log(myDate.toUTCString())//Thu, 01 Jan 1970 00:00:00 GMT

let myCreatedDate = new Date(2024,0,18)
//in javaScript months starts from 0
console.log(myCreatedDate)

let myNewCreatedDate = new Date(2024,0,12,7,19)
console.log(myNewCreatedDate.toLocaleString())

let newDate = new Date("2024-8-9")
//yy-mm-dd
console.log(newDate.toLocaleString())

let date1 = new Date("9-8-2022")
//dd-mm-yy this formate is famous in india
console.log(date1.toLocaleString())

let date2 = Date.now()
console.log(date2)
//current date in milliseconds from 1971 till now


//console.log(date2.getTime)

console.log(Math.floor(Date.now()/1000))
//converted into seconds (common interview question)

let date3 = new Date()
console.log(date3)
console.log(date3.getDay())
console.log(date3.getMonth()+1)
//cause month starts from 0

//this is string interpollation '${newDate.getDay()}'

date3.toLocaleString('default',{
    weekday: "long"
})

