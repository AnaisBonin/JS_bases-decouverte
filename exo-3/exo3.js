// 4 steps :
// - Récupérer le choix de l'utilisateur

// - Récupérer le choix du programme

// - Comparer les choix

// - Annoncer le gagnant

console.log('exo-3');
const gameOptions = ['rock', 'paper', 'scissors'];

let playerInput = prompt('Your choice ( rock, paper, scissors)');

const getPlayerChoice = (playerInput) => {
  playerInput = playerInput.toLowerCase();

  const isInputValid =
    gameOptions.find((element) => element == playerInput) != undefined;

  return isInputValid
    ? playerInput
    : console.log(' nope! error... refresh page!');
};

const playerChoice = getPlayerChoice(playerInput);

const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3);
  return gameOptions[choice];
};

const computerChoice = getComputerChoice();

const findWinner = (playerChoice, computerChoice) => {
  const won = 'Won';
  const lost = 'Lost';

  if (playerChoice === computerChoice) {
    return 'tied';
  } else if (playerChoice === 'rock') {
    return computerChoice === 'scissors' ? won : lost;
  } else if (playerChoice === 'paper') {
    return computerChoice === 'scissors' ? won : lost;
  } else if (playerChoice === 'scissors') {
    return computerChoice === 'paper' ? won : lost;
  }
};
