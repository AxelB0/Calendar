console.log('Happy developing ✨')

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
let currentDay = 8;
let firstDayName = 6;
let currentMonth = 4;
let currentYear = 2025;


function fillInTheDays() {
    for (let i = 0; i <= monthLengthChecker(currentMonth)-1;) {
        let dayName = "day"

        dayName += firstDayName+1+i;
        console.log(dayName);
        document.getElementById(dayName).textContent = i+++1 ;

    }

}

function monthLengthChecker(month) {
    if (month === 1) {
        return 28;
    }
    if ([0, 2, 4, 6, 7, 9, 11].includes(month)) {
        return 31;
    } else {
        return 30;
    }


}

fillInTheDays();

