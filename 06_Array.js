/*__________[Arrays]__________*/
/*
JavaScript me array ek data structure hai jo multiple values ko ek single variable me store karne ki permission deta hai. Arrays ordered collection hoti hain, jiske har element ko ek unique index se access kiya ja sakta hai. JavaScript me arrays dynamic hote hain, iska matlab hai aap unmein dynamically elements add, remove, aur modify kar sakte hain.

Arrays ko square brackets `[]` me define kiya jata hai. Elements ko comma separated values ke roop me array me add kiya jata hai.

Example:
*/
const fruits = ['apple', 'banana', 'orange'];

/*
JavaScript me arrays mixed data types ke elements bhi store kar sakte hain. Arrays numbers, strings, objects, aur even other arrays ko bhi store kar sakte hain.

Example:
*/
const mixedArray = [42, 'hello', { name: 'John' }, [1, 2, 3]];

/*
Arrays me har element ko ek unique index se access kiya ja sakta hai. Indexing zero-based hoti hai, iska matlab pehla element index 0 pe hoga, doosra element index 1 pe hoga, aur aise hi aage badhta rahega.

Example:
*/
const numbers = [10, 20, 30, 40];
console.log(numbers[0]); // Output: 10
console.log(numbers[2]); // Output: 30

/*
JavaScript me arrays ki length property hoti hai, jo array me present elements ki count return karti hai.

Example:
*/
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.length); // Output: 3

/*
Arrays me elements ko update (modify) karne ke liye, aap specific index pe naye value ko assign kar sakte hain.

Example:
*/
const fruits = ['apple', 'banana', 'orange'];
fruits[1] = 'grapes';
console.log(fruits); // Output: ['apple', 'grapes', 'orange']

/*
Arrays me elements ko add karne ke liye, aap `push()` method ka istemal kar sakte hain.

Example:
*/
const fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // Output: ['apple', 'banana', 'orange']

/*
Arrays se elements ko remove karne ke liye, aap `pop()` method ka istemal kar sakte hain, jo last element ko remove karta hai.

Example:
*/
const fruits = ['apple', 'banana', 'orange'];
fruits.pop();
console.log(fruits); // Output: ['apple', 'banana']

/*
Arrays me specific index se elements ko remove karne ke liye, aap `splice()` method ka istemal kar sakte hain.

Example:
*/
const fruits = ['apple', 'banana', 'orange'];
fruits.splice(1, 1); // Remove one element starting from index 1
console.log(fruits); // Output: ['apple', 'orange']

/*
Arrays ke elements ko loop karne ke liye, aap for loop, for...of loop, ya forEach method ka istemal kar sakte hain.

Example using for loop:
*/
const fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output:
// 'apple'
// 'banana'
// 'orange'

/*
Example using for...of loop:
*/
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
  console.log(fruit);
}
// Output:
// 'apple'
// 'banana'
// 'orange'
/*
Example using forEach method:
*/
const fruits = ['apple', 'banana', 'orange'];
fruits.forEach((fruit) => {
  console.log(fruit);
});
// Output:
// 'apple'
// 'banana'
// 'orange'

/*
Arrays JavaScript me bahut versatile hote hain aur inse aap alag-alag data ko organize kar sakte hain aur unpe operations perform kar sakte hain.
*/