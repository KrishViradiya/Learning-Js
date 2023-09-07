function one() {
  const name = "krish";
  console.log("inside function one: " + name);
  function two() {
    const website = "youtube.com";
    console.log("inside function two" + website);
  }
  two();
  // console.log(website);
}

one();

// two();

if (true) {
  const username = "krish";
  if (username === "krish") {
    const website = "youtube";
    console.log(website);
  }

  //   console.log(website);
}

// console.log(username);

// ****************interesting************************************

// here we can log the function before even initializing it
console.log(addone(5));

function addone(num){
    return num + 1
}


// sometimes this functions are also called expression
//so below given are the differences between functions and expressions
console.log(addTwo(5));

const addTwo = function(num ){
    return num + 2;
}
