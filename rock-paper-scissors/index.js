const buttonsEl = document.querySelectorAll('button');
const resultEl = document.getElementById('result');
const playerScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

function comptuerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoices = Math.floor(Math.random() * choices.length);
  return choices[randomChoices];
}

function playGround(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Tie!'
  }
  else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return 'You win! ' + playerSelection + ' beats ' + computerSelection;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
  }
}
buttonsEl.forEach((button) => {
  button.addEventListener('click', () => {
    const result = playGround(button.id, comptuerPlay());
    resultEl.textContent = result;
  })
})