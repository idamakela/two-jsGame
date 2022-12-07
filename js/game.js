//game elements
/*
1. DONE array of words
2. DONE random word "function"
3. DONE emty array for the generated word (aka the answer for the game)
4. DONE loop for word length, to show the user the guessed letters and their index place
5. DONE empty array for user guessed letters
6. DONE variable + logic for how many tries the user has left
7. DONE variable + logic for remaining letters 
8. start the game
9. while loop for when there still are guesses left.
    a. display tries left
    b. prompt for user guess input
        i. test weather it has already been inputted
    c. test weather user only inputs one letter
    d. test weather answer does or does not inclued user guess
10. won message + logic
11. lost message + logic

*/


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
let userGuessed = [];
const TEST_PATTERN = /^[a-z]{1}$/i;

let startGame = document.getElementById("startButton").addEventListener("click", gameFunction);

function gameFunction() {
    randomWord();
    displayGuesses();
    remainingLetters = answer.length;
    maxWrong = answer.length + 2;
    console.log(answer);

    userInput = prompt("\nYou have started the game!\n\nEnter a letter.\n" + answerLetters.join(" ") + "\n");
    
    while (remainingLetters > 0) {
        if (userInput.match(TEST_PATTERN)) {
            testGuess(answer);
        } else {
            alert("\nEnter only one letter");
            break;
            //this does not work 
        }

    }

    //last (win?) message
}

function randomWord() {
    answer = words[Math.floor(Math.random() * words.length)];
}

function displayGuesses() {
    for (let i = 0; i < answer.length; i++) {
        answerLetters[i] = "_";
    }
}


//error on remaining letters if correct inout
//error att maxWrong, display incorrects 
function testGuess() {
    if (Array.isArray(answerLetters)) {
        answerLetters.forEach(function() {
            if (answer.toLocaleLowerCase().includes(userInput)) {
                for( let j = 0; j < answer.length; j++) {
                    if (answer[j] === userInput) {
                        answerLetters[j] = userInput;
                        remainingLetters--;
                    }
                }
                userGuessed.push(userInput);
                userInput = prompt("\nEnter another letter.\n\nYou have " + maxWrong + " lives left\n\n" + answerLetters.join(" ") + "\n");
            } else {
                userGuessed.push(userInput);
                maxWrong--;
                userInput = prompt("\nEnter another letter.\n\nYou have " + maxWrong + " lives left\n\n"+ answerLetters.join(" ") + "\n");
            }
        });
    } else {
        alert("Broken game");
    }
}


//loop with function for userinput after initial one + testing for the input to the answer
//ERROR when this is run in the foreach above 
function doesItContain() {
    if (answer.toLocaleLowerCase().includes(userInput)) {
        answerLetters.push(userInput);
        userGuessed.push(userInput);
        remainingLetters--;
        userInput = prompt("\nEnter another letter.\nYou have " + maxWrong + " lives left\n" + answerLetters.join(" ") + "\n");
    } else {
        userGuessed.push(userInput);
        maxWrong--;
        userInput = prompt("\nEnter another letter.\nYou have " + maxWrong + " lives left\n"+ answerLetters.join(" ") + "\n");
    }
}

function guessesLeft() {
    if (userGuessed >= maxWrong) {
        alert("You have lost the game")
    } else {
        
    }
}