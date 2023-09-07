// const user = {
//   username: "krish",
//   pricce: 999,

//   welcomeMessage: function () {
//     console.log(`${this.username} , welcoome to this web`);
//     // console.log(this);
//   },
// };

// user.welcomeMessage();

// // here we are changing the context
// user.username = "krishssssssss";
// user.welcomeMessage();

// console.log(this); //here it gives empty object because of node engine

// function chai() {
//   let username = "krish";
//   console.log(this);
// }

// chai();

// ************************ARROW FUNCTIONS ****************

const chai = () => {
  //   let username = "krish";
  console.log(this);
};

chai();

const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(1, 2));

// implicit return , no need to write the return statement and write n one line as shown below

// so whenever you use curly braces , you need to write return statement
const addOne = (num1, num2) => num1 + num2;
console.log(addOne(1, 2));

// to return an object we need to wrap them in curly braces
const obj = () => ({ username: "krish" })
console.log(obj());
