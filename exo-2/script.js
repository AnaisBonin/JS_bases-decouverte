// you can write js here
console.log('exo-2');

// Exo 2.1
const myDate = new Date();

const weekDayMessage = 'Allez travailler';
const weekendMessage = `C'est le weeekeeeend !!`;

// Exo 2.2
const currentDay = myDate.getDay();
const isWeekDay = currentDay < 6;
console.log(isWeekDay ? weekDayMessage : weekendMessage)

// Exo 2.3

const currentHour = myDate.getHours();

if (isWeekDay) {
    if (currentDay == 5 && currentHour > 16) {
        console.log(weekendMessage);
    } else console.log(weekDayMessage);
} else {
    console.log(weekendMessage);
}

// Exo 2.4

if (isWeekDay) {
    if ((currentDay == 5 && currentHour > 16) || (currentDay == 1 && currentHour < 9)){
        console.log(weekendMessage);
    } else { console.log(weekDayMessage); }
} else {
    console.log(weekendMessage);
}

