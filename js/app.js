'use strict';

let app = document.getElementById('app');
var counter = 0;
var questions=[
  'is my fav color is blue?',
  'is my fav food is mansaf',
  'is my job is an artist?',
  'is my phone samsung or iphone?',
  'i love coding?',
];
var answers=['yes','yes','no','yes','yes'];

function theFiveQuestions() {
    alert('Please answer with yes or no!');
    for(var i=0;i<questions.length;i++){
      var userAnswer= prompt(questions[i]);
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
        var userGuess = prompt('How many times did I eat Sushi, you have 4 attempts');
        var user = parseInt(userGuess);
        while (isNaN(user) || user === '') {
          user = prompt('Please insert a number'); }
      
        var num = Math.floor(Math.random() * 10);
        var correctNum= false;
        for (var i = 0; i < 3; i++) {
      



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
    var question7 = prompt('Write the name of an arab Scientist ');
    console.log('name of an arab Scientist: ibn sena, farabi ,ibn khaldon');
    var answer = ['ibn sena', 'farabiar', 'ibn khaldon'];
    for (var j = 0; j < 5; j++) {
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
  
  
  
  
  function theName() {
    var uName = prompt('What\'s your name?');
    alert('Welcome to my site, ' + uName + ', I hope you have a nice experience');
    app.innerHTML = 'Welcome to my site, ' + uName + ', I hope you have a great time';
  }
  theName();
  theFiveQuestions();
  number();
  music();
  alert('Your score is ' + counter + ' out of 7');
  

  


let yourName = prompt('enter yourname please');
alert('welcome dear' +' ' + yourName);

alert('Please answer with yes or no!');
  for(var i=0;i<questions.length;i++){
    var userAnswer= prompt(questions[i]);
    while (userAnswer.toLowerCase() !== 'yes' && userAnswer.toLowerCase() !== 'no'&&userAnswer.toLowerCase() !== 'y' && userAnswer.toLowerCase() !== 'n')
    {
      userAnswer = prompt('Answer with yes/no');
    }
    if (userAnswer.toLowerCase() === answers[i]||userAnswer.toLowerCase() === shortAnswers[i]) {
      alert('You\'re right');
      counter++;
    }
    else
      alert('You\'re wrong'); 
     }
