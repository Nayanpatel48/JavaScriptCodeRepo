function dayOfProgrammer(year) {
    let isLeapYear= (year % 100  % 4 == 0) ? true : false
    let arr, sum, flag
    sum=0
    flag=256

    if (isLeapYear) {
        console.log("leap")
        arr=[31,29,30,31,30,31,30,31,30,31,30,31]
    } else {
        arr=[31,28,30,31,30,31,30,31,30,31,30,31]
    }

    for(let i=0;i<arr.length;i++){
        if(flag<=31){
            if(i<=9){
                return `${flag-1}.0${(i+1)}.${year}`
            } else {
                return `${flag-1}.${(i+1)}.${year}`
            }
        }
        flag-=arr[i]
    }
}
console.log(dayOfProgrammer(2100))