let num=[10,30,3,8,7,16,45];
let i=0
let sum=0
let multiply=1
while(i<num.length){
    console.log(num[i])
    console.log(sum+=num[i])
    console.log(multiply*=num[i])
    i++
}
console.log({sum});
console.log({multiply})
//while loop keeps iliterating over and over till the condition is passed
h=0
while(h<22){
    h+=2
    console.log(h)
}
//to print out even numbers
// let arrg1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
// let arr2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// let s=0
// let sum2=0
// while(s<arr1.length){
//     console.log(sum2+=arr1)
    
// }
// let z=0
// let sum3=0
// while(z<arr2.length){
//     console.log(sum3+=arr2)
// }


// Example output: 
// 276 + 351 = 627

let pple=[3,5,45,32,45]
let sum1 =0
let k=0
while(k<pple.length){
sum1+=pple[k]
    k++
}
console.log({sum1})