const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')

}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')

}


const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#scoreSelect');
let winningScore = 2;
let isGameOver = false;

//If a game is not over(score doesn't equal too wiining score), then a game goes one and each score is added to our span, until 
// score is equal to a winning one, then game is ended and the chunk of code is not working

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-primary');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    } player.display.textContent = player.score
}

p1.button.addEventListener('click', function () {
    updateScore(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScore(p2, p1)
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();

})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-primary', 'has-text-danger');
        p.button.disabled = false;
    }

}



