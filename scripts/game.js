function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please enter both player names!');
        return;
    }
    gameAreaElement.style.display = 'block';
    activePlayerName.textContent = players[activePlayer].name;
}

function addSymbol(event) {
    event.target.innerText = players[activePlayer].symbol;
    event.target.classList.add('disabled');
    // event.target.removeEventListener('click', addSymbol);
    activePlayer = activePlayer === 0 ? 1 : 0;
    activePlayerName.textContent = players[activePlayer].name;
    
}