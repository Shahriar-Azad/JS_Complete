// console.log(hello);

// function add(a,b){
//     return a+b;

// }

// add(10,20);

// variables

// let name = "shahriar";
// let age = 24;
// let email = "shahriar.azad123@gmail.com";

// console.log(`My name is ${name}`);
// console.log(`My age is ${age}`);
// console.log(`My email is ${email}`);

// data types

// let isOnline = true;

// let isSale = false;

// console.log(isOnline);
// console.log(isSale);

// let name = "Shihab";
// let age = 20;
// let mail = "shihab123@gmail.com";

// document.getElementById('p1').textContent = `My name is ${name}`;
// document.getElementById('p2').textContent = `My age is ${age}`;
// document.getElementById('p3').textContent = `My email is ${mail}`;

// arithmatic operations

// let age = 10;
// console.log(age += 1);
// console.log(age -=1 );
// console.log(age *= 2);
// console.log(age /= 2);

// operator precendences

// (), exponents, multiplication, divison, modulus, addition, substraction

// let result = 1 + (2 * 4) + 7 - (3 * 5) - (8 ** 2);

// console.log(result)

// user inputs

/*


1. Window Prompt
2. Html Textbox


*/

// let userName = window.prompt("Whats ur name?")

// console.log(userName);

// let userName;

// document.getElementById('submitButton').onclick = function(){
//     userName = document.getElementById('textInput').value;
//     console.log(userName);
//     document.getElementById('myH1').textContent = `Hello ${userName}`;
// }

// type conversions

// const cgpa = 2;
// const floatCgpa = 2.5;
// const stringCgpa = "2";
// const isAge = true;

// console.log(typeof isAge, isAge);

// let age = window.prompt('Whats ur age?');

// age = Number(age)

// age+=2

// console.log(age)

// let a = "Mark";
// let b = "Mark";
// let c = "Mark";

// a = Number(a);
// b = String(b);
// c = Boolean(c)

// console.log(a, typeof a)
// console.log(b, typeof b)
// console.log(c, typeof c)

// const = a variable that cant change

// const pi = 3.14169;

// let radius;
// let circumerefence;

// document.getElementById("radiusSubmit").style.backgroundColor = "black";
// document.getElementById("radiusSubmit").style.color = "white";
// document.getElementById("radiusSubmit").style.cursor = "pointer";

// document.getElementById("radiusSubmit").onclick = function () {
//   radius = document.getElementById("radiusInput").value;
//   radius = Number(radius);
//   circumerefence = 2 * pi * radius;
//   document.getElementById(
//     "radiusH2"
//   ).textContent = `Your radius is: ${circumerefence}`;
// };

// Counter Function-------------
// let count = 0;

// function increase(){
//     count += 1;
//     document.getElementById('btn2').textContent = count;
// }

// function decrease(){
//     if(count > 0)
//     count -= 1;
//     document.getElementById('btn2').textContent = count;

// }

// function reset(){
//     count = 0;
//     document.getElementById('btn2').textContent = count;
// }

// document.getElementById('roll').addEventListener("click", function(){
//     const number = Math.random()
//     document.getElementById('randomNum').textContent = number;

// })

// document.getElementById('img').style.display = "none";

// document.getElementById('roll').addEventListener("click", function(){
//     document.getElementById('img').style.display = "block";
//     document.getElementById('roll').textContent = "hide";
//     document.getElementById('roll').addEventListener('click', function(){
//          document.getElementById('roll').textContent = "Click";
//             document.getElementById('img').style.display = "none";
//     })

// })

// const img = document.getElementById('img');
// const roll = document.getElementById('roll');

// img.style.display = "none";

// roll.addEventListener("click", function(){
//     if(img.style.display === "none"){
//         img.style.display = "block";
//         roll.textContent = "Hide";
//     }
//     else{
//         img.style.display = "none";
//         roll.textContent = "Click";
//     }

// })

// const mytext = document.getElementById("ageInp");
// const mybtn = document.getElementById("ageBtn");
// const result = document.getElementById("myH1");

// let age;

// mybtn.onclick = function () {
//   age = mytext.value;
//   age = Number(age);

//   if (age > 100) {
//     result.textContent = `You are too old to enter this website`;
//   } else if (age == 0) {
//     result.textContent = `You cant enter you just born`;
//   } else if (age >= 18) {
//     result.textContent = `You can enter this website`;
//   } else if (age < 0) {
//     result.textContent = `Your age cant be below 0`;
//   } else {
//     result.textContent = `You must be 18+ to enter this website`;
//   }
// };



// document.getElementById('ageBtn').addEventListener('click', function(){
//     let age = Number(document.getElementById('ageInp').value);
    

//     if (age > 100) {
//     document.getElementById('myH1').textContent = `You are too old to enter this website`;
//   } else if (age == 0) {
//     document.getElementById('myH1').textContent = `You cant enter you just born`;
//   } else if (age >= 18) {
//     document.getElementById('myH1').textContent = `You can enter this website`;
//   } else if (age < 0) {
//     document.getElementById('myH1').textContent = `Your age cant be below 0`;
//   } else {
//     document.getElementById('myH1').textContent = `You must be 18+ to enter this website`;
//   }


