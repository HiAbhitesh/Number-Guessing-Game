document.addEventListener("DOMContentLoaded", () => {
    const maxNumberInput = document.getElementById("maxNumber");
    const startGameButton = document.getElementById("startGame");
    const gameSetup = document.getElementById("game-setup");
    const gamePlay = document.getElementById("game-play");
    const guessInput = document.getElementById("guess");
    const submitGuessButton = document.getElementById("submitGuess");
    const quitGameButton = document.getElementById("quitGame");
    const resultDiv = document.getElementById("result");
    const hint = document.getElementById("hint");
    const finalResponse = document.getElementById("finalResponse");
    const restartGameButton = document.getElementById("restartGame");

    let random;
    let max;

    function resetGame() {
        gameSetup.classList.remove("hidden");
        gamePlay.classList.add("hidden");
        resultDiv.classList.add("hidden");
        hint.textContent = "";
        guessInput.value = "";
        maxNumberInput.value = "";
    }

    startGameButton.addEventListener("click", () => {
        max = parseInt(maxNumberInput.value);
        if (isNaN(max) || max <= 0) {
            hint.textContent = "Please enter a valid max number!";
            hint.className = "response error";
            return;
        }
        random = Math.floor(Math.random() * max) + 1;
        gameSetup.classList.add("hidden");
        gamePlay.classList.remove("hidden");
        hint.textContent = `Game Started! Guess the number between 1 and ${max}.`;
        hint.className = "response";
    });

    submitGuessButton.addEventListener("click", () => {
        const guess = parseInt(guessInput.value);
        if (isNaN(guess)) {
            hint.textContent = "Please enter a valid number!";
            hint.className = "response error";
            return;
        }
        if (guess === random) {
            finalResponse.textContent = `🎉 You guessed it right! The number was ${random}. Congrats!`;
            finalResponse.className = "response success";
            gamePlay.classList.add("hidden");
            resultDiv.classList.remove("hidden");
        } else if (guess < random) {
            hint.textContent = "Hint: Your guess is too small. Try again!";
            hint.className = "response warning";
        } else {
            hint.textContent = "Hint: Your guess is too large. Try again!";
            hint.className = "response warning";
        }
    });

    quitGameButton.addEventListener("click", () => {
        finalResponse.textContent = "👋 You quit the game. Better luck next time!";
        finalResponse.className = "response error";
        gamePlay.classList.add("hidden");
        resultDiv.classList.remove("hidden");
    });

    restartGameButton.addEventListener("click", resetGame);
});
