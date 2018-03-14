console.log("hello world!");

for (var i = 0; i < 10; i++) {
  console.log("hi" + i);
}

var s = "this is a string";
s = 1;

function hello(i, j) {
  console.log("hello from function " + i + " and " + j);
  console.log(`hello from function ${i} and ${j}`);
}

hello(1, 2);

class A {
  method() {
    console.log("hello from class A method method");
  }
}

var x = new A();

x.method();

// immutable
const b = 1;

var arr = [0, 1, 2, 3, 4, 5];

console.log(arr[3]);

// object literal
var obj = {
  name: "Hilmi",
  age: 29,
  address: "Cyberjaya"
};

console.log(obj["age"]);
console.log(obj.age);

var key = "age";
console.log(obj[key]);

// assign function to variable

// anonymous function
var abc = function() {
  console.log("inside abc");
};

function xyz() {
  console.log("inside xyz");
}

console.log(abc);
console.log(xyz);

abc();
xyz();

var fa = function fb() {
  console.log("inside fb");
};

// function as argument
var calculate = function(operation) {
  return operation(1, 2);
};

var sum = function(a, b) {
  return a + b;
};

var deduct = function(a, b) {
  return a - b;
};

var op = function(operation) {
  return function() {
    return operation(1, 2);
  };
};

console.log(op(deduct)());

// ES2015 / ECMA Script 2015

// arrow function / anonymous function / lambda function / closure (php)
var fn = () => {
  console.log(this);
};

// fn();

var fn = function() {
  console.log(this);
};

// object literal
var obj = {
  first: "hilmi",
  last: "hassan"
};

// legacy destructuring
var first = obj.first;
var last = obj.last;

// object destructuring
var { first: firstName, last: lastName } = obj;
