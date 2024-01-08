// you can write js here
console.log('hello from file');

const kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");

const celsius = kelvins - 273; // la valeur de la temperature en celsius est égale à la température en Kelvins - 273

let fahrenheits = celsius * (9 / 5) + 32; // la valeur de la temperature en fahrenheits est égale à la température en celsius multipliée par 9/5 auquel on ajoute 32

fahrenheits = Math.floor(fahrenheits); // j'applique la méthode floor() à ma valeur fahreinheits pour passer potentiellement d'un float à un integer

console.log('k= ', kelvins, ' c = ', celsius, ' f= ', fahrenheits)