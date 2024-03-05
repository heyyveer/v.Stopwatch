const startButton = document.querySelector(".start");
const startTimer = document.querySelector(".timer");
const resetButton = document.querySelector(".reset");
const splitButton = document.querySelector(".split");
const splitContainer = document.querySelector(".split_container");

const stopButton = document.createElement('button');
stopButton.innerText = "STOP";

let second = 0;
let flag = false;
let interval;

function toHours(secs) {
    let minutes = Math.floor(secs / 60);
    let seconds = secs % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function showTime() {
    let time = toHours(second);
    startTimer.innerHTML = time;
    second++;
}

startButton.addEventListener('click', () => {
    interval = setInterval(showTime, 1000);
    startButton.replaceWith(stopButton);
    flag = true;
});

stopButton.addEventListener('click', () => {
    clearInterval(interval);
    stopButton.replaceWith(startButton);
});

resetButton.addEventListener('click', () => {
    clearInterval(interval);
    startTimer.innerHTML = "00:00";
    second = 0;
    flag = false;
    splitContainer.innerHTML = "";
    stopButton.replaceWith(startButton);
});

splitButton.addEventListener('click', () => {
    if (flag) {
        const listItem = document.createElement("li");
        listItem.innerHTML = toHours(second);
        splitContainer.appendChild(listItem);
    }
});
