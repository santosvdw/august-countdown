let year = 2022;
let date = new Date();

if (date.getDate() >= 01 && date.getMonth() >= 7) {
    console.log('slayx');
    year += 1;
    console.log(year);
} else {
}

let countdownGoal = new Date(`Aug 1, ${year} 00:00:00`);
let yearsLeft = '';
let daysLeft = '';
let hoursLeft = '';
let minutesLeft = '';
let secondsLeft = '';

// let timeLeft = countdownGoal - date.getTime();

const body = document.querySelector('.app');
const timeEl = document.querySelector('.time_left');

let countDown = () => {
    date = new Date();
    timeLeft = countdownGoal - date;
    // console.log(timeLeft);
    // yearsLeft = countdownGoal.getFullYear() - date.getFullYear();
    // daysLeft = countdownGoal.getDay() - date.getDay() - 1;
    // hoursLeft = countdownGoal.getHours() - date.getHours() + 24;
    // minutesLeft = countdownGoal.getMinutes() - date.getMinutes() + 60;
    // secondsLeft = countdownGoal.getSeconds() - date.getSeconds() + 60;

    // yearsLeft = Math.floor(timeLeft / 365);
    daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // console.log(countdownGoal);
    // console.log(date);
    let totalTimeLeft = [yearsLeft, daysLeft, hoursLeft, minutesLeft, secondsLeft];
    // console.log(totalTimeLeft);

    let checkForSingleDigits = () => {
        for (let i = 0; i < 60; i++) {
            if (i < 10 && i == secondsLeft) {
                secondsLeft = `0${i}`;
            } else if (i < 10 && i == minutesLeft) {
                minutesLeft = `0${i}`;
            } else if (i < 10 && i == hoursLeft) {
                hoursLeft = `0${i}`;
            } else if (i < 10 && i == daysLeft) {
                daysLeft = `0${i}`;
            }
        }
    };
    // checkForSingleDigits(daysLeft);
    checkForSingleDigits();

    // console.log(secondsLeft);

    timeEl.innerHTML = daysLeft + ':' + hoursLeft + ':' + minutesLeft + ':' + secondsLeft;
    if (daysLeft == 0) {
        timeEl.innerHTML = hoursLeft + ':' + minutesLeft + ':' + secondsLeft;
    } else {
    }

    if (date == 'Sun Jul 31 2022 23:59:45 GMT+0200 (Midden-Europese zomertijd)') {
        playAugust();
    }
};

let countdownTimer = setInterval(countDown, 1000);

let playAugust = () => {
    window.location.href = 'https://open.spotify.com/track/3hUxzQpSfdDqwM3ZTFQY0K?si=39ed605c13b24484';
};

console.log(new Date());

const playBtn = document.querySelector('play');

playBtn.addEventListener('click', playAugust);
// let timeout = setTimeout(playAugust, 10000);
