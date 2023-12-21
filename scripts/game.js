function resetGame() {
    
    for (let i = 0; i < 3; i++) {
        gameData[i] = [0, 0, 0];
    }
      
    gameFieldElements.forEach(field => {
        field.innerText = '';
        field.classList.remove('disabled');
    });
    
    gameOverElement.style.display = 'none';
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    activePlayerName.textContent = players[activePlayer].name;

}


function startNewGame() {
    
    if (players[0].name === '' || players[1].name === '') {
        alert('Please enter both player names!');
        return;
    }
    resetGame()
    gameAreaElement.style.display = 'block';
    activePlayerName.textContent = players[activePlayer].name;
}


function addSymbol(event) {
    if (gameIsOver) {
        return
    }
    const row = event.target.dataset.row - 1;
    const col = event.target.dataset.col - 1;
    
    if (gameData[row][col] > 0) {
        alert("Please select an empty field!")
        return
    }
    
    gameData[row][col] = activePlayer + 1;
    event.target.innerText = players[activePlayer].symbol;
    event.target.classList.add('disabled');
    const winnerId = checkForGameOver();
    if (winnerId !== 0) {
        endGame(winnerId);
    }
    currentRound++;
    activePlayer = activePlayer === 0 ? 1 : 0;
    activePlayerName.textContent = players[activePlayer].name;
    
}

function checkForGameOver() {

    // Checking rows for a winner
    for (let i = 0; i < 3; i++) {
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]
        ) {
            return gameData[i][0]
        }
        
    }

    // Checking columns for a winner
    for (let i = 0; i < 3; i++) {
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i]
        ) {
            return gameData[0][i]
        }
        
    }

    // Checking top left diagonal for a winner
    if (
        gameData[0][0] > 0 &&
        gameData[0][0] == gameData[1][1] && 
        gameData[0][0] == gameData[2][2]
    ) {
        return gameData[0][0]
    }

    // Checking top right diagonal for a winner
    if (
        gameData[0][2] > 0 &&
        gameData[0][2] == gameData[1][1] && 
        gameData[0][2] == gameData[2][0]
    ) {
        return gameData[0][2]
    }

    if (currentRound === 9) {
        return -1;
    }
        
    return 0
}

function endGame(winnerId) {
    gameIsOver = true;
    gameOverElement.style.display = 'block';
    if (winnerId > 0) {
        const winnerName = players[winnerId - 1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
    } else {
        gameOverElement.firstElementChild.textContent = "It's a draw!";
    }
}