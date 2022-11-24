let words = ["stake", "suite", "agile", "guest", "angel", "grave", "spare", "twist", "score", "drown"];


//start onclick function
document.getElementById("startButton").onclick = function() {
    start();
}

//loop for game keep on running
/*while(userStatus = false) {
    return gameLoop();
}*/

//start game function
function start() {
    alert("You have started the game") + gameLoop();
}


//game loop while false
function gameLoop() {
    let startGame = prompt("Enter a letter")
}



//random word function
function randomWord() {
    let gameArray = words;
    let selectedWord = gameArray[Math.floor(Math.random() * gameArray.length)]

    return selectedWord;
}


//iterate thourgh an array
function iterateArray(gameArray) {
    if(Array.isArray(gameArray)) {
        gameArray.forEach(function(value) {
            console.log(value);
        })
    }
}

//userinput function


//test function