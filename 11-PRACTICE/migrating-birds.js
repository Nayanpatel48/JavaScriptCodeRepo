function migratoryBirds(arr) {
    let temp=[]
    let dummy=[]
    let increment, max, size
    max=arr[0]

    for(let i=1;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
    }

    for(let i=0;i<max;i++){
        dummy.push(i+1)
    }
    size=max
    max=0

    for(let i=0;i<size;i++){
        increment=0
        for(let j=0;j<arr.length;j++){
            //if(i!=j){
                if(dummy[i] == arr[j]){
                   increment++ 
                }
            //}
        }
        if(increment > max){
            max=increment
        }
        temp.push(increment)
    }
    //console.log(max)
    
    for(let i=0;i<temp.length;i++){
        if(temp[i] == max){
            return i+1
        }
    }
}
let arr=[1, 4, 4, 4, 5, 3]
console.log(migratoryBirds(arr))