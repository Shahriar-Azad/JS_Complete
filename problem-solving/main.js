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



// const pipe = (...fns) => input =>
//   fns.reduce((val, fn) => fn(val), input);

// // usage
// pipe(
//   x => x + 1,
//   x => x * 2,
//   x => x - 3
// )(5); // 9


// function get(obj, path, defaultValue = undefined) {
//   return path
//     .split(".")
//     .reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : defaultValue), obj);
// }


// function stableSort(arr, compare) {
//   return arr
//     .map((item, index) => ({ item, index }))
//     .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
//     .map(wrapper => wrapper.item);
// }


// function once(fn) {
//   let called = false;
//   let result;

//   return function (...args) {
//     if (!called) {
//       called = true;
//       result = fn.apply(this, args);
//     }
//     return result;
//   };
// }


// function chunkArray(arr, size = 2) {
//   const result = [];
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }
//   return result;
// }


// function flattenDeep(arr) {
//   return arr.reduce(
//     (acc, val) =>
//       Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
//     []
//   );
// }


// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) return mid;
//     if (arr[mid] < target) left = mid + 1;
//     else right = mid - 1;
//   }

//   return -1;
// }


// function groupBy(arr, key) {
//   return arr.reduce((acc, item) => {
//     const groupKey = item[key];
//     (acc[groupKey] ||= []).push(item);
//     return acc;
//   }, {});
// }


// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }




// async function retryWithBackoff(fn, retries = 3, delay = 300) {
//   try {
//     return await fn();
//   } catch (err) {
//     if (retries === 0) throw err;
//     await new Promise(res => setTimeout(res, delay));
//     return retryWithBackoff(fn, retries - 1, delay * 2);
//   }
// }


// function compareVersions(v1, v2) {
//   const a = v1.split(".").map(Number);
//   const b = v2.split(".").map(Number);
//   const len = Math.max(a.length, b.length);

//   for (let i = 0; i < len; i++) {
//     const x = a[i] || 0;
//     const y = b[i] || 0;
//     if (x > y) return 1;
//     if (x < y) return -1;
//   }

//   return 0;
// }


// function topKFrequent(arr, k) {
//   const freq = new Map();

//   for (const n of arr) {
//     freq.set(n, (freq.get(n) || 0) + 1);
//   }

//   return [...freq.entries()]
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, k)
//     .map(([key]) => key);
// }


// function urlJoin(...parts) {
//   return parts
//     .map((part, i) =>
//       i === 0
//         ? part.replace(/\/+$/, "")
//         : part.replace(/^\/+|\/+$/g, "")
//     )
//     .join("/");
// }



// async function mapLimit(arr, limit, asyncFn) {
//   const results = [];
//   let index = 0;

//   async function worker() {
//     while (index < arr.length) {
//       const current = index++;
//       results[current] = await asyncFn(arr[current]);
//     }
//   }

//   await Promise.all(Array.from({ length: limit }, worker));
//   return results;
// }


// function intersect(arr1, arr2) {
//   const set = new Set(arr2);
//   return [...new Set(arr1.filter(x => set.has(x)))];
// }


// function capitalizeWords(str) {
//   return str.replace(/\b\w/g, char => char.toUpperCase());
// }


// function shuffleArray(arr) {
//   const result = [...arr];
//   for (let i = result.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [result[i], result[j]] = [result[j], result[i]];
//   }
//   return result;
// }



// function isPlainObject(value) {
//   return (
//     Object.prototype.toString.call(value) === "[object Object]"
//   );
// }


// function clamp(value, min, max) {
//   return Math.min(Math.max(value, min), max);
// }


// function createLogger(level = "info") {
//   const levels = ["debug", "info", "warn", "error"];
//   const currentLevel = levels.indexOf(level);

//   return {
//     debug: (...args) => currentLevel <= 0 && console.debug(...args),
//     info: (...args) => currentLevel <= 1 && console.info(...args),
//     warn: (...args) => currentLevel <= 2 && console.warn(...args),
//     error: (...args) => currentLevel <= 3 && console.error(...args),
//   };
// }