// })

// optimized version
// document.getElementById("ageBtn").addEventListener("click", () => {
//   const age = Number(document.getElementById("ageInp").value);
//   const result = document.getElementById("myH1");

//   let message =
//     age > 100 ? "You are too old to enter this website" :
//     age === 0 ? "You can't enter, you just born" :
//     age >= 18 ? "You can enter this website" :
//     age < 0 ? "Your age can't be below 0" :
//     "You must be 18+ to enter this website";

//   result.textContent = message;
// });


// document.querySelector(".subBtn").innerHTML = "Subscribe"
// document.querySelector(".subBtn").innerHTML = "Subscribed"


// function sub(a,b){
//     return a - b;
// }

// sub(10,20)

// function mul(a,b){
//     return a*b;
// }

// mul(10,20)


// function divide(a,b){
//     return a/b;
// }

// divide(10,20)


// console.log("hello world")

// const rock = document.getElementById('rock')
// const paper = document.getElementById('paper')
// const scissor = document.getElementById('scissor')



// let comp = ["rock", "paper", "scissor"];

// rock.addEventListener("click", function(){
//     const randomChoice = comp[Math.floor(Math.random()* comp.length)];
//     document.getElementById('myH1').textContent = randomChoice;

//     let user = "rock";

//     let computer = randomChoice;

//     let result = "";

//     if (user === computer){
//         result = "Its a draw";

//     }
//     else if((user === "rock" && computer === "scissor")){
//         result = "You win";


//     }

//     else {
//         result = "You lose"
//     }


//     document.getElementById("result").textContent = result;
    

// })


// const character = document.getElementById("character-container")
// const tanjiro = document.getElementById("tanjiro");
// const nezuko = document.getElementById("nezuko");


// nezuko.style.display = "none";

// character.addEventListener("mouseover", ()=> {
//     tanjiro.style.display = "none";
//     nezuko.style.display = "block";

// })

// character.addEventListener("mouseleave", ()=> {
//     tanjiro.style.display = "block";
//         nezuko.style.display = "none";

// })




// const makeElementMovable = (selector) => {
//   const element = document.querySelector(selector);
//   if (!element) return;

//   // Set initial position (required for the code to work)
//   element.style.position = 'absolute';
//   let top = element.offsetTop;
//   let left = element.offsetLeft;
//   element.style.top = `${top}px`;
//   element.style.left = `${left}px`;

//   document.addEventListener('keydown', (e) => {
//     const step = 10; // Movement distance in pixels

//     switch (e.key) {
//       case 'ArrowUp':
//         e.preventDefault(); // Prevent default scroll behavior
//         top = Math.max(0, top - step); // Prevent moving off the top edge
//         break;
//       case 'ArrowDown':
//         e.preventDefault(); // Prevent default scroll behavior
//         top += step;
//         break;
//       default:
//         return; // Ignore other keys
//     }

//     element.style.top = `${top}px`;
//   });
// };

// // Example Usage:
// // 1. Create a div in your HTML: <div id="movable-line" style="width: 200px; height: 5px; background-color: red;"></div>
// // 2. Call the function after the DOM is loaded:
// document.addEventListener('DOMContentLoaded', () => {
//   makeElementMovable('#movable-line');
// });



// const fs = require('fs');

// function randomCode() {
//     const words = ["alpha", "beta", "gamma", "delta", "omega"];
//     const num = Math.floor(Math.random() * 1000);

//     return `
// function ${words[Math.floor(Math.random() * words.length)]}${num}() {
//     return ${Math.floor(Math.random() * 9999)};
// }
// `;
// }

// fs.writeFileSync("random.js", randomCode());
// console.log("New random code generated!");



// function isOddOrEven(num) {
//     if (num % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

// console.log(isOddOrEven(10)); // Even
// console.log(isOddOrEven(7));  // Odd


// function isPalindrome(num) {
//     const str = num.toString();
//     const reversed = str.split("").reverse().join("");
//     return str === reversed;
// }

// // Examples
// console.log(isPalindrome(121));   // true
// console.log(isPalindrome(123));   // false
// console.log(isPalindrome(444));   // true
// console.log(isPalindrome(987));   // false

// function isPalindromeWord(word) {
//     const cleaned = word.toLowerCase(); 
//     const reversed = cleaned.split("").reverse().join("");
//     return cleaned === reversed;
// }

// // Examples
// console.log(isPalindromeWord("level"));   // true
// console.log(isPalindromeWord("madam"));   // true
// console.log(isPalindromeWord("hello"));   // false
// console.log(isPalindromeWord("Racecar")); // true (case-insensitive)



// function generatePassword(length = 8) {
//   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let password = "";

//   for (let i = 0; i < length; i++) {
//     password += chars[Math.floor(Math.random() * chars.length)];
//   }

//   return password;
// }

// // Example
// console.log(generatePassword(10));


