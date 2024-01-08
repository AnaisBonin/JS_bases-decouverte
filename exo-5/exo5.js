// you can write js here

console.log('exo-5');

//1
let input = 'qaokjuiycnjrwo';

input = prompt('What would you like to say in whale language? ');

//2
const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

//3
const resultArrayy = [];

//4, 5, 7
for (let i = 0; i < input.length; i++) {
  console.log(input[i]);
  if (vowels.indexOf(input[i]) >= 0) resultArrayy.push(input[i]);
}

const isArrayOfVowels = (array) => {
  let result = true;

  for (let i = 0; i < array.length; i++) {
    const char = array[i];
    const vowel = vowels.find((e) => e == char);

    if (!vowel) {
      result = false;
    }
  }

  return result;
};

console.log(isArrayOfVowels(resultArrayy));
// 6 OR...
// for (let i = 0; i < input.length; i++) {
//   const character = input[i];
//   console.log(character);

//   const index = vowels.find((letter) => letter === character);

//   if (index) resultArrayy.push(input[i]);
// }

//8
console.log(resultArrayy);
const whaleWord = resultArrayy.join('').toUpperCase();

console.log(whaleWord);
