// javascript object

const person = {
  id: 1,
  name: "Kevin",
  age: 15,
  games: ["football", "volleyball"],
};

// converting to json
let data = JSON.stringify(person);
// console.log(data);

// reading json data
let response = JSON.parse(data);
