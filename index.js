console.log('Happy developing ✨')

const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
let firstDayName = 3;
let currentMonth = 4;
let currentYear = 2025;
const buttonBack = document.getElementById("btn__back");
const buttonNext = document.getElementById("btn__forward");


function fillInTheDays() {
    document.getElementById("month").textContent = months[currentMonth];
    for (let i = 0; i <= monthLengthChecker(currentMonth) - 1;) {
        let dayName = "day"

        dayName += firstDayName + 1 + i;
        document.getElementById(dayName).textContent = i++ + 1;

    }

}

function generateCalendar() {
    const calendar = document.querySelector('.calendar');
    for (let i = 1; i <= 42; i++) {
        const day = document.createElement('div');
        day.className = 'day';
        day.id = `day${i}`;
        calendar.appendChild(day);
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

function clearNumbers() {
    for (const i of document.getElementsByClassName("day")) {
        i.textContent = "";
    }

}

buttonBack.addEventListener("click", () => {

    if (currentMonth === 0) {
        currentMonth = 11;
    } else {
        currentMonth--;
    }
    firstDayName = (7 + ((firstDayName - monthLengthChecker(currentMonth)) % -7));
    if (firstDayName === 7) {
        firstDayName = 0;
    }
    console.log(firstDayName);
    clearNumbers();
    fillInTheDays();

})

buttonNext.addEventListener("click", () => {
    firstDayName = (firstDayName + monthLengthChecker(currentMonth)) % 7;
    if (currentMonth === 11) {
        currentMonth = 0;
    } else {
        currentMonth++;
    }
    clearNumbers();
    fillInTheDays();
})


generateCalendar();
fillInTheDays();

