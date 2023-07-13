//Declaring variables that control webpage

var initialEl = document.querySelector(".scoreboard_value-initial");
var scoreEl = document.querySelector(".scoreboard_value-score");
var timeEl = document.querySelector(".quiz_timer");
var startQuizBtn = document.querySelector(".startBtn");
var questionEl = document.querySelector(".quiz_question");
var button1El = document.querySelector(".button_answer_1");
var button2El = document.querySelector(".button_answer_2");
var button3El = document.querySelector(".button_answer_3");
var button4El = document.querySelector(".button_answer_4");
var saveScoreBtn = document.querySelector(".saveBtn");


//declaring state variables
var initials = "";
var score = 0;
var timer = null;
var timeLeft = 0;
var currentQuestion;

// declaring none changing variables
const question1 = "Is this a proper question?"
const gameDuration = 60;
let kStorageScore = "Module-4-quiz-score";
const quizQuestions = ["Commonly used data types do NOT include.", "The act of talking through code with an inanimate object is called?", "Conditions in statments like while, for, and if/else are contained in?", "Arrays in JavaScript can be used to store what?"];

// Identifying events

// Event: page load
function init(){
    console.log("Page loaded");
    
    //retrieve data from local storage
    var scores = JSON.parse(localStorage.getItem(kStorageScore));

    if (scores) {
        initials = scores.initials;
        score = scores.score;
    }
}

// Event: start button
function handleClickStart(){
    console.log("Quiz started");

    if(!timer){
    //start timer
        timeLeft = gameDuration;
        timer = setInterval(handleTimerCountdown, 1000);
        questionEl.textContent = quizQuestions[0];
    //show first question with answers

    //set time left

    //hide highscore and input boxes for initials and score
    }
}
startQuizBtn.addEventListener("click", handleClickStart);

// Event: timer countdown
function handleTimerCountdown(ev) {
    console.log("countdown called");
}
// Event: answer click
function handleAnswerPick(ev) {
    console.log("mouse clicked", ev.button)
}
button1El.addEventListener("click", handleAnswerPick);
button2El.addEventListener("click", handleAnswerPick);
button3El.addEventListener("click", handleAnswerPick);
button4El.addEventListener("click", handleAnswerPick);
// Event: save initials and score
function saveScores() {
    var scores = kStorageScore;
}

// Function to post saved initials and score
function postHighScore() {
    // update the high score
    initialEl.textContent = initials;
    scoreEl.textContent = score;
}

// Event: quiz ends;
function handleQuizEnd() {

}

// Start quiz 
init();