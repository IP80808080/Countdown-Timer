const newYear = "1 Jan 2024";
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("Hours");
const minutesEl = document.getElementById("Minutes");
const secondsEl = document.getElementById("Seconds");


function countdown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalseconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) %24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) %60;

    console.log(days, hours, minutes, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

    function formatTime() {
        return time<10 ? (`0${time}`) : time;
    }
}

countdown();

setInterval(countdown, 1000)