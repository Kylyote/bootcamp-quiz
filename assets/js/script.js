//Declaring variables that control webpage

var initialEl = document.querySelector(".scoreboard_value-initial");
var scoreEl = document.querySelector(".scoreboard_value-score");
var timeEl = document.querySelector(".countDown");
var quizArea = document.querySelector(".quiz_area");
var quizTimer = document.querySelector(".quiz_timer");
var startQuizBtn = document.querySelector(".startBtn");
var questionEl = document.querySelector(".quiz_question");
var answerEl = document.querySelector(".quiz_answer");
// Can this be made into an array to shorten the code?
var button1El = document.querySelector(".button_answer_1");
var button2El = document.querySelector(".button_answer_2");
var button3El = document.querySelector(".button_answer_3");
var button4El = document.querySelector(".button_answer_4");
var saveArea = document.querySelector(".save");
var saveScoreBtn = document.querySelector(".saveBtn");
var initialText = document.querySelector("#initialsText");
var scoreText = document.querySelector("#scoreText");
var localInitial = localStorage.getItem("Initial");
var localScore = localStorage.getItem("Score");

//declaring state variables
var initials = "";
var score = 0;
var timer = null;
var timeLeft = 0;
var currentQuestion=0;

// declaring none changing variables
const question1 = "Is this a proper question?"
const gameDuration = 60;
let kStorageScore = "Module-4-quiz-score";
// Questions
const quizQuestions = ["Commonly used data types do NOT include.", "The act of talking through code with an inanimate object is called?", "Conditions in statments like while, for, and if/else are contained in?", "Arrays in JavaScript can be used to store what?"];
// Answers
const quizAnswers = [["boolean", "numbers", "alerts", "strings"], ["Talk Through", "Rubber Duck Debugging", "Wrong Answer 3", "Wrong Answer 4"], ["Wrong Answer 1", "Wrong Answer 2", "Wrong Answer 3", "Paranthesis"], ["Other Arrays", "Objects", "Only Single Variables", "All of the Above"]];
// Answer key
const answerKey = [3, 2, 4, 4];
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
        timeLeft = timeLeft - timer;
        while (timer > 0){
            handleTimerCountdown();
        }
        // show first question with answers
        changeQuestionAnswer();

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
function handleTimerCountdown(ev) {
    console.log("countdown called");
    timer--;
    timeEl.textContent = timeLeft;
    if (timeLeft === 0) {
        handleQuizEnd(false);
    }
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
saveScoreBtn.addEventListener("click", function(event){
    if (localInitial == null){
        initialText = initials;
    }
    localStorage.setItem("Initial", initialText);
    localStorage.setItem("Score", scoreText);
    
});
// Function to change answer and question
function changeQuestionAnswer() {
    var x = currentQuestion;
    questionEl.textContent = quizQuestions[x];
    button1El.textContent = quizAnswers[x][0];
    button2El.textContent = quizAnswers[x][1];
    button3El.textContent = quizAnswers[x][2];
    button4El.textContent = quizAnswers[x][3];
    currentQuestion++;
}

// Hide and show elements
function hideElement(el){
    el.classList.add("hide");
}
function showElement(el){
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
    if (didPass){
        console.log("the game ended true");
        // show save location with current time it took to finish the questions
        // hide timer and unneeded elements
    } else {
        console.log("game ended in failure");
        // 
    }
}

// Start quiz 
init();