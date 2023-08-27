/*__________[Objects]__________*/
/*
JavaScript me objects ek complex data type hote hain, jinme key-value pairs hote hain. Objects key-value pairs ko store karte hain, jahan har key ek unique identifier hoti hai jo uss value ko access karne ke liye use hoti hai. Objects unordered collections hote hain, iska matlab ki elements ki order matter nahi karti, kyunki aap unhe keys ke jariye access karte hain.

Objects curly braces `{}` me define kiye jate hain. Har key ko ek colon `:` ke saath uski value se associate kiya jata hai. Key-value pairs comma separated values ke roop me define kiye jate hain.
Example:
*/
const person = {
  name: 'John',
  age: 30,
  profession: 'Engineer'
};

/*
Objects me values kisi bhi data type ki ho sakti hain, jaise strings, numbers, booleans, arrays, aur even other objects.
Example:
*/
const product = {
  name: 'Laptop',
  price: 1000,
  isAvailable: true,
  specifications: ['8GB RAM', '256GB SSD', 'Intel Core i5']
};

/*
Objects ke values ko access karne ke liye aap dot notation (.) ya square brackets [] ka istemal kar sakte hain.
Using dot notation:
*/
console.log(person.name); // Output: 'John'
console.log(person.age); // Output: 30

/*
Using square brackets:
*/
console.log(product['name']); // Output: 'Laptop'
console.log(product['isAvailable']); // Output: true

/*
Agar aap ek invalid key se object ke value ko access karte hain, to undefined return hota hai.
Objects me ek specific key ko update karne ke liye, aap dot notation ya square brackets ka istemal kar sakte hain.
Using dot notation:
*/
person.age = 35;
console.log(person.age); // Output: 35

/*
Using square brackets:
*/
product['price'] = 1200;
console.log(product['price']); // Output: 1200

/*
Objects me ek new key-value pair add karne ke liye, aap simply uss key pe value assign kar sakte hain.
*/
person.gender = 'Male';
console.log(person.gender); // Output: 'Male'

/*
Ek key-value pair ko delete karne ke liye, aap `delete` keyword ka istemal kar sakte hain.
*/
delete person.profession;
console.log(person.profession); // Output: undefined

/*
Objects ke keys aur values ko loop karne ke liye, aap for...in loop ka istemal kar sakte hain.
Example:
*/
const person = {
  name: 'John',
  age: 30,
  profession: 'Engineer'
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// 'name: John'
// 'age: 30'
// 'profession: Engineer'

/*
Objects JavaScript me bahut flexible hote hain aur inse aap complex data structures ko represent kar sakte hain, jisse aap apne code ko organized aur structured bana sakte hain.
*/