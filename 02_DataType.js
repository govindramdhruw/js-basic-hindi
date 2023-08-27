/*__________[Data Types]__________*/
/*
1. String: Yeh text values ko represent karta hai, jo single quotes (''), double quotes ("") ya backticks (``) mein likhe jaate hain.

2. Number: Ismein numeric values, jaise ki integers, floating-point numbers, aur special numeric values NaN (Not a Number) aur Infinity shamil hote hain.

3. Boolean: Ismein do mukhya values hoti hain - true aur false. Yeh logical values aur conditional statements mein istemal hote hain.

4. Undefined: Agar ek variable declare kiya gaya hai, lekin usmein koi value assign nahi ki gayi hai, to uska data type undefined hota hai.

5. Null: Yeh ek special data type hai, jo ek variable ko explicitly "null" value assign karne ke liye istemal hota hai.

6. Object: JavaScript mein objects ek complex data type hote hain, jinme key-value pairs hoti hain. Objects JSON (JavaScript Object Notation) format mein represent kiye ja sakte hain.

7. Array: Yeh ek tarah ki object hoti hai, jismein multiple values ko ek saath store kiya jaata hai. Arrays square brackets [] mein define kiye jaate hain.

8. Symbol: Yeh ek unique aur immutable data type hota hai, jo mostly object properties ke keys ke roop mein istemal hota hai.

9. Function: Functions bhi ek tarah ke objects hote hain. 
JavaScript mein functions first-class citizens hote hain, iska matlab hai unhe variables mein store kiya ja sakta hai aur dusre functions ke arguments ke roop mein bheja ja sakta hai.
*/

let name = "Superman"; // String
let age = 25; // Number
let isHero = true; // Boolean
let isMarried = undefined; // Undefined 
let salary = null; // Null
let address = { state: "Chhattisgarh", district: "Mahasamund", city: "Tumgaon" }; // Object 
let favorite_colors = ["Red", "Green", "Blue"]; // Array
let symbol = Symbol("name"); // Symbol
let myFunction = function(){console.log("Hello")}; // Function 
