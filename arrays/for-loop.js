let num=[10,30,3,8,7,16,45];
for(let i=0;i<num.length;i++){
    // console.log(i)
    console.log(num[i])
}
for(let i=0;i<num.length;i++){
console.log({"break":num[i]})
if(i===4){
    break;

}
}
for(let i=0;i<num.length;i++){
    // console.log({"num":num[i]}) //with 2 it will give give the third index (up console no addition done)
    if(i==3){
        continue;
    }
    console.log({"continue":num[i]})
}

 


let num8=0 //0 will return all even numbers and 1 all odd numbers
 for(let p=0;num8<50;p++){
    num8+=2
        console.log(num8)
    }
    let arrr = [3, 5, 22, 5,  7,  2,  45, 75, 8]
    let arr = [9, 2, 42, 55, 71, 22, 4,  5,  90]
    let g=0
    for(let u=0;u<arrr.length;u++){
        g+=arrr[u]
    }
    let f=0
    console.log(g)
    for(let l=0;l<arr.length;l++){
        f+=arr[l]
    }
    console.log(f)
    console.log(g+f)
//     let y=0
//     let sum=0
// while(y<arr_1.length){
//     console.log(sum+=arr_1[y])
//     y++
    

// }
// console.log({sum})
// let r=0
// let sum2=0
// while(r<arr_2.length){
//     console.log(sum2+=arr_2[r])
// }
// console.log({sum2})
let nums=[1,3,6,70,50,40]
for(let u=0;u<nums.length;u++){
    console.log(nums[u])
    if(u===3);
    break;
    // console.log(nums[u])
}
let nums2=[89,90,7,50,56]
for(let e=0;e<nums2.length;e++){
    if(e===4){
        continue;
    }
console.log({"continue":nums2[e]})
}
let ly=[1,2,3,4,5]
let add=2
for(let i=0;i<ly.length;i++){
    add*=ly[i]
    console.log(add)
}
    
    
