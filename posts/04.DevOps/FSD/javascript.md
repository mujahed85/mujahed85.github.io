````markdown
# JavaScript (ES6+) Lab

## Lab Objectives

By the end of this lab, you will be able to:

- Work with variables, data types, and operators.
- Implement conditionals and loops.
- Write and use functions (regular and arrow).
- Manipulate the DOM and handle events.
- Work with arrays and objects using modern JavaScript methods.
- Use ES6+ features like destructuring, spread/rest operators, and template literals.
- Work with JSON and perform basic debugging.
- Understand basic async JavaScript using Promises and async/await.

---

## 1. Variables & Data Types

**Task:** Create variables using `let`, `const`, and `var` and log them to the console.

```javascript
// Declare a variable for your name, age, and favorite colors
const name = "Alice";
let age = 25;
var favoriteColors = ["red", "blue", "green"];

// Log variables to console
console.log(name, age, favoriteColors);
````

**Challenge:** Change the `age` variable and try to change `name`. What happens?

---

## 2. Operators & Conditionals

**Task:** Use comparison operators and write a conditional statement.

```javascript
const score = 85;

// Check score and log result
if(score >= 90) {
    console.log("Excellent");
} else if(score >= 70) {
    console.log("Good");
} else {
    console.log("Needs Improvement");
}

// Ternary operator
const result = score >= 70 ? "Pass" : "Fail";
console.log(result);

// Comparison example
console.log("5" == 5);  // true
console.log("5" === 5); // false
```

**Challenge:** Write a conditional that checks if a number is odd or even using modulo `%`.

---

## 3. Loops

**Task:** Loop through numbers and arrays.

```javascript
const numbers = [1, 2, 3, 4, 5];

// For loop
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// For...of loop
for(const num of numbers) {
    console.log(num);
}

// forEach
numbers.forEach(num => console.log(num));

// While loop
let i = 0;
while(i < numbers.length) {
    console.log(numbers[i]);
    i++;
}
```

**Challenge:** Create a loop that prints only even numbers from 1 to 20.

---

## 4. Functions

**Task:** Write regular and arrow functions.

```javascript
// Function declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

// Function expression
const greet2 = function(name) {
    return `Hi, ${name}!`;
};
console.log(greet2("Bob"));

// Arrow function
const greet3 = name => `Hey, ${name}!`;
console.log(greet3("Charlie"));
```

**Challenge:** Write a function that takes an array of numbers and returns the sum.

---

## 5. DOM Manipulation & Events

**Task:** Manipulate HTML elements and handle events.

```html
<!-- HTML -->
<button id="myButton">Click Me</button>
<p id="message"></p>
```

```javascript
// JavaScript
const button = document.getElementById("myButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    message.innerHTML = "Button Clicked!";
});
```

**Challenge:** Create an input field that updates a paragraph in real-time as the user types.

---

## 6. Arrays & Objects

**Task:** Access, update, add, and remove items.

```javascript
const fruits = ["apple", "banana", "orange"];
fruits.push("grape"); // add
fruits[1] = "kiwi";   // update
fruits.pop();         // remove last

const person = {
    name: "Alice",
    age: 25,
    hobbies: ["reading", "gaming"]
};

console.log(person.name);
person.age = 26; // update
person.city = "New York"; // add property

// Array methods
const numbers = [1,2,3,4,5];
console.log(numbers.map(n => n * 2));      // [2,4,6,8,10]
console.log(numbers.filter(n => n % 2 === 0)); // [2,4]
console.log(numbers.reduce((a,b) => a+b, 0)); // 15
console.log(numbers.find(n => n > 3));     // 4
console.log(numbers.includes(3));          // true
```

**Challenge:** Use `map` to create an array of strings saying “I love [fruit]” for each fruit.

---

## 7. ES6+ Features

**Task:** Use destructuring, spread/rest, and template literals.

```javascript
// Destructuring
const [first, second] = fruits;
const {name, age} = person;

// Spread operator
const moreFruits = [...fruits, "mango"];

// Rest operator
function sum(...nums) {
    return nums.reduce((a,b) => a+b, 0);
}

// Template literals
console.log(`My name is ${name} and I am ${age} years old.`);
```

**Challenge:** Write a function that takes any number of arguments and returns their average.

---

## 8. JSON

**Task:** Convert objects to JSON and back.

```javascript
const personJSON = JSON.stringify(person);
console.log(personJSON);

const parsedPerson = JSON.parse(personJSON);
console.log(parsedPerson.name);
```

**Challenge:** Convert an array of objects to JSON and then filter it back to only objects meeting a condition.

---

## 9. Debugging

**Task:** Use console methods and DevTools.

```javascript
console.log("This is a log");
console.warn("This is a warning");
console.error("This is an error");

const user = {name: "Alice"};
console.table(user);
```

**Challenge:** Introduce a bug (like undefined variable) and fix it using DevTools.

---

## 10. Async JavaScript (Intro)

**Task:** Work with Promises and async/await.

```javascript
// Promise example
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded"), 1000);
});

fetchData.then(data => console.log(data));

// Async/Await example
async function loadData() {
    const data = await fetchData;
    console.log(data);
}
loadData();
```

**Challenge:** Create a function that simulates fetching user data after 2 seconds using async/await.


```

---

If you want, I can also **create a `.zip` containing this Markdown plus an HTML template** that students can open in a browser and start running all the exercises interactively.  

Do you want me to do that?
```
