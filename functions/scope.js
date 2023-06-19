let a =20; //global variable

function add(b){
    // console.log(a+b);
    console.log({a})
    let c =30
    console.log(a + b + c)
    a=60
}
add(20);
console.log("a2",a);

function multiply(c){
    console.log(a*c);
    d=7  //not declared there is liberty to use it
}
multiply(3)
console.log(d)

function greet(){
    let hello ="hi"
    function talk(){
        let greeting ="hey there"
        console.log(`${hello} ${greeting}`)
    }
    talk()
}
greet()
//local declare in inside the function
//outside is global