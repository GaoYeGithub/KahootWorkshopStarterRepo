// Kahoot Workshop Starter Repo
const Kahoot = require("kahoot.js-updated");
const client = new Kahoot();

function verifyProperty(array, property) {
  let finalNo
  array.forEach(function(value, i) {
    if (value[property] === true) {finalNo = i}
  });
  return(finalNo)
}


client.join('06612757', Math.random() + "- Your Name");

client.on("QuizStart", () => {
  console.log("The quiz has started!");
});

client.on("QuizEnd", () => {
  console.log("The quiz has ended.");
});

client.on("QuestionStart", question => {
  console.log("New question!");
  console.log(question.question);
  console.log(question.answer);

  console.log("Answering Option A, I don't even know what it is!");
  question.answer(0);

  client.on("QuestionStart", question => {
    question.answer(verifyProperty(question.choices, "correct"))
  });
});



