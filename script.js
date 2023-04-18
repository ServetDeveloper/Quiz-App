const quiz = new Quiz(questions);
const ui = new UI();

ui.startButton.addEventListener("click", function () {
  ui.quizBox.classList.add("active");
  startTimer(10);
  startTimerLine();
  ui.nextButton.classList.remove("show");
  ui.displayQuestion(quiz.bringQuestion());
  ui.displayNumberOfQuestion(quiz.questionIndex + 1, questions.length);
});

ui.nextButton.addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex + 1) {
    quiz.questionIndex += 1;
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(10);
    startTimerLine();
    ui.nextButton.classList.remove("show");
    ui.displayQuestion(quiz.bringQuestion());
    ui.displayNumberOfQuestion(quiz.questionIndex + 1, questions.length);
  } else {
    clearInterval(counter);
    clearInterval(counterLine);
    ui.quizBox.remove("active");
    ui.startButton.style.opacity = 0;
    ui.scoreBox.classList.add("active");
    ui.displayScore(quiz.numberOfCorrectAnswers, quiz.questions.length);
  }
});

function optionSelected(option) {
  clearInterval(counter);
  clearInterval(counterLine);
  let answer = option.querySelector("span b").textContent;
  let question = quiz.bringQuestion();
  if (question.checkAnswer(answer)) {
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
    quiz.numberOfCorrectAnswers += 1;
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
  }

  for (let i = 0; i < ui.optionList.children.length; i++) {
    ui.optionList.children[i].classList.add("disabled");
  }
  ui.nextButton.classList.add("show");
}

ui.finishButton.addEventListener("click", () => {
  window.location.reload();
});

let counter;
let counterLine;

function startTimer(time) {
  counter = setInterval(timer, 1000);

  function timer() {
    ui.timeSecond.textContent = time;
    time--;

    if (time < 0) {
      clearInterval(counter);

      ui.timeText.textContent = "Time is over";

      let answer = quiz.bringQuestion().trueAnswer;

      for (let option of ui.optionList.children) {
        if (option.querySelector("span b").textContent === answer) {
          option.classList.add("correct");
          option.insertAdjacentHTML("beforeend", ui.correctIcon);
        }

        option.classList.add("disabled");
      }

      ui.nextButton.classList.add("show");
    }
  }
}

function startTimerLine() {
  let lineWidth = 0;

  counterLine = setInterval(timer, 20);

  function timer() {
    lineWidth += 1;
    ui.timeLine.style.width = lineWidth + "px";

    if (lineWidth > 549) {
      clearInterval(counterLine);
    }
  }
}
