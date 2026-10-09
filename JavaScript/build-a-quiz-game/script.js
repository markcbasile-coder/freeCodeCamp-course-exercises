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
    choices: ["a", "link", "href"],
    answer: "a",
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

function getRandomQuestion(arr) {
  const randomInt = Math.floor(Math.random() * arr.length);
  return arr[randomInt];
}

function getRandomComputerChoice(arr) {
  const randomInt = Math.floor(Math.random() * arr.length);
  return arr[randomInt];
}

function getResults(question, choice) {
  if (choice === question.answer) {
    return `The computer's choice is correct!`;
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
