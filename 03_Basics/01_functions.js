function addTwoNumbers(a, b) {
  // let ans = a + b
  // return ans
  // after return nothing will be executed
  // console.log(a+b);

  return a + b;
}

let ans = addTwoNumbers(30, 4);
// console.log(ans)

function logInUserMessage(username = "krish") {
  // we can use default name in parameters to  avoid some situations
  if (!username) {
    // because undefined is false by default
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(logInUserMessage()); // when you won't pass anything it says undefined just logged in

function calculateCartPricce(...num) {
  // ... is rest operator
//   num.map((e) => e + 3);
  return num;
}
let num  = calculateCartPricce(2,4,6);

console.log(num);
// console.log(calculateCartPricce(2, 4, 6));

const user = {
  username: "krish",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
// here checking everthing is ost important
handleObject(user);

const myArr = [200 , 400 ,600]

function returnSecondValue(getArray){
    return getArray[2]
}


console.log(returnSecondValue([200,400,100,12,123,413,121]));