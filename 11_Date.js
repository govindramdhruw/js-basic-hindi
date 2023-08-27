/*__________[Date]__________*/
/*
JavaScript date ek object hai jo tarikh aur samay ko represent karta hai. 
Isko new Date() constructor se create kiya jata hai.
Example:
*/

let myDate = new Date();

/*
Yeh code ek Date object create karega jo aaj ki tarikh aur samay ko represent karega.
Date object ke kai properties aur methods hote hain jo tarikh aur samay ko access aur manipulate karne ke liye use kiye ja sakte hain.
Properties:

* year: Year, 4-digit format mein.
* month: Month, 1-12 mein.
* day: Day, 1-31 mein.
* hour: Hour, 0-23 mein.
* minute: Minute, 0-59 mein.
* second: Second, 0-59 mein.
* millisecond: Millisecond, 0-999 mein.

Methods:

* getDate(): Day ko return karta hai.
* getMonth(): Month ko return karta hai.
* getFullYear(): Year ko return karta hai.
* getHours(): Hour ko return karta hai.
* getMinutes(): Minute ko return karta hai.
* getSeconds(): Second ko return karta hai.
* getMilliseconds(): Millisecond ko return karta hai.
* setTime(): Date ko set karta hai.
* getTimezoneOffset(): Time zone offset ko return karta hai.

Example:
*/

let myDate = new Date();

console.log(myDate.getDate()); // 27
console.log(myDate.getMonth()); // 7
console.log(myDate.getFullYear()); // 2023
console.log(myDate.getHours()); // 19
console.log(myDate.getMinutes()); // 44
console.log(myDate.getSeconds()); // 31
console.log(myDate.getMilliseconds()); // 1

myDate.setTime(1655671671000); // 2023-08-27 19:44:31 GMT+05:30

console.log(myDate.getDate()); // 27
console.log(myDate.getMonth()); // 7
console.log(myDate.getFullYear()); // 2023
console.log(myDate.getHours()); // 19
console.log(myDate.getMinutes()); // 44
console.log(myDate.getSeconds()); // 31
console.log(myDate.getMilliseconds()); // 1

/*
JavaScript date ka use web development mein kai purposes ke liye kiya ja sakta hai, jaise ki:

* Date and time ko display karna.
* Date and time ko calculate karna.
* Date and time ke basis per events ko trigger karna.

Example:
*/
// Date and time ko display karna

let myDate = new Date();

document.querySelector("h1").innerHTML = myDate.toDateString();
/*
Output:
Monday, August 27, 2023
*/
// Date and time ko calculate karna

let myDate = new Date();
let nextWeek = myDate.getDate() + 7;

document.querySelector("h1").innerHTML = nextWeek;
// Output: 34

// Date and time ke basis per events ko trigger karna

let myDate = new Date();

if (myDate.getDay() === 0) {
  // Sunday event trigger
}
// Date and time JavaScript mein ek important concept hai. Iss concept ko samajhna aur use karna web development mein bahut helpful hai.
