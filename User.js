const Kahoot = require("kahoot.js-updated");
const client = new Kahoot();
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

client.join('06612757', Math.random() + "- Your Name");

client.on("QuizStart", () => {
  console.log("The quiz has started!");
});

client.on("QuizEnd", () => {
  console.log("The quiz has ended.");
});

client.on("QuestionStart", question => {
  console.log(question.question)
  console.log(question.choices)
  console.log()
  question.choices.forEach(element => console.log(element.answer));
  readline.question('Answer: ', choice => {
    question.answer(choice);
    if(question.choices[choice].correct){
      console.log("Correct!")
    }
    else{
      console.log("Incorrect :(")
    }
    readline.close();
  });
});