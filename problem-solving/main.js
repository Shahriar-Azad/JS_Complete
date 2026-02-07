// console.log("hello");



// hi("Obyda");

// function hi(name){
//     console.log(name);
// }



// hi("obyda");


// const hi = function(name){
//     console.log(name)
// }



// add(10,20);
// function add(a,b){
//     console.log(a+b);
// }


// var x = 6;
// console.log(x);

// console.log('1');
// setTimeout(() => {
//   console.log('2');
// }, 0);
// console.log('3');

// console.log(1)
// console.log(2)
// console.log(3)


// async function fetchData() {
//   try {
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log('Error:', error);
//   }
// }

// fetchData();

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6, 8]


// const arr = [10,20,30]
// const add = arr.map(i => i + 10);
// console.log(add)

// const arr = [1,2,3,4,5,6]
// const odd = arr.filter(i => i%2 != 0);
// console.log(odd)


// const person = {
//   name: 'John',
//   greet: function() {
//     console.log(this.name); 
//   }
// };
// person.greet(); 

// const car = {
//     name: "Lambo",
//     color: "blue",
//     race: function(){
//         console.log(this.name);
//         console.log(this.color);
//     }
// }

// car.race();

// function flattenArray(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(flattenArray(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }



// const timer = setInterval(() => {
//   console.log("Hello World");
// }, 2000);

// setTimeout(() => {

// clearInterval(timer);
// }, 4000);

// function palindrome(str){
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;  
// }

// palindrome("racecar");



// function reverseArr(arr){
//   let reverse = ""
//   for(const char of arr){
//     reverse = char + reverse
//   }
//   return reverse;
// }

// console.log(reverseArr("hello"))


// function reverseArr(arr){
//   let reverse = []
//   for(let i = arr.length-1; i >= 0; i--){
//     reverse.push(arr[i]);
//   }
//   return reverse;
// }


// console.log(reverseArr([10,20,40]))


// function palindrome(str){
//   const rev = str.split('').reverse().join('');
//   return rev === str
// }

// console.log(palindrome("adsdsa"));

// function pal(str){

//   for (let i = str.length-1; i >= 0; i--){
//     if(str === i){
//       console.log("true")
//     }
//     else{
//       console.log("false")
//     }

//   }
// }

// console.log(pal("madam"))


// function evenArr(arr){
//   const rev = arr.map((i)=> i%2 === 0)
//   return rev
// }

// console.log(evenArr([10,21,30,40]))







// function reverseString(str){
//   let reverse = ""
//   for(let i = str.length -1; i >= 0; i--){
//     reverse = reverse + str[i];

//   }
//   return reverse;

// }

// console.log(reverseString("obyda"))


// even number check from an array:

// function evenArr(arr){
//   let evenNum = arr.map((i)=> i%2 === 0);
//   return evenNum;
// }

// console.log(evenArr([10,20,30,51,31,60]))


// function evenArr(arr){
//   for(i = 0; i < arr.length; i++){
//   if (arr[i] % 2 === 0){
//     return true;

//   }
  
// }
// return false;
// }
// console.log(evenArr[10,20,30,51,31,60])


// function evenArr(arr) {
//   let evenNum = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       evenNum.push(true);
//     } else {
//       evenNum.push(false);
//     }
//   }
//   return evenNum;
// }

// console.log(evenArr([10, 20, 30, 51, 31, 60]));



// function add(a,b){
//     return a+b;
// }

// console.log(add(2,3));



// Check palindrome
// Check anagrame
// even number check
// odd number check
// reverse a string
// reverse an array


// function memoize(fn, resolver = (...args) => JSON.stringify(args)) {
//   const cache = new Map();

//   return function (...args) {
//     const key = resolver(...args);
//     if (cache.has(key)) return cache.get(key);

//     const result = fn.apply(this, args);
//     cache.set(key, result);
//     return result;
//   };
// }



// async function retry(fn, retries = 3, delay = 500) {
//   try {
//     return await fn();
//   } catch (err) {
//     if (retries === 0) throw err;
//     await new Promise(res => setTimeout(res, delay));
//     return retry(fn, retries - 1, delay);
//   }
// }



// const btn1 = document.getElementById("btn1");

// const btn2 = document.getElementById("btn2");


// btn2.addEventListener("mouseover",()=>{
//   btn2.textContent = "Noooo";
// })


// const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");

// btn2.addEventListener("mouseover", () => {
//   const x = Math.random() * (window.innerWidth - btn2.offsetWidth);
//   const y = Math.random() * (window.innerHeight - btn2.offsetHeight);

