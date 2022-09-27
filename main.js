let userName = "Vikki";
/*Ternary expression is a condition ? expression to execute if the condition is 
truthy : expression to execute if the condition is falsy*/
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

const userQuestion = 'Are ghost real?';

//console.log() using string interpolation
console.log(`${userName} has asked - ${userQuestion}`);

//Math.random() returns a value between 0 and 1 Math.floor() rounding down to the nearest whole number
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';