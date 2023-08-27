/*__________[Variables]__________*/
/*
JavaScript mein variable ek value ya data ko store karne ke liye use hota hai. Variables, data ko naam se represent karte hain taki aap us data ko later use kar sakein. Variables, dynamically typed hote hain, yani ki aap ek variable mein number, string, array, object, ya kisi bhi data type ki value store kar sakte hain.
JavaScript mein variable declare karne ke liye var, let, ya const keywords ka istemal hota hai. In teeno keywords ke beech kuch key differences hote hain:
*/

/*
1. var: Yeh older version hai aur global scope ya function scope mein variable declare karne ke liye istemal hota tha. Ismein variable hoisting ka concept hota hai, jiski wajah se variable declaration ko top par hoist kar diya jata hai, lekin value initialization wohi jagah hoti hai jahan variable ka code hota hai.
Example:
*/
var x = 45;
console.log(x);

/*
2. let: ES6 (ECMAScript 2015) mein let keyword introduce hua tha. Yeh block scope mein variable declare karne ke liye istemal hota hai. Ismein hoisting hota hai, lekin variable ko unitialized rakhte huye hoisting hota hai.
Example:
*/
let y = 90;
console.log(y);

/*
3. const: Yeh bhi ES6 mein introduce hua tha. const keyword constant values ko declare karne ke liye istemal hota hai. Ismein bhi block scope hota hai, aur ek baar const se variable declare karne ke baad uski value change nahi ki ja sakti.
Example:
*/
const z = 135;
console.log(z);

/*
Variable names ko declare karte waqt kuch rules ko follow karna zaroori hai:

1. Variable names underscore (_) ya dollar sign ($) se shuru ho sakte hain, ya fir letters se (a to z, A to Z) shuru ho sakte hain.
2. Variable names case-sensitive hote hain, yani ki myVariable aur myvariable alag-alag variables hote hain.
3. Keywords (jaise var, let, const, etc.) variable names nahi ho sakte hain.
4. Special characters, jaise ki @, !, %, etc., variable names mein istemal nahi kar sakte hain.
5. Variable names meaningful hona chahiye taki kisi bhi users ko samjhne me aasan ho.
Example:
*/

var firstName = "Guido";
let age = 30;
const PI = 3.14;