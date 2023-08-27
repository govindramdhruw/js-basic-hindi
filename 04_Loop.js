/*__________[Loops]__________*/
/*
JavaScript me loop ka istemal code ko ek baar ya multiple baar execute karne ke liye hota hai. 
Loop ki madad se aap ek block of code ko bar bar chala sakte hain jab tak koi specific condition satisfied ho ya ek list (array) ya object ke saare elements par iterate kar sakte hain. 
JavaScript me kuch prakar ke loops hote hain:
*/

/*
1. for loop:
for loop ek definite number of iterations ke liye use hota hai. 
Aapko loop me initialize karna hota hai ek variable, condition set karna hota hai, aur increment ya decrement karna hota hai us variable ko, taaki loop terminate ho sake.

Syntax:
for (initialization; condition; increment/decrement) {
  // Code to be executed in each iteration
}

Example:
*/
for (let i = 1; i <= 5; i++) {
  console.log(i); // Output: 1 2 3 4 5
}

/*
2. while loop:
while loop ek indefinite number of iterations ke liye use hota hai.
Aapko loop me ek condition set karna hota hai, jo true hone par loop execute hota rahega, aur jab tak condition false nahi ho jati, tab tak loop chalta rahega.

Syntax:
while (condition) {
  // Code to be executed in each iteration
}

Example:
*/
let count = 1;
while (count <= 5) {
  console.log(count); // Output: 1 2 3 4 5
  count++;
}

/*
3. do-while loop:
do-while loop bhi ek indefinite number of iterations ke liye use hota hai. 
Yeh loop while loop ke jaisa hi hota hai, lekin yahan code ko pehle ek baar execute kiya jata hai, phir condition check hoti hai.

Syntax:
do {
  // Code to be executed in each iteration
} while (condition);

Example:
*/
let count = 1;
do {
  console.log(count); // Output: 1 (Since the condition is checked after execution)
  count++;
} while (count <= 5);

/*
4. for...of loop:
for...of loop ek iterable object (Array, String, Map, Set, etc.) ke elements par iterate karne ke liye use hota hai.

Syntax:
for (const element of iterable) {
  // Code to be executed for each element
}

Example:
*/
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
  console.log(fruit); // Output: 'apple' 'banana' 'orange'
}

/*
5. for...in loop:
for...in loop object ke enumerable properties par iterate karne ke liye use hota hai.

Syntax:
for (const property in object) {
  // Code to be executed for each property
}

Example:
*/
const person = {
  name: 'John',
  age: 30,
  profession: 'Engineer'
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`); // Output: 'name: John' 'age: 30' 'profession: Engineer'
}

/*
Loops ka istemal repetitive tasks ko automate karne ke liye hota hai aur code ko compact aur efficient banane me madad karta hai. 
Dhyan rahe ki loop ke andar apne variables ko sahi tarike se update karna bahut important hai, anyatha aap infinite loop me fas sakte hain, jisse aapka code hang ho sakta hai.
*/
