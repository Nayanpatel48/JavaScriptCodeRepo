let arr=[1,3,2,6,1,2]

function divisibleSumPairs(n, k, ar) {
    let i, j;
    let count=0
    i=0;
    while(i<n){
        j=i
        while(j<n){
            if(i != j){
                if((ar[i] + ar[j]) % k == 0){
                    //console.log(ar[i]+" "+ar[j])
                    count++
                }
                j++
                continue
            }
            j++
        }
        i++
    }
    return count
}
console.log(divisibleSumPairs(6,3,arr))