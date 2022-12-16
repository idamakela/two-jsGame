let words = [
    "stake",
    "suite",
    "agile",
    "guest",
    "angel",
    "grave",
    "spare",
    "game",
    "score",
    "drown"
];

let answer = "";
let answerLetters = [];
let userInput = "";
let userGuessed = [];
const TEST_PATTERN = /^[a-z]{1}$/;
let userStatus = "";

let startGame = document.getElementById("startButton").addEventListener("click", gameFunction);

function gameFunction() {
    let answer = randomWord(words);
    displayGuesses();
    let remainingLetters = answer.length;
    let maxWrong = answer.length + 2;

    while (remainingLetters > 0) {
        userInput = prompt("\nEnter a letter.\n\nYou have " + maxWrong + " lives left\n\n" + answerLetters.join(" ") + "\n");

        if (userInput == null) {
            userStatus = "cancelled";
            break;
        }

        if (userInput.match(TEST_PATTERN)) {
            isThisArray(answerLetters);
            guessedBefore(userGuessed);

            if (answer.toLocaleLowerCase().includes(userInput)) {
                for (let j = 0; j < answer.length; j++) {

                    if (answer[j] === userInput) {
                        answerLetters[j] = userInput;
                    }
                }

                if (!userGuessed.includes(userInput)) {
                    remainingLetters--;
                }

            } else {
                if (!userGuessed.includes(userInput)) {
                    maxWrong--;
                }
            }

            userGuessed.push(userInput);

        } else {
            alert("Please enter only one lowercase letter");
            continue;
        }

        if (maxWrong === 0) {
            alert(
                "\nYou have lost the game\n\nThe answer was: " 
                + answer.toLocaleUpperCase()
                );
            userStatus = "lost";
            break; 
        }       
    }
    
    if (remainingLetters === 0) {
        alert(
            "\nCongratulations!\n\nYou have won the game!\n\nThe answer was: " 
            + answer.toLocaleUpperCase()
            );
        userStatus = "won";
    }

    alert("\nThank you for playing!");
    clearArray(userGuessed);
    console.log("The answer was " + answer.toLocaleUpperCase() + " and the user " + userStatus.toLocaleUpperCase() + " this round.");
}

function randomWord(targetArray) {
    return targetArray[Math.floor(Math.random() * targetArray.length)];
}

function displayGuesses() {
    for (let i = 0; i < answer.length; i++) {
        answerLetters[i] = "_";
    }
}

function isThisArray(targetArray) {
    if (Array.isArray(targetArray)) {
    } else {
        alert("Broken game");
    }
}

function guessedBefore(targetArray) {
    isThisArray(userGuessed);

    if (targetArray.includes(userInput)) {
        alert(
            "\nYou have already guessed the letter: " 
            + userInput.toLocaleUpperCase() 
            + "\n\nTry something else!\n\nOpen the console to see all your previous guesses."
            );
        console.log(userGuessed.join(" "));
    }
}

function clearArray(targetArray) {
    while (targetArray.length > 0) {
        targetArray.pop();
    }
}