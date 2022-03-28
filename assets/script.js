// create a variable getting the id of the button
var quizBtn = document.getElementById('startQuiz')

// add an event listener to the click of the button refferencing to function
quizBtn.addEventListener("Click", questions);

//defining elements of the function
function questions() {
    window.alert("hello");
}

