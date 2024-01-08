// you can write js here

console.log('exo-4');

var secretMessage = [
  'Learning',
  "isn't",
  'about',
  'what',
  'you',
  'get',
  'easily',
  'the',
  'first',
  'time,',
  "it's",
  'about',
  'what',
  'you',
  'can',
  'figure',
  'out.',
  '-2015,',
  'Chris',
  'Pine,',
  'Learn',
  'JavaScript',
];

//1
secretMessage.pop();

//2
secretMessage.push('to');
secretMessage.push('program');

//3
const easilyPosition = secretMessage.indexOf('easily');
secretMessage[easilyPosition] = 'right';

//4
secretMessage.shift();

//5
secretMessage.unshift('Programming');

//6
const getPosition = secretMessage.indexOf('get');
secretMessage.splice(getPosition, 4);
secretMessage[getPosition] = 'know';

//7
const finalMessage = secretMessage.join(' ');
console.log(finalMessage);
