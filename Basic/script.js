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


// function flattenArray(arr) {
//   return arr.flat(Infinity);
// }

// console.log(flattenArray([1, [2, [3, [4]]]]));


// function groupBy(arr, key) {
//   return arr.reduce((acc, item) => {
//     const group = item[key];
//     acc[group] = acc[group] || [];
//     acc[group].push(item);
//     return acc;
//   }, {});
// }

// console.log(
//   groupBy(
//     [{ type: "fruit", name: "apple" }, { type: "veg", name: "carrot" }],
//     "type"
//   )
// );



// function removeFalsy(arr) {
//   return arr.filter(Boolean);
// }

// console.log(removeFalsy([0, 1, false, 2, "", 3]));


// function randomHexColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

// console.log(randomHexColor());


// Rotate array by k positions using reversal method
// function rotateArray(arr, k) {
//     k = k % arr.length;
    
//     function reverse(start, end) {
//         while (start < end) {
//             [arr[start], arr[end]] = [arr[end], arr[start]];
//             start++;
//             end--;
//         }
//     }
    
//     reverse(0, arr.length - 1);
//     reverse(0, k - 1);
//     reverse(k, arr.length - 1);
    
//     return arr;
// }

// // Example
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]

// Find two numbers that add up to target
// function twoSum(nums, target) {
//     const numMap = new Map();
    
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
        
//         if (numMap.has(complement)) {
//             return [numMap.get(complement), i];
//         }
        
//         numMap.set(nums[i], i);
//     }
    
//     return [];
// }

// // Example
// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]


// Find maximum sum of contiguous subarray
// function maxSubArray(nums) {
//     let maxSum = nums[0];
//     let currentSum = nums[0];
    
//     for (let i = 1; i < nums.length; i++) {
//         currentSum = Math.max(nums[i], currentSum + nums[i]);
//         maxSum = Math.max(maxSum, currentSum);
//     }
    
//     return maxSum;
// }

// // Example
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6

// Merge two sorted arrays into one sorted array
// function mergeSortedArrays(arr1, arr2) {
//     const merged = [];
//     let i = 0, j = 0;
    
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             merged.push(arr1[i]);
//             i++;
//         } else {
//             merged.push(arr2[j]);
//             j++;
//         }
//     }
    
//     // Add remaining elements
//     while (i < arr1.length) {
//         merged.push(arr1[i]);
//         i++;
//     }
    
//     while (j < arr2.length) {
//         merged.push(arr2[j]);
//         j++;
//     }
    
//     return merged;
// }

// // Example
// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// (async () => {
//   console.log("Wait...");
//   await sleep(1000);
//   console.log("Done!");
// })();



// async function retry(fn, retries = 3) {
//   try {
//     return await fn();
//   } catch (err) {
//     if (retries === 0) throw err;
//     return retry(fn, retries - 1);
//   }
// }


// function isValidEmail(email) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// console.log(isValidEmail("test@example.com"));


// function checkNumber(num) {
//   if (num > 0) return "Positive";
//   if (num < 0) return "Negative";
//   return "Zero";
// }

// // Example
// console.log(checkNumber(5));
// console.log(checkNumber(-3));
// console.log(checkNumber(0));


// function average(arr) {
//   let total = 0;
//   for (let num of arr) {
//     total += num;
//   }
//   return total / arr.length;
// }

// console.log(average([2, 4, 6, 8]));

// function minutesToSeconds(minutes) {
//   return minutes * 60;
// }

// console.log(minutesToSeconds(5));



// function canVote(age) {
//   return age >= 18;
// }

// console.log(canVote(20));

// function maxOfTwo(a, b) {
//   return a > b ? a : b;
// }

// console.log(maxOfTwo(10, 7));

// function formatNumber(num) {
//   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// console.log(formatNumber(123456789));


// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// delay(1000).then(() => console.log("Done waiting"));


// function isValidUsername(username) {
//   return /^[a-zA-Z0-9_]{3,15}$/.test(username);
// }

// console.log(isValidUsername("shahriar_dev"));


// let isActive = false;

// function toggle() {
//   isActive = !isActive;
//   return isActive;
// }

// console.log(toggle());


// function calculate(a, b) {
//   return {
//     sum: a + b,
//     diff: a - b,
//     product: a * b,
//   };
// }

// console.log(calculate(5, 3));



// function fakeApi() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("Success");
//     }, 1000);
//   });
// }

// fakeApi().then(console.log);


