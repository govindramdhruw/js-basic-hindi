/*__________[Operators]__________*/
/*
1. Assignment Operators:

(=): Is operator ka istemal variable ko ek value assign karne ke liye hota hai. 
Example:
*/
let x = 10; 

/*
2. Arithmetic Operators:

(+): Addition ka operator, jise numbers ko add karne ke liye istemal kiya jata hai. 
Example:
*/ 
var sum = 3 + 2;
/*
(-): Subtraction ka operator, jise numbers ko subtract karne ke liye istemal kiya jata hai.
Example:
*/
var difference = 5 - 2;
/*
(*): Multiplication ka operator, jise numbers ko multiply karne ke liye istemal kiya jata hai. 
Example:
*/
var product = 4 * 3;
/*
(/): Division ka operator, jise numbers ko divide karne ke liye istemal kiya jata hai. 
Example:
*/
var quotient = 10 / 2;
/*
(%): Modulus ka operator, jise ek number ko dusre number se divide karne par bacha hua remainder dene ke liye istemal kiya jata hai. 
Example:
*/
var remainder = 10 % 3; // Output: 1

/*
3. Comparison Operators:

(==): Equality operator, jo values ko compare karke unke equality ko check karta hai. 
Example:
*/
var isEqual = 5 == 5; // Output: true
/*
(!=): Inequality operator, jo values ko compare karke unke inequality ko check karta hai. 
Example:
*/
var isNotEqual = 5 != 3; // Output: true
/*
(===): Strict equality operator, jo values ke data types ke sath sath unke values ko bhi compare karta hai.
Example: 
*/
var isStrictEqual = 5 === '5'; // Output: false
/*
(!==): Strict inequality operator, jo values ke data types ke sath sath unke values ko bhi compare karta hai.
Example: 
*/
var isStrictNotEqual = 5 !== '5'; // Output: true
/*
(>): Greater than operator, jo ek value ko dusri value se compare karta hai aur dekhta hai ki pehli value dusri value se badi hai ya nahi.
Example: 
*/
var isGreater = 10 > 5; // Output: true
/*
(<): Less than operator, jo ek value ko dusri value se compare karta hai aur dekhta hai ki pehli value dusri value se chhoti hai ya nahi. 
Example: 
*/
var isLess = 2 < 7; // Output: true
/*
(>=): Greater than or equal to operator, jo ek value ko dusri value se compare karta hai aur dekhta hai ki pehli value dusri value se badi ya barabar hai ya nahi.
Example: 
*/
var isGreaterOrEqual = 4 >= 4; // Output: true
/*
(<=): Less than or equal to operator, jo ek value ko dusri value se compare karta hai aur dekhta hai ki pehli value dusri value se chhoti ya barabar hai ya nahi. 
Example: 
*/
var isLessOrEqual = 3 <= 2; // Output: false

/*
4. Logical Operators:

(&&): Logical AND operator, jo do conditions ko check karta hai aur agar dono conditions true hain toh overall expression true hota hai. 
Example:
*/
var result = (5 > 3) && (4 < 6); // Output: true
/*
(||): Logical OR operator, jo do conditions ko check karta hai aur agar ek bhi condition true hai toh overall expression true hota hai. 
Example: 
*/
var result = (5 > 10) || (4 < 6); // Output: true
/*
(!): Logical NOT operator, jo ek condition ke opposite ko deta hai.
Example: 
*/
var isNotTrue = !(5 > 3); // Output: false

/*
5. Bitwise Operators:

(&): Bitwise AND operator, jo numbers ke binary representations ki corresponding bits ko AND karta hai. 
Example: 
*/
var result = 5 & 3; // Output: 1
/*
(|): Bitwise OR operator, jo numbers ke binary representations ki corresponding bits ko OR karta hai. 
Example:
*/
var result = 5 | 3; // Output: 7
/*
(^): Bitwise XOR operator, jo numbers ke binary representations ki corresponding bits ko XOR karta hai. 
Example: 
*/
var result = 5 ^ 3; // Output: 6
/*
(~): Bitwise NOT operator, jo number ke binary representation ki bitwise complement deta hai. 
Example:
*/
var result = ~5; // Output: -6
/*
(<<): Left shift operator, jo number ke binary representation ko left shift karta hai, ek given number of positions ke liye. 
Example: 
*/
var result = 5 << 2; // Output: 20
/*
(>>): Right shift operator, jo number ke binary representation ko right shift karta hai, ek given number of positions ke liye. 
Example: 
*/
var result = 5 >> 1; // Output: 2
/*
(>>>): Unsigned right shift operator, jo number ke binary representation ko right shift karta hai, ek given number of positions ke liye, lekin positive results deta hai. 
Example: 
*/
var result = -5 >>> 1; // Output: 2147483645

/*
6. Conditional (Ternary) Operator:

condition ? expression1 : expression2: Ye operator ek condition check karta hai, agar condition true hai toh expression1 ko return karta hai, nahi toh expression2 ko. 
Example: 
*/
var result = (5 > 3) ? 'Yes' : 'No'; // Output: 'Yes'

/*
7. Type Operators:

typeof: Ye operator ek value ka data type determine karta hai. 
Example: 
*/
var type = typeof 42; // Output: 'number'