/*__________[Events]__________*/
/*
JavaScript me event ek system hai jo developers ko web pages aur web apps ke sath interact karne ke liye allow karta hai. 
Events ko user actions, browser actions, aur API calls se trigger kiya ja sakta hai.

JavaScript me ek event ko ek object ke rup mein represent kiya jata hai. 
Event object mein kuchh important properties hote hain, jaise:

* type: Event ki type, jaise "click", "load", ya "error".
* target: Event trigger karne wali element.
* detail: Event ke bare mein additional information, jaise click ke coordinates ya key press ki value.

JavaScript me event handlers ko use kiya jata hai events ko handle karne ke liye. 
Event handler ek function hota hai jo event trigger hone per execute hota hai. 
Event handlers ko HTML elements ke sath attach kiya ja sakta hai.

JavaScript me kuchh common events hain:

* click: Mouse click ke liye event.
* load: Web page load hone ke liye event.
* change: Form element ke value change hone ke liye event.
* submit: Form submit hone ke liye event.
* keydown: Key press hone ke liye event.
* keypress: Key press hone ke liye event.
* keyup: Key press hone ke liye event.

JavaScript me event handlers ko register karne ke liye addEventListener() method ka use kiya jata hai. 
addEventListener() method ko element aur event type ke sath call kiya jata hai.
Example:-
*/
const myButton = document.querySelector("button");

myButton.addEventListener("click", function() {
  console.log("Button clicked!");
});

/*
Yeh code button ko click karne per "Button clicked!" message ko console mein print karega.
Event handlers ko remove karne ke liye removeEventListener() method ka use kiya jata hai. 
removeEventListener() method ko element, event type aur event handler function ke sath call kiya jata hai.
Example:-
*/
myButton.removeEventListener("click", function() {
  console.log("Button clicked!");
});

/*
Yeh code button ko click karne per "Button clicked!" message ko console mein print karna band kar dega.
JavaScript me events ka upyog web pages aur web apps ko interactive aur user-friendly banane ke liye kiya ja sakta hai.
*/