/*__________[Functions]__________*/
/*
JavaScript me functions ek set of statements hote hain jo ek specific task ya action ko perform karne ke liye use hote hain. Functions ek reusable code block provide karte hain jise aap multiple times call kar sakte hain. Ye code organization, modularity, aur reusability ko improve karte hain.

Functions ko define karne ke liye `function` keyword ka istemal hota hai. Function ke name ke baad parentheses me arguments (parameters) declare kiye jaate hain, aur function ke body me statements define kiye jaate hain jo task ko execute karte hain. Function ke body curly braces `{}` ke bheetar hota hai.

Syntax:

function functionName(parameter1, parameter2, ...) {
  // Function body (statements)
}


Example:
*/
function greet(name) {
  console.log('Hello, ' + name + '!');
}

/*
Functions ko call karne ke liye, function name ke baad parentheses me arguments pass kiye jaate hain (if required). Arguments function ke parameters ko assign karte hain.

Example:
*/
greet('John'); // Output: 'Hello, John!'
greet('Alice'); // Output: 'Hello, Alice!'

/*
Functions ek value bhi return kar sakte hain, jise `return` statement ke jariye kia jata hai.

Example:
*/
function add(a, b) {
  return a + b;
}

const result = add(3, 5);
console.log(result); // Output: 8

/*
Function me `return` statement ke baad ka code execute nahi hota, aur function immediately return ho jata hai.

Function me multiple values ko return karne ke liye, aap array, object, ya tuple ka istemal kar sakte hain.

Example using array:
*/
function getCoordinates() {
  const x = 10;
  const y = 20;
  return [x, y];
}

const [xCoord, yCoord] = getCoordinates();
console.log(xCoord, yCoord); // Output: 10 20

/*
Example using object:
*/
function getPersonInfo() {
  return {
    name: 'John',
    age: 30,
    profession: 'Engineer'
  };
}

const person = getPersonInfo();
console.log(person.name); // Output: 'John'
console.log(person.age); // Output: 30

/*
Function me default parameters ko define kiya ja sakta hai, jo agar function call me missing hote hain to unhe default values se initialize kar diya jata hai.

Example:
*/
function greet(name = 'Guest') {
  console.log('Hello, ' + name + '!');
}

greet(); // Output: 'Hello, Guest!'
greet('Alice'); // Output: 'Hello, Alice!'

/*
Function ko ek variable me assign karke bhi define kiya ja sakta hai. Aise functions ko "anonymous functions" ya "function expressions" kehte hain.

Example:
*/
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(2, 3)); // Output: 6

/*
Function ko ek arrow function (ES6 syntax) me bhi define kiya ja sakta hai.

Example:
*/
const divide = (a, b) => {
  return a / b;
};

console.log(divide(10, 2)); // Output: 5

/*
Functions JavaScript me bahut powerful hote hain aur inse aap code ko modular aur organized rakh sakte hain. Ye code reusability ko bhi improve karte hain, kyunki aap ek function ko multiple times call kar sakte hain aur code repetition se bach sakte hain.
*/