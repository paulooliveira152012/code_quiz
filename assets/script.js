//start the game with the start button -- select it by creating a variable
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var placeHolder = document.getElementById('placeHolder')
var score = 0
var userInput = document.getElementById('input')
var submitBtn = document.getElementById('submitBtn')
var endingMessage = document.getElementById('endingMessage')
var highScoreContainer = document.querySelector('.highScore')
var mainContainer = document.querySelector('.mainContainer')
// this variable will go into local storage, if it exists it will return the value (array), 
var highScoreArray = JSON.parse(localStorage.getItem('highScores')) || []
var checkScores = document.getElementById('checkScores')
var scoreBoard = document.getElementById('scoreBoard')
var content = document.getElementById('content')




// calling functions seeScore
checkScores.addEventListener('click', seeScore)

// function seeScore to display scores in the div with id listHighScores
function seeScore() {

}


//create variable to randomnize the questions
let shuffledQuestions, currentQuestionIndex

// (1) add event listener to the start button AND call function startGame
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

/*  (2) Create the first function where we start the game and where in it we will:
    - console log the word "started"
    - add the hide classList to the start button
    - set shuffledQuestions equal to the shuffled array
    - set the count for the shuffled questions to start from the very first question (0 in the array)
    - remove the 'hide' classList from the questionContainerElement
    - call the second function, setNextQuestion
*/
function startGame() {
    //hide start button after it has been clicked 
    startButton.classList.add('hide')
    //grabbing the variable I created at the top, setting it equal to the questions array (which is at the bottom), and creating the shuffled random property.
    shuffledQuestions = questions.sort(() => Math.random() - .5) 
    //Starting from the first question in the array
    currentQuestionIndex = 0
    //removing the classlist hide 
    questionContainerElement.classList.remove('hide')
    //call next function wichi will bring next questions
    setNextQuestion()
    startTimer()
}

/* (3) Create function for setting the next question -- what happens when the next button is clicked 
    - create another function to show question which is set in the array inside the setnextQuestion function
*/

function setNextQuestion() {
    
    resetState() 
    // create function that will pick the random question from the array in the state of the shuffleQuestion and currentQuestion previously definded. 
    showQuestion(shuffledQuestions[currentQuestionIndex]) 
}

/* (4) Create THE function that is being called in the previous function that will show next question
    - create a function parameter to reffer to the question Object bellow
    - refer to the question-container being defined as "questionElement" up top and create inner text refferenced to the question
    (...)
    - Create a loop to populate different answers
*/

// (5) creating the showQuestionFunction refferencing to the QUESTION parameter in the object at the bottom of the page
function showQuestion(question){  
    
    questionElement.innerText = question.question
    //creating loop to populate asnwers
    question.answers.forEach(answer => {
        //create a button for each answer
        const button = document.createElement('button')
        // set the inner thext of the buttons to be equal to the text in the answer.text at the bottom
        button.innerText = answer.text
        // create a class to add a button through classlist
        button.classList.add('btn')
        // check if the answer is correct
        if (answer.correct) {
            // styling button if answer is correct
            
            button.dataset.correct = answer.correct
    
        }
        //set an event listener to this button to the selected answer button and call function in step (7)
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

/* (6)function to reset state of body aftr selectiong new question 
    - hide the next button
*/

function resetState() {
    question.innerText = "";
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}


/* (7) function when an asnwer is selected
    - get which button we selected
    - check if it is correct
    - call function 8
*/
function selectAnswer(e) {
    // identifying which button got selected
    e.preventDefault()
    const selectedButton = e.target
    // check if it is correct
    var correctt = selectedButton.dataset.correct
    
    setStatusClass(document.body, correctt)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    //check if we are not in the next question already
     if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
        
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
        end()
        clearInterval(startCountdown)
    }
    if (correctt) {
        score += 1
        console.log(score)
    }
    
    // resetState() 

    // nextButton.classList.remove('hide')

   
}

/* (8) Creating function setStatusClass which we created in the previous step
 */
function setStatusClass(element, correct) {
    
    clearStatusClass(element)
    
    if (correct) {
        element.classList.add('correct')
        // score += 1
        // console.log(score)
    } else {
        element.classList.add('wrong')
    }
}



/* (9) Create function clearStatusClass, which was called in the previous function
 */

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

var startCountdown
/* -timer------------------------------------------------------------------------------------- */
function startTimer() {
    //creating a variable to equal the time of the quiz
var counter = 10000
//create a function
var countdown = function() {
//counter decrement
counter--;
if(counter === 0) {
    window.alert("Time's up");
//stop countdown
clearInterval(startCountdown)
};
//
placeHolder.textContent = counter
};

startCountdown = setInterval (countdown, 1000)

}
/* ------------------------------------------------------------------------------------------- */






const questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            {text: '4', correct: true}, 
            {text: '22', correct: false}
        ]
    },

    {
         question: 'Is web development fun?',
        answers: [
            {text: 'Kinda', correct: false}, 
            {text: 'YES!!!', correct: true},
            {text: 'Um no', correct: false},
            {text: 'IDK', correct: false}
        ]
    },

    {
        question: 'What is 4 * 2?',
        answers: [
            {text: '6', correct: false}, 
            {text: '8', correct: true}
        ]
    }
]




/* 
1 - think about the entire functionality to create as many functions is necessary (this case, 3)
2 - create variable reffering to the first html element that will be clicked on next step.
3 - add an event listener to this variable we created, in this case, a click, and refer to next step, the function.
 
    start working on the first function, which will be executed when the click hapens:
4 - refer to the button variable, (step 2), and ADD a classlist of 'hide', this will hide the button once cicked.
5 - create another variable reffering to the question section, id question to link to the funciton
6 - refer to the question variable (step 6), and remove the classList 'hide' in the same function.
    THE FIRST THING OUR GAME SHOUD DO IS SET THE NEXT QUESTION 
7 - call the second function at the end of the first one
8 - create an ARRAY referencing to the questions which will be shown
9 - create an object in the array referencing to the first question (quesion:)
10 - create an array for the first question which will contain the answers.
11 - write answers, SEPARATED BY COMMAS, being that one of them will result to true, and the other ones to false.
12 - randomnize questions by creating two new variables.
Why is the appended child not showing for the answer buttons' element ❓
24 minutes
*/

//create variables

highScoreContainer.style.display = "none"


function end() {
    highScoreContainer.style.display = 'block';
    mainContainer.style.display = 'none';
}


/* ------------------------------------------------------------------------------------------- */    

submitBtn.addEventListener('click', function(){
        console.log(userInput.value)

        endingMessage.textContent= "Congratulations " + userInput.value + " you scored " +  score
        //string that will be pushed to an array
        var userScore = userInput.value + " " + score
        //this will push to the array
        highScoreArray.push(userScore)
        localStorage.setItem("highScores", JSON.stringify(highScoreArray))

        addButton()
    });
/* ------------------------------------------------------------------------------------------- */
function addButton() {
    const node = document.createElement("li");
    const textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}


/* ------------------------------------------------------------------------------------------- */
/* 
Creating a function to save and display scores 

1 - Use variable score concatenated with the value inside the text input to display user's name and score at the end of the quiz
2 - use score variable value  and the value added in the input to save this variable to local storage.
3 - Add this variable to the scoreBoard
4 - display scoreBoard when "view high scores" link is clicked

1 --> in the end function add step number one
*/