// function formatBytes(bytes, decimals = 2) {
//   if (bytes === 0) return "0 Bytes";

//   const k = 1024;
//   const dm = decimals < 0 ? 0 : decimals;
//   const sizes = ["Bytes", "KB", "MB", "GB", "TB"];

//   const i = Math.floor(Math.log(bytes) / Math.log(k));

//   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
// }


// function escapeHTML(str) {
//   const map = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&#039;",
//   };

//   return str.replace(/[&<>"']/g, m => map[m]);
// }

// function range(start, end, step = 1) {
//   const result = [];
//   for (let i = start; i <= end; i += step) {
//     result.push(i);
//   }
//   return result;
// }


// function pick(obj, keys = []) {
//   return keys.reduce((acc, key) => {
//     if (key in obj) acc[key] = obj[key];
//     return acc;
//   }, {});
// }


// function omit(obj, keys = []) {
//   const result = { ...obj };
//   keys.forEach(key => delete result[key]);
//   return result;
// }


// function timeAgo(timestamp) {
//   const seconds = Math.floor((Date.now() - timestamp) / 1000);
//   const intervals = [
//     [60, "seconds"],
//     [3600, "minutes"],
//     [86400, "hours"],
//     [604800, "days"],
//   ];

//   for (let [limit, label] of intervals) {
//     if (seconds < limit) {
//       return `${Math.floor(seconds / (limit / 60))} ${label} ago`;
//     }
//   }

//   return "just now";
// }


// function ensureArray(value) {
//   if (Array.isArray(value)) return value;
//   if (value == null) return [];
//   return [value];
// }


// function randomId(length = 8) {
//   return Math.random().toString(36).substr(2, length);
// }


// function isEmptyObject(obj) {
//   return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
// }


// function compact(arr) {
//   return arr.filter(Boolean);
// }

// function twoSum(nums, target) {
//   const map = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const needed = target - nums[i];

//     if (map.has(needed)) {
//       return [map.get(needed), i];
//     }

//     map.set(nums[i], i);
//   }
// }


// function isValid(s) {
//   const stack = [];
//   const map = {
//     ")": "(",
//     "]": "[",
//     "}": "{"
//   };

//   for (const char of s) {
//     if (char === "(" || char === "[" || char === "{") {
//       stack.push(char);
//     } else {
//       if (stack.pop() !== map[char]) return false;
//     }
//   }

//   return stack.length === 0;
// }



// function reverseList(head) {
//   let prev = null;
//   let curr = head;

//   while (curr) {
//     const next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
//   }

//   return prev;
// }


// function maxSubArray(nums) {
//   let maxSum = nums[0];
//   let current = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     current = Math.max(nums[i], current + nums[i]);
//     maxSum = Math.max(maxSum, current);
//   }

//   return maxSum;
// }


// function mergeSorted(arr1, arr2) {
//   let i = 0, j = 0;
//   const result = [];

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) result.push(arr1[i++]);
//     else result.push(arr2[j++]);
//   }

//   return result.concat(arr1.slice(i)).concat(arr2.slice(j));
// }


// function lengthOfLongestSubstring(s) {
//   let left = 0;
//   let maxLen = 0;
//   const set = new Set();

//   for (let right = 0; right < s.length; right++) {
//     while (set.has(s[right])) {
//       set.delete(s[left]);
//       left++;
//     }
//     set.add(s[right]);
//     maxLen = Math.max(maxLen, right - left + 1);
//   }

//   return maxLen;
// }


// function middleNode(head) {
//   let slow = head;
//   let fast = head;

//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   return slow;
// }


// function productExceptSelf(nums) {
//   const result = Array(nums.length).fill(1);
//   let prefix = 1;
//   let suffix = 1;

//   for (let i = 0; i < nums.length; i++) {
//     result[i] *= prefix;
//     prefix *= nums[i];
//   }

