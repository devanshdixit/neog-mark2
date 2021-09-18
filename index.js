var readLineSync = require('readline-sync');

var score = 0;


function play(question,answer){
  var userAnswer = readLineSync.question(question);
  console.log("\n-------------------------------------------");
  if(userAnswer === answer){
    console.log("You are right");
    score = score + 1;
  }else{
    console.log("you better google it!")
     score = score - 1;
  }

  console.log("current score is",score);
  console.log("-------------------------------------------\n");
}

function welcome() {
 var userName = readLineSync.question("What's your name? ");
  console.log("\nWelcome,"+ userName);
  console.log("-------------------------------------------");
  console.log("Let's test your knowlegde about India ");
  console.log("-------------------------------------------\n");
}

function showScores() {
  console.log("\n-------------------------------------------");
  console.log("Congratulations, your score is: ", score);
  console.log("-------------------------------------------\n");
}

var questions = [{
  question: "India is a part of which continent?\n",
  answer: "asia"
},
{
  question: "What is the name of Indian currency?\n",
  answer: "rupees"
},
{
  question: "When independence day is celebrated in India?(Just type the date)\n",
  answer: "15"
},
{
  question: "What is the capital of India?\n",
  answer: "delhi"
},
{
  question: "When republic day is celebrated in India?(Just type the date)\n",
  answer: "26"
},
];

welcome();
for(var i=0 ; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
showScores()