console.log('Happy developing ✨')

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
let currentDay = 8;
let firstDayName = 4;
let currentMonth = 5;
let currentYear = 2025;


function fillInTheDays() {
    for (let i = 1; i <= monthLengthChecker(currentMonth); i++) {



    }

}

function monthLengthChecker(month) {
    if (month === 2) {
        return 28;
    }
    if (month === 1|| month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        return 31;
    }
    if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
    }



}