//   btn2.style.position = "absolute";
//   btn2.style.left = `${x}px`;
//   btn2.style.top = `${y}px`;
//   // btn2.textContent = "Noooo";
// });



// async function promisePool(tasks, limit = 3) {
//   const results = [];
//   const executing = [];

//   for (const task of tasks) {
//     const p = Promise.resolve().then(task);
//     results.push(p);

//     if (limit <= tasks.length) {
//       const e = p.then(() => executing.splice(executing.indexOf(e), 1));
//       executing.push(e);

//       if (executing.length >= limit) {
//         await Promise.race(executing);
//       }
//     }
//   }

//   return Promise.all(results);
// }



// class LRUCache {
//   constructor(limit = 5) {
//     this.limit = limit;
//     this.cache = new Map();
//   }

//   get(key) {
//     if (!this.cache.has(key)) return null;
//     const val = this.cache.get(key);
//     this.cache.delete(key);
//     this.cache.set(key, val);
//     return val;
//   }

//   put(key, value) {
//     if (this.cache.has(key)) this.cache.delete(key);
//     else if (this.cache.size >= this.limit) {
//       const firstKey = this.cache.keys().next().value;
//       this.cache.delete(firstKey);
//     }
//     this.cache.set(key, value);
//   }
// }



// const compose = (...fns) => input =>
//   fns.reduceRight((val, fn) => fn(val), input);

// // usage
// const double = x => x * 2;
// const square = x => x * x;

// const result = compose(square, double)(3); // 36


// function safeJSONParse(str, fallback = null) {
//   try {
//     return JSON.parse(str);
//   } catch {
//     return fallback;
//   }
// }


// class AsyncQueue {
//   constructor() {
//     this.queue = Promise.resolve();
//   }

//   enqueue(task) {
//     this.queue = this.queue.then(() => task()).catch(() => {});
//     return this.queue;
//   }
// }


// function throttle(fn, limit = 300) {
//   let inThrottle = false;

//   return function (...args) {
//     if (!inThrottle) {
//       fn.apply(this, args);
//       inThrottle = true;
//       setTimeout(() => (inThrottle = false), limit);
//     }
//   };
// }


// function deepFreeze(obj) {
//   Object.freeze(obj);

//   Object.getOwnPropertyNames(obj).forEach(prop => {
//     if (
//       obj[prop] !== null &&
//       (typeof obj[prop] === "object" || typeof obj[prop] === "function") &&
//       !Object.isFrozen(obj[prop])
//     ) {
//       deepFreeze(obj[prop]);
//     }
//   });

//   return obj;
// }



// function parseQuery(query) {
//   return query
//     .replace(/^\?/, "")
//     .split("&")
//     .reduce((acc, pair) => {
//       const [key, value] = pair.split("=");
//       acc[decodeURIComponent(key)] = decodeURIComponent(value || "");
//       return acc;
//     }, {});
// }



// function uniqueBy(arr, key) {
//   const seen = new Set();
//   return arr.filter(item => {
//     const val = item[key];
//     if (seen.has(val)) return false;
//     seen.add(val);
//     return true;
//   });
// }


// function withTimeout(promise, ms = 2000) {
//   const timeout = new Promise((_, reject) =>
//     setTimeout(() => reject(new Error("Timeout")), ms)
//   );

//   return Promise.race([promise, timeout]);
// }


// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args);
//     }
//     return (...next) => curried.apply(this, args.concat(next));
//   };
// }



// function deepEqual(a, b) {
//   if (a === b) return true;
//   if (typeof a !== typeof b || typeof a !== "object" || a === null || b === null)
//     return false;

//   const keysA = Object.keys(a);
//   const keysB = Object.keys(b);

//   if (keysA.length !== keysB.length) return false;

//   return keysA.every(key => deepEqual(a[key], b[key]));
// }

// function poll(fn, interval = 1000, maxAttempts = 5) {
//   let attempts = 0;

//   return new Promise((resolve, reject) => {
//     const timer = setInterval(async () => {
//       try {
//         const result = await fn();
//         attempts++;
//         if (result || attempts >= maxAttempts) {
//           clearInterval(timer);
//           resolve(result);
//         }
//       } catch (err) {
//         clearInterval(timer);
//         reject(err);
//       }
//     }, interval);
//   });
// }



const pipe = (...fns) => input =>
  fns.reduce((val, fn) => fn(val), input);

// usage
pipe(
  x => x + 1,
  x => x * 2,
  x => x - 3
)(5); // 9
