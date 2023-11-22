//Declaring variables that control webpage

var scoreboardEl = document.querySelector(".scoreboard");
var initialEl = document.querySelector(".scoreboard-value-initial");
var scoreEl = document.querySelector(".scoreboard-value-score");
var timeEl = document.querySelector(".countDown");
var quizTitle = document.querySelector("#quiz-title");
var quizArea = document.querySelector(".quiz-area");
var quizTimer = document.querySelector(".quiz-timer");
var startQuizBtn = document.querySelector(".startBtn");
var questionEl = document.querySelector(".quiz-question");
var answerEl = document.querySelector(".quiz-answer");
// Can this be made into an array to shorten the code?
var button1El = document.querySelector(".button-answer-1");
var button2El = document.querySelector(".button-answer-2");
var button3El = document.querySelector(".button-answer-3");
var button4El = document.querySelector(".button-answer-4");
var saveArea = document.querySelector(".save");
var saveScoreBtn = document.querySelector(".saveBtn");
var restartArea = document.querySelector("restart-btn-area");
var restartQuizBtn = document.querySelector(".restart-btn");
var initialText = document.querySelector("#initialsText");
var scoreText = document.querySelector("#scoreText");
var localInitial = localStorage.getItem("Initial");
var localScore = localStorage.getItem("Score");

//declaring state variables
var initials = "";
var score = 0;
var timer = null;
var timeLeft = 0;
var currentQuestion = 0;

// declaring none changing variables
const question1 = "Is this a proper question?";
const gameDuration = 60;
let kStorageScore = "Module-4-quiz-score";
// Questions
const quizQuestions = [
  "Commonly used data types do NOT include.",
  "The act of talking through code with an inanimate object is called?",
  "Conditions in statments like while, for, and if/else are contained in?",
  "Arrays in JavaScript can be used to store what?",
];
// Answers
const quizAnswers = [
  ["Boolean", "Numbers", "Alerts", "Strings"],
  ["Talk Through", "Rubber Duck Debugging", "Wrong Answer 3", "Wrong Answer 4"],
  ["Wrong Answer 1", "Wrong Answer 2", "Wrong Answer 3", "Paranthesis"],
  ["Other Arrays", "Objects", "Single Variables", "All of the Above"],
];
// Answer key
const answerKey = [3, 2, 4, 4];
// Identifying events

// Event: page load
function init() {
  console.log("Page loaded");

  //retrieve data from local storage
  var scores = JSON.parse(localStorage.getItem(kStorageScore));

  if (scores) {
    initials = scores.initials;
    score = scores.score;
  }
}

// Event: start button
function handleClickStart() {
  console.log("Quiz started");

  if (!timer) {
    //start timer
    timeLeft = gameDuration;
    // Function to handle the event timer countdown.
    timer = setInterval(function () {
      console.log("countdown called");
      timeLeft--;
      timeEl.textContent = timeLeft;
      console.log(timeLeft);
      if (timeLeft === 0) {
        handleQuizEnd(false);
      }
    }, 1000);

    // show first question with answers
    setCurrentQuestionAnswer();

    // set time left

    // hide highscore and input boxes for initials and score
    // hide start button
    // show question and answers
    hideElement(startQuizBtn);
    hideElement(saveArea);
    showElement(quizTimer);
    showElement(questionEl);
    showElement(answerEl);
  }
}
startQuizBtn.addEventListener("click", handleClickStart);

// Event: timer countdown
// function handleTimerCountdown(ev) {
//   console.log("countdown called");
//   timer--;
//   timeEl.textContent = timeLeft;
//   if (timeLeft === 0) {
//     handleQuizEnd(false);
//   }
// }

// Event: answer click
function handleAnswerPick(ev) {
  console.log(currentQuestion);
  console.log("mouse clicked", ev.target.textContent);
  // check if answer is correct
  console.log(answerKey[currentQuestion] - 1);
  if (
    ev.target.textContent ===
    quizAnswers[currentQuestion][answerKey[currentQuestion] - 1]
  ) {
    console.log("correct");
    // if correct, increment score
    score++;
    changeQuestionAnswer();
  } else {
    // if incorrect, decrement time
    console.log("incorrect");
    timeLeft = timeLeft - 10;
    changeQuestionAnswer();
  }
}

button1El.addEventListener("click", handleAnswerPick);
button2El.addEventListener("click", handleAnswerPick);
button3El.addEventListener("click", handleAnswerPick);
button4El.addEventListener("click", handleAnswerPick);
// Event: save initials and score
function saveScores() {
  var scores = kStorageScore;
}
saveScoreBtn.addEventListener("click", function (event) {
  if (localInitial == null) {
    initialText = initials;
  }
  localStorage.setItem("Initial", initialText);
  localStorage.setItem("Score", scoreText);
});

// Function to set current question and answer
function setCurrentQuestionAnswer() {
  if (quizQuestions.length > currentQuestion) {
    var x = currentQuestion;
    questionEl.textContent = quizQuestions[x];
    button1El.textContent = quizAnswers[x][0];
    button2El.textContent = quizAnswers[x][1];
    button3El.textContent = quizAnswers[x][2];
    button4El.textContent = quizAnswers[x][3];
  } else {
    handleQuizEnd(true);
  }
}

// Function to change answer and question
function changeQuestionAnswer() {
  currentQuestion++;
  setCurrentQuestionAnswer();
}

// Hide and show elements
function hideElement(el) {
  el.classList.add("hide");
}
function showElement(el) {
  el.classList.remove("hide");
}

// Function to post saved initials and score
function postHighScore() {
  // update the high score
  initialEl.textContent = initials;
  scoreEl.textContent = score;
}

// Event: quiz ends;
function handleQuizEnd(didPass) {
  // stop timer
  clearInterval(timer);
  if (didPass) {
    console.log("the game ended true");
    // show save location with current time it took to finish the questions
    // hide timer and unneeded elements
    hideElement(quizTimer);
    hideElement(questionEl);
    hideElement(answerEl);
    showElement(saveArea);
  } else {
    console.log("game ended in failure");
    // Add what is shown upon failure
    hideElement(quizTimer);
    hideElement(questionEl);
    hideElement(answerEl);
    hideElement(scoreboardEl);
    quizTitle.textContent = "You Failed!";
  }
}

// Start quiz
init();
