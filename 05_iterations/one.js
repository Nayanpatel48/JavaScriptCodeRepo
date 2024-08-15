///////////////////////////++++++++++for++++++++++////////////////////
// for (let index = 0; index < array.length; index++) 
//{
//     const element = array[index];  
//}
//for loop structure

for(let index=0;index<=10;index++)
{
    //for loop scope starts 
    if(index == 5)
    {
        console.log("5 is best number.")
    }
    console.log(index)
    //for loop scope ends
}

for(let i =1;i<=10;i++)
{
    //console.log(`Outer loop ${i}`)
    for(let j =1;j<=10;j++)
    {
        //console.log(`inner loop ${j} and inner loop ${i}`)
        console.log(i+ ` * `+j+` = `+i*j)
    }
}

let myArray = ["Flash", "Batman", "Superman"]

for(let i=0;i<myArray.length;i++)
{
    console.log(myArray[i])
}

////////////////break and continue///////////////////////

//printing number from 1 to 20
for(let i=1;i<=20;i++)
{
    if(i == 5)
    {
        console.log("Detected 5.")
        break
    }
    console.log(`value of i is ${i}`)
}
//after 5 is detected the loop will be breaked

for(let i=1;i<=20;i++)
{
    if(i == 5)
    {
        console.log("Detected 5.")
        continue
    }
    console.log(`value of i is ${i}`)
}