//function to get the class average score
function getAverage(scores) {
  let score = 0;
  for (let i = 0; i < scores.length; i++) {
    score += scores[i];
  }
  let ave = score / scores.length;
  return ave;
}

//test call for class average
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));

//function to get the individual student score and convert to a letter grade
function getGrade(stuScore) {
  let letGrade = "";

  if (stuScore === 100) {
    letGrade += "A+";
  } else if (stuScore >= 90 && stuScore <= 99) {
    letGrade += "A";
  } else if (stuScore >= 80 && stuScore <= 89) {
    letGrade += "B";
  } else if (stuScore >= 70 && stuScore <= 79) {
    letGrade += "C";
  } else if (stuScore >= 60 && stuScore <= 69) {
    letGrade += "D";
  } else if (stuScore >= 0 && stuScore <= 59) {
    letGrade += "F";
  }

  return letGrade;
}

//test call for getting letter grade
console.log(getGrade(73));

//function to determine if the student letter grade is passing
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

//test call for passing grade
console.log(hasPassingGrade(100));
console.log(hasPassingGrade(95));
console.log(hasPassingGrade(85));
console.log(hasPassingGrade(75));
console.log(hasPassingGrade(65));
console.log(hasPassingGrade(5));

//function to log msg if the student passed or failed
function studentMsg(scores, stuScore) {
  let classAve = getAverage(scores);
  let stuGrade = getGrade(stuScore);
  let didPass = hasPassingGrade(stuScore);

  if (didPass === true) {
    return `Class average: ${classAve}. Your grade: ${stuGrade}. You passed the course.`;
  } else {
    return `Class average: ${classAve}. Your grade: ${stuGrade}. You failed the course.`;
  }
}

//test call for message
console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));
