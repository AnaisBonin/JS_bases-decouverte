// 4 steps :
// - Récupérer le choix de l'utilisateur

// - Récupérer le choix du programme

// - Comparer les choix

// - Annoncer le gagnant

console.log('exo-3');
const gameOptions = ['rock', 'paper', 'scissors', 'bomb'];

const getPlayerChoice = () => {
  let playerInput = prompt('Your choice ( rock, paper, scissors)');
  playerInput = playerInput.toLowerCase();

  const isInputValid =
    gameOptions.find((element) => element == playerInput) != undefined;

  return isInputValid
    ? playerInput
    : console.log(' nope! error... refresh page!');
};

const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3);
  return gameOptions[choice];
};

const computerChoice = getComputerChoice();

const findWinner = (playerChoice, computerChoice) => {
  const won = 'You won!!';
  const lost = 'You lost....';

  if (playerChoice === 'bomb') {
    return won;
  } else if (playerChoice === computerChoice) {
    return 'tied';
  } else if (playerChoice === 'rock') {
    return computerChoice === 'scissors' ? won : lost;
  } else if (playerChoice === 'paper') {
    return computerChoice === 'scissors' ? won : lost;
  } else if (playerChoice === 'scissors') {
    return computerChoice === 'paper' ? won : lost;
  }
};

const playGame = () => {
  const uChoice = getPlayerChoice();
  console.log(`You chose: ${uChoice}`);
  const computerChoice = getComputerChoice();
  console.log(`Your opponent chose: ${computerChoice}`);
  console.log(findWinner(uChoice, computerChoice));
};

playGame();
