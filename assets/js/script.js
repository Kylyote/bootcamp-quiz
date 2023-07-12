//Declaring variables that control webpage

var passEl = document.querySelector(".scoreboard_value-pass");
var missEl = document.querySelector(".scoreboard_value-miss");
var timeEl = document.querySelector(".quiz_timer");
var startQuizBtn = document.querySelector(".startBtn");
var questionEl = document.querySelector(".quiz_question");
var button1El = document.querySelector(".button_answer_1");
var button2El = document.querySelector(".button_answer_2");
var button3El = document.querySelector(".button_answer_3");
var button4El = document.querySelector(".button_answer_4");

//declaring state variables
var pass = 0;
var miss = 0;
var timer = null;
var timeLeft = 0;
var currentQuestion;

// declaring none changing variables
const question1 = "Is this a proper question?"
const gameDuration = 60;

// Identifying events

// Event: page load
function init(){
    console.log("Page loaded");
}

// Event: start button
function handleClickStart(){
    console.log("Quiz started");
}
startQuizBtn.addEventListener("click", handleClickStart);

// Event: timer countdown
function handleTimerCountdown(ev) {
    console.log("countdown called");
}
// Event: answer click
function handleAnswerPick(ev) {
    console.log("key pressed", ev.button)
}
document.addEventListener("click", handleAnswerPick);
// Event: quiz ends;
function handleQuizEnd() {

}

// Start quiz 
init();