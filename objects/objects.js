//creating an object
//objects are seperated using a comma
let person={
    name:"Nathalie",
    age:20,
    height:"5ft",
    friend:{ 
        name:"Baryl",
        age:25
    }
}

let person1=new Object();
console.log({person1});
person1.name='Edith'; //adding a new property
person1.age=40;
console.log({person1});
console.log(person.age); //log a value
person['age']=25; //updating an existing property
console.log({person});//get the whole person object in the terminal
//to delete we use (delete person.age)
console.log(person.friend.age);
console.log({person})