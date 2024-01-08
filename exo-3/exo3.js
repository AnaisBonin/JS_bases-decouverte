// 4 steps :
// - Récupérer le choix de l'utilisateur

// - Récupérer le choix du programme

// - Comparer les choix

// - Annoncer le gagnant

console.log('exo-3');

let playerInput = prompt('Your choice ( rock, paper, scissors)');

const getPlayerChoice = (playerInput) => {
  playerInput = playerInput.toLowerCase();
  const gameOptions = ['rock', 'paper', 'scissors'];

  const isInputValid =
    gameOptions.find((element) => element == playerInput) != undefined;

  isInputValid ? console.log('valid') : console.log(' nope!');
};

getPlayerChoice(playerInput);
