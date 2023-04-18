function Question(questionText, answerOptions, trueAnswer) {
  this.questionText = questionText;
  this.answerOptions = answerOptions;
  this.trueAnswer = trueAnswer;
}

Question.prototype.checkAnswer = function (answer) {
  return answer === this.trueAnswer;
};

let questions = [
  new Question(
    "1-Hangisi javascript paket yönetim uygulasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" },
    "c"
  ),
  new Question(
    "2-Hangisi frontend kapsamında değerlendirilmez?",
    { a: "Css", b: "Html", c: "Javascipt", d: "Sql" },
    "d"
  ),
  new Question(
    "3-Hangisi backend kapsamında değerlendirilir?",
    { a: "Node.js", b: "Typescript", c: "Angular", d: "React" },
    "a"
  ),
  new Question(
    "4-Hangisi javascript programlama dilini kullanmaz?",
    { a: "React", b: "Angular", c: "Vue.js", d: "Asp.net" },
    "d"
  ),
];
