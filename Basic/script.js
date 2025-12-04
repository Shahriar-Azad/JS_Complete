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




document.getElementById('roll').addEventListener("click", function(){
    const number = Math.random()
    document.getElementById('randomNum').textContent = number;

})
