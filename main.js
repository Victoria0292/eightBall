let userName = "Vikki";
/*Ternary expression is a condition ? expression to execute if the condition is 
truthy : expression to execute if the condition is falsy*/
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

const userQuestion = "Are ghost real?";

//console.log() using string interpolation
console.log(`${userName} has asked - ${userQuestion}`);

//Math.random() returns a value between 0 and 1 Math.floor() rounding down to the nearest whole number
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

//switch statment to assigns eightBall to a reply that a Magic Eight Ball would return
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}
console.log(eightBall);
