function startNewGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please enter both player names!');
        return;
    }
    gameAreaElement.style.display = 'block';
}