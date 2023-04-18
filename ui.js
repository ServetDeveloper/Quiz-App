function UI() {
  this.startButton = document.querySelector(".btn-start");
  this.nextButton = document.querySelector(".next-btn");
  this.quizBox = document.querySelector(".quiz-box");
  this.optionList = document.querySelector(".option-list");
  this.questionText = document.querySelector(".question-text");
  this.scoreBox = document.querySelector(".score-box");
  this.finishButton = document.querySelector(".btn-finish");
  this.timeText = document.querySelector(".time-text");
  this.timeSecond = document.querySelector(".time-second");
  this.timeLine = document.querySelector(".time-line");
  this.questionIndex = document.querySelector(".question-index");
  this.correctIcon = '<i class="fa-solid fa-check"></i>';
  this.incorrectIcon = '<i class="fa-solid fa-times"></i>';
}

UI.prototype.displayQuestion = function (soru) {
  let question = `<span>${soru.questionText}</span>`;
  let options = "";

  for (let answer in soru.answerOptions) {
    options += `
              <div class="option"> 
                  <span><b>${answer}</b>: ${soru.answerOptions[answer]}</span>
              </div>
          `;
  }

  ui.questionText.innerHTML = question;
  ui.optionList.innerHTML = options;
  const option = ui.optionList.querySelectorAll(".option");
  for (const opt of option) {
    opt.setAttribute("onclick", "optionSelected(this)");
  }
};

UI.prototype.displayNumberOfQuestion = function (
  questionOrder,
  totalQuestions
) {
  let tag = `<span class="badge bg-warning">${questionOrder} / ${totalQuestions}</span>`;

  this.questionIndex.innerHTML = tag;
};

UI.prototype.displayScore = function (numberOfCorrectAnswer, totalQuestions) {
  let tag = `You answered ${numberOfCorrectAnswer} out of ${totalQuestions} questions`;
  this.scoreBox.querySelector(".score-text").innerHTML = tag;
};
