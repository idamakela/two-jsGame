let words = [
    "stake", 
    "suite", 
    "agile", 
    "guest", 
    "angel", 
    "grave", 
    "spare", 
    "twist", 
    "score", 
    "drown"
];

let answer = "";
let answerLetters = [];
let userInput = "";
let maxWrong = 7;
let mistakes = 0;
const TEST_PATTERN = /^[a-z]{1}$/i;

document.getElementById("startButton").onclick = function() {
    randomWord();
    console.log(answer);
    displayGuesses();

    userInput = prompt("You have started the game!\n\nEnter a letter.\n" 
    + answerLetters.join(" ") + "\n"
    );
    
    if(userInput.match(TEST_PATTERN)) {
        testGuess(answer);
    } else {
        alert("try again");
    }
}

function randomWord() {
    answer = words[Math.floor(Math.random() * words.length)];
}

function doesItContain() {
    if(answer.toLocaleLowerCase().includes(userInput)) {
        alert("it does contain " + userInput);
    } else {
        alert("nope")
    }
}

function displayGuesses() {
    for (let i = 0; i < answer.length; i++) {
        answerLetters[i] = "_";
    }
}



function testGuess() {
    if(Array.isArray(answerLetters)) {
        for(i = 0; i < maxWrong; i++) { 
            answerLetters.forEach(doesItContain());
        }
    } else {
        alert("broken game");
    }
}






//where all the functions are connected???
function gameLoop() {
    /*let randomWord = randomWord();
    let userInput = prompt("Enter a letter");

    while (false) {

    }*/




}


//testing user input 
function userInputTest() {
    let userInput = prompt("Enter only one letter");
    let testPattern = /^[a-z]{1}$/i;

    let randomWord = randomWord();

    if(userInput.match(testPattern)) {
        //game loop for testing input to randomWord 
        
    } else {
        alert("Invalid input! Try again.");
        //run loop again
    }
}
