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

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length);
// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms);

// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information.

joeInfo.garage = true;
console.log(joeInfo.garage);
