// 1. regular function
function greet() {
  let output = "Thank you for coming";
  return output;
}

// .1-b
const greet = () => {};

// 2. named function
const getUser = function (id) {
  let user = {
    id: 22,
    name: "John",
  };
  return user;
};

// 2-b
const get_User = (id, code) => {};

// 3. arrow fnction
const getId = () => {};

// ------------------ class-work
// 1. create the following regular functions and their respective arrow funtions
// a. adder(a,b,c)
function adder(a, b, c) {}
const adder = (a, b, c) => {};

// b. getName(userId)
function getName(userId) {}
const getName = (userId) => {};

// c. fetchData(userId)
function fetchData(userId) {}
const fetchData = (userId) => {};