//   for (let i = nums.length - 1; i >= 0; i--) {
//     result[i] *= suffix;
//     suffix *= nums[i];
//   }

//   return result;
// }


// function isAnagram(s, t) {
//   if (s.length !== t.length) return false;

//   const count = {};

//   for (const ch of s) {
//     count[ch] = (count[ch] || 0) + 1;
//   }

//   for (const ch of t) {
//     if (!count[ch]) return false;
//     count[ch]--;
//   }

//   return true;
// }



// function moveZeroes(nums) {
//   let index = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[index++] = nums[i];
//     }
//   }

//   while (index < nums.length) {
//     nums[index++] = 0;
//   }

//   return nums;
// }


// function maxDepth(root) {
//   if (!root) return 0;
//   return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
// }


// function maxProfit(prices) {
//   let minPrice = Infinity;
//   let maxProfit = 0;

//   for (const price of prices) {
//     minPrice = Math.min(minPrice, price);
//     maxProfit = Math.max(maxProfit, price - minPrice);
//   }

//   return maxProfit;
// }


// function containsDuplicate(nums) {
//   const set = new Set();

//   for (const num of nums) {
//     if (set.has(num)) return true;
//     set.add(num);
//   }

//   return false;
// }


// function majorityElement(nums) {
//   let count = 0;
//   let candidate = null;

//   for (const num of nums) {
//     if (count === 0) {
//       candidate = num;
//     }
//     count += num === candidate ? 1 : -1;
//   }

//   return candidate;
// }



// function missingNumber(nums) {
//   const n = nums.length;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = nums.reduce((sum, num) => sum + num, 0);
//   return expectedSum - actualSum;
// }


// function reverseString(s) {
//   let left = 0;
//   let right = s.length - 1;

//   while (left < right) {
//     [s[left], s[right]] = [s[right], s[left]];
//     left++;
//     right--;
//   }

//   return s;
// }


// function longestCommonPrefix(strs) {
//   if (!strs.length) return "";

//   for (let i = 0; i < strs[0].length; i++) {
//     const char = strs[0][i];

//     for (let j = 1; j < strs.length; j++) {
//       if (strs[j][i] !== char) {
//         return strs[0].slice(0, i);
//       }
//     }
//   }

//   return strs[0];
// }



// function mergeIntervals(intervals) {
//   if (!intervals.length) return [];

//   intervals.sort((a, b) => a[0] - b[0]);
//   const result = [intervals[0]];

//   for (let i = 1; i < intervals.length; i++) {
//     const last = result[result.length - 1];
//     const current = intervals[i];

//     if (current[0] <= last[1]) {
//       last[1] = Math.max(last[1], current[1]);
//     } else {
//       result.push(current);
//     }
//   }

//   return result;
// }


// function climbStairs(n) {
//   if (n <= 2) return n;

//   let prev1 = 1;
//   let prev2 = 2;

//   for (let i = 3; i <= n; i++) {
//     const current = prev1 + prev2;
//     prev1 = prev2;
//     prev2 = current;
//   }

//   return prev2;
// }


// function longestConsecutive(nums) {
//   const set = new Set(nums);
//   let longest = 0;

//   for (const num of set) {
//     if (!set.has(num - 1)) {
//       let current = num;
//       let streak = 1;

//       while (set.has(current + 1)) {
//         current++;
//         streak++;
//       }

//       longest = Math.max(longest, streak);
//     }
//   }

//   return longest;
// }


// function maxArea(height) {
//   let left = 0;
//   let right = height.length - 1;
//   let max = 0;

//   while (left < right) {
//     const area = Math.min(height[left], height[right]) * (right - left);
//     max = Math.max(max, area);

//     height[left] < height[right] ? left++ : right--;
//   }

//   return max;
// }


function subarraySum(nums, k) {
  const map = new Map();
  map.set(0, 1);

  let sum = 0;
  let count = 0;

  for (const num of nums) {
    sum += num;
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}