// async function getCommits(owner, repo) {
//   const res = await fetch(
//     `https://api.github.com/repos/${owner}/${repo}/commits`
//   );
//   const data = await res.json();

//   return data.map(c => ({
//     sha: c.sha,
//     message: c.commit.message,
//     author: c.commit.author.name,
//   }));
// }

// getCommits("vercel", "next.js").then(console.log);


// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("commit"));


// function capitalize(word) {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// }

// console.log(capitalize("github"));


// function generateId() {
//   return Math.random().toString(36).substring(2, 10);
// }

// console.log(generateId());


// function clamp(value, min, max) {
//   return Math.min(Math.max(value, min), max);
// }

// console.log(clamp(15, 0, 10));

// const quotes = [
//   "Code. Commit. Repeat.",
//   "Small commits compound.",
//   "No zero days.",
//   "One commit closer to mastery."
// ];

// console.log(
//   quotes[Math.floor(Math.random() * quotes.length)]
// );

// let streakCount = 1;

// streakCount += 1;

// console.log(`GitHub streak day: ${streakCount}`);


// const randomNumber = Math.floor(Math.random() * 10000);

// console.log("Random value:", randomNumber);



// const crypto = require("crypto");

// const hash = crypto
//   .createHash("sha256")
//   .update(new Date().toDateString())
//   .digest("hex");

// console.log("Daily hash:", hash);



// const todos = [
//   "Learn something new",
//   "Write cleaner code",
//   "Refactor old logic",
//   "Read docs"
// ];

// console.log("Today's task:", todos[Math.floor(Math.random() * todos.length)]);




// const featureEnabled = Math.random() > 0.5;

// console.log("Feature enabled:", featureEnabled);



// const day = new Date().getDay();

// const motivation = [
//   "Sunday reset mode 🧘",
//   "Monday grind 💪",
//   "Tuesday momentum 🔥",
//   "Wednesday focus 🎯",
//   "Thursday push 🚀",
//   "Friday wins 🏆",
//   "Saturday chill 😌"
// ];

// console.log(motivation[day]);



// let version = "1.0.0";

// const bumpPatch = v => {
//   const parts = v.split(".").map(Number);
//   parts[2]++;
//   return parts.join(".");
// };

// version = bumpPatch(version);
// console.log("Current version:", version);



// const fs = require("fs");

// fs.writeFileSync(
//   "lastRun.txt",
//   `Last run: ${new Date().toISOString()}`
// );

// console.log("Timestamp updated");



// const emojis = ["🔥", "🚀", "✨", "🧠", "💻", "✅"];

// console.log(
//   emojis[Math.floor(Math.random() * emojis.length)]
// );


// const multiply = (a, b) => a * b;
// const divide = (a, b) => (b !== 0 ? a / b : null);

// console.log(multiply(4, 6));
// console.log(divide(10, 2));


// const items = [1, 2, 3, 4, 5];

// items.sort(() => Math.random() - 0.5);

// console.log(items);



// const { randomUUID } = require("crypto");

// console.log("UUID:", randomUUID());


// const cache = {
//   cachedAt: new Date().toISOString()
// };

// console.log(cache);


// const tips = [
//   "Write small commits",
//   "Name variables clearly",
//   "Refactor often",
//   "Read error messages carefully",
//   "Test before pushing"
// ];

// console.log(
//   tips[Math.floor(Math.random() * tips.length)]
// );


// const stats = {
//   runs: Math.floor(Math.random() * 100),
//   success: true,
//   lastRun: new Date().toLocaleString()
// };

// console.log(stats);


// const password = Math.random().toString(36).slice(-10);
// console.log("Generated password:", password);



// console.log({
//   localeTime: new Date().toLocaleTimeString(),
//   timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
// });


// const items = ["JS", "React", "Node", "MongoDB", "CSS"];
// console.log("Picked:", items[Math.floor(Math.random() * items.length)]);



// const latency = Math.floor(Math.random() * 300) + "ms";
// console.log("API latency:", latency);


// const moods = ["focused", "productive", "learning", "chilling", "shipping"];
// console.log("Mood:", moods[Math.floor(Math.random() * moods.length)]);


// const score = Math.floor(Math.random() * 10) + 1;
// console.log(`Dev productivity score: ${score}/10`);


// const cpuLoad = `${Math.floor(Math.random() * 100)}%`;
// console.log("CPU Load:", cpuLoad);



const activity = {
  userId: Math.floor(Math.random() * 1000),
  action: "login",
  time: new Date().toISOString()
};

console.log(activity);
