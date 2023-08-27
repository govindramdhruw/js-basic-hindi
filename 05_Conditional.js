/*__________[Conditional]__________*/
/*
JavaScript me conditionals ka istemal code me decision-making karne ke liye hota hai. 
Conditionals allow you to execute different blocks of code based on whether a specified condition is true or false. 
JavaScript me kuch important conditional statements hote hain:
*/

/*
1. if Statement:
if statement ek condition ko evaluate karta hai, agar condition true hoti hai, to us block of code ko execute karta hai. Agar condition false hoti hai, to block ko ignore karke next code line pe move karta hai.

Syntax:
if (condition) {
  // Code to be executed if the condition is true
}

Example:
*/
const age = 25;
if (age >= 18) {
  console.log('You are an adult.'); // Output: 'You are an adult.'
}

/*
2. if-else Statement:
if-else statement ek condition ko evaluate karta hai, agar condition true hoti hai, to first block of code execute hota hai, agar condition false hoti hai, to second block of code execute hota hai.

Syntax:
if (condition) {
  // Code to be executed if the condition is true
} else {
  // Code to be executed if the condition is false
}

Example:
*/
const temperature = 25;
if (temperature > 30) {
  console.log('It is hot outside.'); // Not executed
} else {
  console.log('It is not very hot.'); // Output: 'It is not very hot.'
}

/*
3. if-else if-else Statement:
Ye statement multiple conditions ko check karta hai. Pehle se dusri condition check karta hai, agar wo true hoti hai, to us block of code ko execute karta hai, agar nahi hoti hai, to agli condition check hoti hai, aur isi tarah se continue hota hai.

Syntax:
if (condition1) {
  // Code to be executed if condition1 is true
} else if (condition2) {
  // Code to be executed if condition2 is true
} else {
  // Code to be executed if all conditions are false
}

Example:
*/
const marks = 85;
if (marks >= 90) {
  console.log('Excellent!'); // Not executed
} else if (marks >= 70) {
  console.log('Good!'); // Output: 'Good!'
} else {
  console.log('You can do better.'); // Not executed
}

/*
4. Ternary Operator:
Ternary operator ek short form of if-else statement hota hai. Ye ek single line expression hota hai jiska use ek condition check karne ke liye kiya jata hai.

Syntax:
condition ? expression1 : expression2

Example:
*/
const age = 20;
const message = age >= 18 ? 'You are an adult.' : 'You are not an adult.';
console.log(message); // Output: 'You are an adult.'

/*
5. Switch Statement:
Switch statement multiple conditions ke liye use hota hai. Aap ek variable ya expression ka value compare karke uske value ke hisab se different cases ko execute kar sakte hain.

Syntax:
switch (expression) {
  case value1:
    // Code to be executed if expression matches value1
    break;
  case value2:
    // Code to be executed if expression matches value2
    break;
  default:
    // Code to be executed if expression doesn't match any case
}

Example:
*/
const day = 'Tuesday';
switch (day) {
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
    console.log('Weekday'); // Output: 'Weekday'
    break;
  case 'Saturday':
  case 'Sunday':
    console.log('Weekend'); // Not executed
    break;
  default:
    console.log('Invalid day'); // Not executed
}

/*
In conditionals ka istemal code ko dynamic aur flexible banane ke liye hota hai, jisse aap specific conditions ko check karke alag-alag situations me alag-alag code execute kar sakte hain.
*/