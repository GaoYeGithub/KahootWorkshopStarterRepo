const Kahoot = require("kahoot.js-updated");
const client = new Kahoot();

client.join('7126907', Math.random() + "- Winner");

client.on("QuizStart", () => {
  console.log("Quiz started!");
});

client.on("QuestionStart", question => {
  console.log("New question!");
  const correctAnswerIndex = verifyProperty(question.answers, 'correct');
  if (correctAnswerIndex !== undefined) {
    console.log(`Answering Option ${correctAnswerIndex + 1}, the correct answer!`);
    question.answer(correctAnswerIndex);
  } else {
    console.log("No correct answer found.");
  }
});

function verifyProperty(array, property) {
  let finalNo;
  array.forEach(function(value, i) {
    if (value[property] === true) { finalNo = i; }
  });
  return finalNo;
}

client.on("QuizEnd", () => {
  console.log("The quiz has ended.");
});

client.on("Disconnect", reason => {
  console.log(`Disconnected: ${reason}`);
});

client.on("Error", error => {
  console.error(`Error: ${error.message}`);
});
