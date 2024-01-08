// you can write js here
console.log('exo-2');
const isTesting = true;

// Exo 2.1
const myDate = new Date();

const weekDayMessage = 'Allez travailler';
const weekendMessage = `C'est le weeekeeeend !!`;


// Exo 2.2
const currentDay = myDate.getDay();
const isWeekDay = currentDay < 6;
console.log(isWeekDay ? weekDayMessage : weekendMessage)
