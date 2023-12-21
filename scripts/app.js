let editedPlayer = 0;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
]


const playerConfigOverlay = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutput = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');

const editPlayer1Btn = document.getElementById('edit-player-1-btn');
const editPlayer2Btn = document.getElementById('edit-player-2-btn');
const cancelConfigBtn = document.getElementById('cancel-config-btn');
const startNewGameBtn = document.getElementById('start-game-btn');



editPlayer1Btn.addEventListener('click', openPlayerConfig) 
editPlayer2Btn.addEventListener('click', openPlayerConfig) 

cancelConfigBtn.addEventListener('click', closePlayerConfig)
backdropElement.addEventListener('click', closePlayerConfig)

formElement.addEventListener('submit', savePlayerConfig)

startNewGameBtn.addEventListener('click', startNewGame)
