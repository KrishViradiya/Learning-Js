//1. Object Literals

// making of symbol and using it in object
const mysym = Symbol("key1");

let user = {
  "full name": "full name Krish",
  [mysym]: "mykey1", // we can't give symbol like mysym:"mykey1" , it requires square bracet
  // such that when you will see it data type by implementing it in both
  // ways you will get idea.
  age: 20,
  email: "krish@gmail.com",
  isLoggedIn: true,

  user1: {
    name: "Krish inside object's object",
    age: 22,
  },
  names: ["krish", "krish in array", "krish2"],
};

// so to access the members of objects we have two methods , one through dot opertor
// and other through this square braces[] , which are demonstrated below

//accessing through dot operator
console.log(user.age);

// accessing arrays elements inside an object
console.log(user.names[1]);

// accessing through square braces[]
console.log(user["full name"]);
// accessing  the key with symbol and getting log its type

console.log(typeof mysym);
console.log(user[mysym]);

// accessing objects in side objects through both operators
console.log(user.user1.name);
console.log(user.user1["age"]);

// using function inside our object
user.greeting = function () {
  console.log(`Hello, ${this["email"]}`);
};

console.log(user.greeting());

// changing values
user.email = "vk@gmail.com";
console.log(user.email);

// freezing the objects such that one can't change its values
Object.freeze(user);
user.email = "emailchanged@gmail.com";

// so now when we try to log the changed gmail, it won't change
console.log(user.email);


