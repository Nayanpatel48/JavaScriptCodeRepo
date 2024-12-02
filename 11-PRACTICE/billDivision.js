function bonAppetit(bill, k, b_charged) {
    bill[k]=0;
    let sum=0
    for(let i=0;i<bill.length;i++){
        sum+=bill[i]
    }
    let b_actual= (sum/2)
    console.log((b_actual == b_charged) ? "Bon Appetit" : b_charged-b_actual)
}
let bill = [3,10,2,9]
let k=1
let b=7
bonAppetit(bill, k,b)