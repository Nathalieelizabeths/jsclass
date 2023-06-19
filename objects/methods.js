let person ={
    name:'Ann',
    age:25,
    introduce:function(){
        console.log('Hello')
        console.log(`hello my name is ${this.name}`)
    }
}
person.introduce();
// person.greet=function(){
    person.greet=()=>{
    console.log('How are you doing')
    console.log(`i am $`)
}
person.greet();