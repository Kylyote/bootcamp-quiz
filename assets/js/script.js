//Declaring variables that control webpage

var passEl = document.querySelector("scoreboard_value-pass");
var missEl = document.querySelector("scoreboard_value-miss");
var timeEl = document.querySelector("quiz_timer");
var questionEl = document.querySelector("quiz_question");
var button1El = document.querySelector("button_answer_1");
var button2El = document.querySelector("button_answer_2");
var button3El = document.querySelector("button_answer_3");
var button4El = document.querySelector("button_answer_4");

//declaring state variables
var pass = 0;
var miss = 0;
var timer = null;
var timeLeft = 0;
var currentQuestion;

// declaring none changing variables
const question1 = "Is this a proper question?"