// function counter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// // Example
// const myCounter = counter();
// console.log(myCounter());
// console.log(myCounter());


// function findMax(arr) {
//   return Math.max(...arr);
// }

// // Example
// console.log(findMax([3, 9, 2, 7]));


// function randomQuote() {
//   const quotes = [
//     "Code. Eat. Sleep. Repeat.",
//     "JavaScript is fun!",
//     "Consistency beats talent.",
//     "Debugging is learning."
//   ];

//   return quotes[Math.floor(Math.random() * quotes.length)];
// }

// // Example
// console.log(randomQuote());


// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("javascript"));


// function countVowels(str) {
//   const vowels = "aeiou";
//   return str
//     .toLowerCase()
//     .split("")
//     .filter(ch => vowels.includes(ch)).length;
// }

// console.log(countVowels("Hello World"));



// function factorial(n) {
//   if (n < 0) return null;
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// console.log(factorial(5));


// function fibonacci(n) {
//   const series = [0, 1];
//   for (let i = 2; i < n; i++) {
//     series.push(series[i - 1] + series[i - 2]);
//   }
//   return series.slice(0, n);
// }

// console.log(fibonacci(7));

// function isPrime(num) {
//   if (num <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// console.log(isPrime(11));

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));


// function arraySum(arr) {
//   return arr.reduce((sum, num) => sum + num, 0);
// }

// console.log(arraySum([1, 2, 3, 4]));


// function randomBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(randomBetween(10, 20));


// function capitalizeWords(sentence) {
//   return sentence
//     .split(" ")
//     .map(word => word[0].toUpperCase() + word.slice(1))
//     .join(" ");
// }

// console.log(capitalizeWords("hello world from github"));

// class TodoList {
//   constructor() {
//     this.todos = [];
//   }

//   add(todo) {
//     this.todos.push(todo);
//   }

//   remove(index) {
//     this.todos.splice(index, 1);
//   }

//   getAll() {
//     return this.todos;
//   }
// }

// const myTodos = new TodoList();
// myTodos.add("Learn JavaScript");
// myTodos.add("Push code to GitHub");
// console.log(myTodos.getAll());

// function isAnagram(str1, str2) {
//   const format = str =>
//     str.toLowerCase().replace(/[^a-z]/g, "").split("").sort().join("");

//   return format(str1) === format(str2);
// }

// console.log(isAnagram("listen", "silent"));



// function longestWord(sentence) {
//   return sentence
//     .split(" ")
//     .reduce((longest, word) =>
//       word.length > longest.length ? word : longest
//     , "");
// }

// console.log(longestWord("JavaScript is super powerful"));


// function wordFrequency(text) {
//   const words = text.toLowerCase().split(" ");
//   const freq = {};

//   for (const word of words) {
//     freq[word] = (freq[word] || 0) + 1;
//   }

//   return freq;
// }

// console.log(wordFrequency("js is fun and js is powerful"));

// function shuffleArray(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   return arr;
// }

// console.log(shuffleArray([1, 2, 3, 4, 5]));


// function isLeapYear(year) {
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }

// console.log(isLeapYear(2024));


// function celsiusToFahrenheit(celsius) {
//   return (celsius * 9/5) + 32;
// }

// console.log(celsiusToFahrenheit(30));


// function debounce(fn, delay) {
//   let timer;
//   return function (...args) {
//     clearTimeout(timer);
//     timer = setTimeout(() => fn.apply(this, args), delay);
//   };
// }

// // Example
// const log = debounce(() => console.log("Debounced!"), 500);
// log();


// function throttle(fn, limit) {
//   let inThrottle = false;
//   return function (...args) {
//     if (!inThrottle) {
//       fn.apply(this, args);
//       inThrottle = true;
//       setTimeout(() => (inThrottle = false), limit);
//     }
//   };
// }



// function deepClone(obj) {
//   return JSON.parse(JSON.stringify(obj));
// }

// const original = { a: 1, b: { c: 2 } };
// const copy = deepClone(original);

// console.log(copy);


// function isEmptyObject(obj) {
//   return Object.keys(obj).length === 0;
// }

// console.log(isEmptyObject({}));



// random number

// function randomNumber(min = 1, max = 100) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(randomNumber());


// date formatter:

// function formatDate(date = new Date()) {
//   return date.toISOString().split("T")[0];
// }

// console.log(formatDate());


// array shuffle:

// function shuffleArray(arr) {
//   return arr.sort(() => Math.random() - 0.5);
// }

// console.log(shuffleArray([1, 2, 3, 4, 5]));


// simple counter:

// let count = 0;

// function increment() {
//   count++;
//   return count;
// }

// console.log(increment());

// let count = 10;

// function decreament(){
//   count--;
//   return count;

// }
// console.log(decreament());


// const fetchData = async (url) => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Fetch error:", error);
//   }
// };

// const deepClone = (obj) => JSON.parse(JSON.stringify(obj));


// const uniqueArray = (arr) => [...new Set(arr)];



// function formatNumber(num) {
//   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// console.log(formatNumber(12345678));


function flattenArray(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, [3, [4]]]]));
