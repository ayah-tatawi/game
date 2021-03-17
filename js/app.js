'use strict';
function theName() {
  let uName = prompt('What\'s your name?');
  alert('Welcome to my site, ' + uName + ', I hope you have a nice experience');

}



let counter = 0;
let questions=[
  'is my fav color is blue?',
  'is my fav food is mansaf',
  'is my job is an artist?',
  'is my phone samsung or iphone?',
  'i love coding?',
];
let answers=['yes','yes','no','yes','yes'];
let shortAnswers=['y','y','n','y','n'];

function theFiveQuestions() {
  alert('Please answer with yes or no!');
  for(let i=0;i<questions.length;i++){
    let userAnswer= prompt(questions[i]);
    while (userAnswer.toLowerCase() !== 'yes' && userAnswer.toLowerCase() !== 'no'&&userAnswer.toLowerCase() !== 'y' && userAnswer.toLowerCase() !== 'n')
    {
      userAnswer = prompt('Answer with yes/no');
    }
    if (userAnswer.toLowerCase() === answers[i]||userAnswer.toLowerCase() === shortAnswers[i]) {
      alert('You are right');
      counter++;
    }
    else
      alert('You are wrong');
  }


}

function number() {
  let userGuess = prompt('How many times did I eat Sushi, you have 4 attempts');
  let user = parseInt(userGuess);
  while (isNaN(user) || user === '') {
    user = prompt('Please insert a number'); }

  let num = Math.floor(Math.random() * 10);
  let correctNum= false;
  for (let i = 0; i < 3; i++) {




    if (user > num) {
      alert('Too high');
      user = prompt('Try again');
    }
    else if (user < num) {
      alert('Too low');
      user = prompt('Try again');
    }
    else {
      alert('good job');
      counter++;
      correctNum=true;
      break;
    }
  }
  if (correctNum===false){ alert('The correct number is ' + num);}

}
function music() {
  let question7 = prompt('Write the name of an arab Scientist ');
  console.log('name of an arab Scientist: ibn sena, farabi ,ibn khaldon');
  let answer = ['ibn sena', 'farabiar', 'ibn khaldon'];
  for (let j = 0; j < 5; j++) {
    if (question7 === answer[0] || question7 === answer[1] || question7 === answer[2]) {
      alert('good job ' + question7 + ' is a type of musical instruments');
      j = 10;
      counter++;
      break;
    }
    else {
      question7 = prompt('Try again');
    }
  }
  alert('The answer is: \n 1-' + answer[0] + '\n 2- ' + answer[1] + '\n 3-' + answer[2]);
}





theName();
theFiveQuestions();
number();
music();
alert('Your score is ' + counter + ' out of 7');







