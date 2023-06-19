// //given an array num of numbers with length of n find the target 13 in the the array
// //return the index if the target is found else null

// function binary(num,target){
//     let left =0
//     let right=num.length-1
//     while(left<=right){
//         let middle=Math.floor((left+right)/2);
//         if(num[middle]===target){
//             return middle
//         }
//         else if (num[middle]>target){
//             right=middle-1;
//         }
//         else{
//             left=middle+1;
//         }
//     }
//     return null
//     }
//     let num=[2,5,7,9,11,13,15,17,21,25]
//     let target =13
    
//     console.log(binary(num,target))

//     const search=(val,arr)=>{
//         for(let i=0;i<arr.length;i++){
//             if(val===arr[i]){
//                 return i
//             }
//         }
//     }

//     const values=[0,1,2,3,4,5,6,7,8,9,10]
//     console.log(search(8,values))
// let bina=[45,3,90,2,7,70,50,60]
// let target1=7
//     function binary2(bina){
//         let left=0
//         let right=bina.length -1
//         while(left<=right){
//             let middle=Math.floor((left+right)/2)
//             if(bina[middle]===target1){
//                 return middle
//             }else if(bina[middle]>target1){
//                 right=middle-1
//             }else(left=middle+1)
//         }

//     }
//     console.log(binary2(bina))

    let nyma=[1,13,14,19,25,31]
    let target5=25
    
    function search2(nyma,target5){
        let left=0
        let right=nyma.length-1
        while(left<=right){
            let middle=Math.floor((left+right)/2)
            if(nyma[middle]===target5){
                return middle
            }else if(nyma[middle]>target5){
                right=middle-1
            }else{
                left=middle+1
            }
        }
    return null
    }
    console.log(search2(nyma,target5))

    let nat =[23,12,56,78,7]
    console.log(find8(56,nat))

    const find8=(val,nat) =>{
        for(let j=0;j<nat.length;j++){
            if(val===nat[j]){
                return j
            }
        }
    }