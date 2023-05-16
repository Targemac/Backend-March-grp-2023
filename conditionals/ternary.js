let a = 2;
let b = 4;

let c = 8;
let d = 10;

if (a > b) {
  console.log("a is larger than b");
} else if (b > a) {
  console.log("b is larger than a");
}
// -----------------------------------------------

// using ternary ops
a > b
  ? console.log("a is larger than b")
  : b > a
  ? console.log("b is larger than a")
  : console.log("b is equal to a");
