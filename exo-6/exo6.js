// Cours 8 de Codecademy
console.log('exo-6');

var joeInfo = {
  name: "Joe's house",
  rooms: 5,
  garage: false,
  bathrooms: 1 + 2,
  cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

///// 6.1

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length);
// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information.

joeInfo.garage = true;
console.log(joeInfo.garage);

///// 6.2
let team = {};

///// 6.3
team = { players: [], games: [] };

///// 6.4
team.players = [
  {
    firstName: 'Elin',
    lastName: 'Ranmo',
    age: 32,
  },
  {
    firstName: 'Jenna',
    lastName: 'Lienhard',
    age: 32,
  },
  {
    firstName: 'Marta',
    lastName: 'Drab',
    age: 27,
  },
  {
    firstName: 'Albert',
    lastName: 'Einstein',
    age: 132,
  },
];

///// 6.5

team.games = [
  {
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27,
  },
  {
    opponent: 'Alibaba',
    teamPoints: 24,
    opponentPoints: 42,
  },
];

///// 6.6

const addPlayer = (firstName, lastName, age) => {
  team.players.push({
    firstName,
    lastName,
    age,
  });
};

///// 6.7
console.log(team.players);

addPlayer('Anais', 'Bonin', 12);

console.log(team.players);

////// 6.8
const addGame = (opponent, teamPoints, opponentPoints) => {
  team.games.push({
    opponent,
    teamPoints,
    opponentPoints,
  });
};

console.log(team.games);
addGame('LA', 45, 78);
console.log(team.games);

///// 6.9
addGame('Mars', 8, 4);
addGame('Paris', 17, 93);
addGame('Lyon', 76, 52);
addGame('Marseille', 40, 3);

///// 6.10

const getTotalPoint = (points) => {
  let totalPoint = 0;
  team.games.map((game) => (totalPoint = totalPoint + game[points]));
  return totalPoint;
};

const teamTotal = getTotalPoint('teamPoints');
const opponentTotal = getTotalPoint('opponentPoints');

console.log(teamTotal);
console.log(opponentTotal);

///// 6.11

const numberOfGames = team.games.length;

const getAveragePoints = (total, quantity) => total / quantity;

const opponentAverage = Math.floor(
  getAveragePoints(opponentTotal, numberOfGames)
);

///// 6.12

const findOldestPlayer = (team) => {
  const teamAge = [];
  team.players.map(({ age }) => teamAge.push(age));

  const oldestAge = Math.max(...teamAge);
  const oldestPlayer = team.players.find((player) => player.age === oldestAge);

  return oldestPlayer;
};

console.log(findOldestPlayer(team));

////// 6.13
