function sum(arr){
    //console.log(arr)
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return sum;
}
function birthday(s, d, m){
    let temp_arr=[]
    let j, count;
    count=0

    for(let i=0;i<s.length;i++){
        //console.log(temp_arr)
        j=i;
        //adding elements to the array
        while(j<i+m){
            temp_arr.push(arr[j])
            j++
        }

        //calling the function to varify
        if(sum(temp_arr) == d){
            count++
        }

        j=0;
        //deleting elements from the array
        while(j<m){
            temp_arr.pop()
            j++
        }
    }
    return count
}
let arr = [2,2,1,3,2]
let d=4
let m=2
console.log(birthday(arr,d,m))