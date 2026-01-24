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

function pal(str){

  for (let i = str.length-1; i >= 0; i--){
    if(str === i){
      console.log("true")
    }
    else{
      console.log("false")
    }

  }
}

console.log(pal("madam"))