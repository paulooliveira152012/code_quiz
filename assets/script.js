var firstQuestion = "Commonly used data types DO NOT include";
var secondQuestion = "The condition in an if /else statement is enclose with _______.";
var thirdQuestion = "Arrays in JavaScript can be used to store _______.";
var fourthQuestion = "Sting values must be enclosed within _______ when being assigned to variables .";
var fifthQuestion = "A very useful tool used during development and debugging for printing content to the debugger is:";
var allDone = "All done!"

// create a variable getting the id of the button
var quizBtn = document.getElementById('startQuiz')
//create  variable refferencing to the title
var title = document.getElementById(title)

// add an event listener to the click of the button refferencing to function (questions)
quizBtn.addEventListener("click", questions);

//defining elements of the function
function questions() {
    // window.alert("hello")
    }

//create an oject to loop throguh containing the questions
var question = {
    firstQuestion: "Commonly used data types DO NOT include",
    secondQuestion: "The condition in an if /else statement is enclose with _______.",
    thirdQuestion: "Arrays in JavaScript can be used to store _______.",
    fourthQuestion: "Sting values must be enclosed within _______ when being assigned to variables .",
    fifthQuestion: "A very useful tool used during development and debugging for printing content to the debugger is:",
    allDone: "All done!"
}

//create a for loop to loop through the questions as the button is clicked


// create a variable getting the id of the button