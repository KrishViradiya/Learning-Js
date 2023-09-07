const tinder = new Object()

 const tinderUser = {}
 tinderUser.id ="123abc"
 tinderUser.name = "Krish"
 tinderUser.isLoggedIn = false;

//  console.log(tinderUser);

const regUser = {
    email:"vk@gmail.com",

    fullname:{
        userfullname:{
            firstname:"krish",
            lastname:"viradiya"
        }
    }
}


// combining two objects;

const obj1 = {
    1:"a",
    2:"b"
}

const obj2 = {
    3:"c",
    4:"d"
}
//merging using spread operator => mostly we'll use this syntax only
// const obj3 = {...obj1,...obj2}

// using Object.assign  ,  it returns a modified object. we use empty array{}
// let's say we have more than two objects and hence this we use{} ,
// if we won't use {} then the return will be stored in firt object and to avoid this we return it to an empty object.

const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

console.log(Object.keys(obj3)); // will gie array as output
console.log(Object.values(obj3));

console.log(Object.entries(obj3)); // array inside array

console.log(obj3.hasOwnProperty('3'));

// to studdy more about the properties and methods og objects , try experimentation 
// in browser and try it out 

// destructuring the object
const course = {
    coursename: "Js in hindi",
    price:"999",
    courseTeacher:"HC"
}

const{courseTeacher:t} = course

console.log(t)

// arrays can also be destructured like object

const js  = {
    name:"Krish",
    ae:20
}
const name = ['krish' , 'krish2']

console.log(Object.entries(name));