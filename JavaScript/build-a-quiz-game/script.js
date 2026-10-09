const questions = [
  {
    category: "JavaScript Basics",
    question:
      "Which keyword is used to declare a block-scoped variable that cannot be reassigned?",
    choices: ["let", "const", "var"],
    answer: "const",
  },
  {
    category: "HTML",
    question: "Which tag is used to create a hyper-link to another webpage?",
    choices: [`<a>`, `<link>`, `<href>`],
    answer: `<a>`,
  },
  {
    category: "CSS",
    question: "Which property controls the space inside an element's border?",
    choices: ["margin", "padding", "border-spacing"],
    answer: "padding",
  },
  {
    category: "JavaScript Objects",
    question:
      "How do you access the 'age' property of an object named 'user' using dot notation?",
    choices: ["user[age]", "user.age", "user->age"],
    answer: "user.age",
  },
  {
    category: "General Tech",
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyper Transfer Mode Link",
    ],
    answer: "Hyper Text Markup Language",
  },
];

let qNum = (randomInt = Math.floor(Math.random() * questions.length));
let cNum = (randomInt = Math.floor(
  Math.random() * questions[qNum].choices.length,
));

function getRandomQuestion(arr) {
  const randomQuestion = arr[qNum].question;
  return randomQuestion;
}

function getRandomComputerChoice(arr) {
  const randChoice = arr[qNum].choices[cNum];
  return randChoice;
}

function getResults(arr, choice) {
  if (choice === arr[qNum].answer) {
    return `The computer's choice is correct!`;
  } else {
    return `The computer's choice is wrong. The correct answer is: ${arr[qNum].answer}`;
  }
}

let question = getRandomQuestion(questions);
let choice = getRandomComputerChoice(questions);

console.log(question);
console.log(choice);
console.log(getResults(questions, choice));
