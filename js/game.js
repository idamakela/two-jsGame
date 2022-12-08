//ERROR: can win by entering wrong letters and some right ones (??)
//ERROR: guessed letters array saves letters from previous game
//ERROR: when guessing right letter after another, you get winning message after five inputs
//ERROR: max wrong should not be affected when entering wrong guess

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
const TEST_PATTERN = /^[a-z]{1}$/;

let startGame = document.getElementById("startButton").addEventListener("click", gameFunction);

function gameFunction() {
    randomWord();
    displayGuesses();
    let remainingLetters = answer.length;
    let maxWrong = answer.length + 2;
    console.log(answer);

    while (remainingLetters > 0) {
        userInput = prompt("\nEnter a letter.\n\nYou have " + maxWrong + " lives left\n\n" + answerLetters.join(" ") + "\n");

        if(userInput == null) {
            break;
        }

        if(userInput.match(TEST_PATTERN)) {
            isThisArray(answerLetters);
            guessedBefore(userGuessed);
            userGuessed.push(userInput);

            if(answer.toLocaleLowerCase().includes(userInput)) {
                for( let j = 0; j < answer.length; j++) {
                    if (answer[j] === userInput) {
                        answerLetters[j] = userInput;
                        remainingLetters--;
                    }
                }
            } else {
                maxWrong--;
            } 

        } else {
            alert("Please enter only one lower case letter")
            continue;
        }

        if(maxWrong === 0) {
            alert("\nYou have lost the game\n\nThe answer was: " + answer);
            break; 
        }       
    }
    
    if(remainingLetters === 0) {
        alert("\nCongratulations!\n\nYou have won the game!\n\nThe answer was: " + answer);
    }

    alert("\nThank you for playing!")
}


function randomWord() {
    answer = words[Math.floor(Math.random() * words.length)];
}

function displayGuesses() {
    for (let i = 0; i < answer.length; i++) {
        answerLetters[i] = "_";
    }
}

function isThisArray(targetArray) {
    if(Array.isArray(targetArray)) {
    } else {
        alert("Broken game");
    }
}

function guessedBefore(targetedArray) {
    isThisArray(userGuessed);

    if(targetedArray.includes(userInput)) {
        alert("\nYou have already guessed the letter: " + userInput.toLocaleUpperCase() + "\n\nOpen the console to see all your previous guesses");
        console.log(userGuessed.join(" "));
    }
}