let userDetails= true;

let  promise=new Promise(function(resolve,reject){
    if(userDetails){
        setTimeout(()=>{resolve('User details available')},5000)
    }else{
        setTimeout(()=>reject('No user details available'),5000)
    }
})

// async function getuserdetails
//has to be async to have await
const getuserdetails=async()=>{
    let response =await promise;
    console.log({response})
}
getuserdetails()

let add=async()=>{
    console.log(20+30)

}
add()