let userName = 'NAME';
if (userName) {
  console.log(`Hello, ${userName}!`);
}
else {
  console.log('Hello!');
}
var userQuestion = 'QUESTION';
var randomNumber = Math.floor(Math.random() * 8)
let eightBall = ''
switch (randomNumber) {
  case (0): eightBall = 'It is certain'; break;
  case (1): eightBall = 'It is decidedly so'; break; 
  case (2): eightBall = 'Reply hazy try again'; break;
  case (3): eightBall = 'Cannot predict now'; break; 
  case (4): eightBall = 'Do not count on it'; break;
  case (5): eightBall = 'My sources say no'; break; 
  case (6): eightBall = 'Outlook not so good'; break;
  case (7): eightBall = 'Signs point to yes'; break;
  }
if (userQuestion) {
  console.log(`${userName}: "${userQuestion}"`)
  console.log(eightBall);
} else {
  console.log('You need to write a question first');
}
