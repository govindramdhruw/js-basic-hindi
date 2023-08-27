/*__________[DOM]__________*/
/*
JavaScript me DOM (Document Object Model) ek programming interface hoti hai, jo web pages ko represent karti hai. DOM tree ka structure HTML elements ko organize karta hai, jisse aap JavaScript ke through HTML elements ko access, manipulate, aur modify kar sakte hain.

DOM tree ek hierarchical structure hota hai, jisme har HTML element ek node hota hai. DOM tree ka root node `<html>` hota hai, jiske children `<head>` aur `<body>` hote hain. In children nodes ke children hote hain, aur is tarah se DOM tree tree ki hierarchy build hoti hai.

JavaScript ke through aap DOM ke elements ko access kar sakte hain, inhe modify kar sakte hain, new elements create kar sakte hain, aur existing elements ko delete bhi kar sakte hain. DOM tree ke elements ko access karne ke liye aap different methods ka istemal kar sakte hain:

1. `getElementById()`: Ye method ek unique `id` attribute ke jariye element ko select karta hai.

Example:
html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Example</title>
</head>
<body>
  <div id="message">Hello, World!</div>
</body>
</html>
*/

const element = document.getElementById('message');
console.log(element.innerText); // Output: 'Hello, World!'

/*
2. `getElementsByClassName()`: Ye method ek class attribute ke jariye ek collection of elements ko select karta hai.

Example:
html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Example</title>
</head>
<body>
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
</body>
</html>
*/

const elements = document.getElementsByClassName('item');
for (const element of elements) {
  console.log(element.innerText);
}
// Output:
// 'Item 1'
// 'Item 2'

/*
3. `getElementsByTagName()`: Ye method ek HTML tag name ke jariye ek collection of elements ko select karta hai.

Example:
html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Example</title>
</head>
<body>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</body>
</html>
*/

const elements = document.getElementsByTagName('p');
for (const element of elements) {
  console.log(element.innerText);
}
// Output:
// 'Paragraph 1'
// 'Paragraph 2'

/*
4. `querySelector()`: Ye method CSS selector ke jariye ek element ko select karta hai.

Example:
html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Example</title>
</head>
<body>
  <div class="container">
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </div>
</body>
</html>
*/

const element = document.querySelector('.container p');
console.log(element.innerText); // Output: 'Paragraph 1'

/*
DOM elements ke attributes aur styles ko bhi modify karne ke liye, aap `setAttribute()`, `removeAttribute()`, `style` property, aur `classList` ka istemal kar sakte hain.

Example:
html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Example</title>
</head>
<body>
  <button id="btn">Click Me</button>
</body>
</html>
*/

const btn = document.getElementById('btn');

// Set an attribute
btn.setAttribute('disabled', true);

// Remove an attribute
btn.removeAttribute('disabled');

// Modify styles
btn.style.backgroundColor = 'blue';
btn.style.color = 'white';

// Manipulate classes
btn.classList.add('btn-style');
btn.classList.remove('btn-style');

/*
JavaScript me DOM ka istemal web pages ko dynamic aur interactive banane ke liye hota hai. Aap HTML, CSS, aur JavaScript ka combination use karke DOM ke elements ko modify kar sakte hain aur users ke actions ke anusaar web pages ko update kar sakte hain.
*/