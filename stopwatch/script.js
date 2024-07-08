let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const timeDisplay = document.querySelector('.time');
const startButton = document.querySelector('.start');
const endButton = document.querySelector('.end');
const resetButton = document.querySelector('.reset');

function updateTime() {
    const currentTime = Date.now();
    const timeElapsed = new Date(currentTime - startTime + elapsedTime);

    const hours = String(timeElapsed.getUTCHours()).padStart(2, '0');
    const minutes = String(timeElapsed.getUTCMinutes()).padStart(2, '0');
    const seconds = String(timeElapsed.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(timeElapsed.getUTCMilliseconds()).padStart(3, '0');

    timeDisplay.textContent = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now();
        timer = setInterval(updateTime, 10);
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
        elapsedTime += Date.now() - startTime;
    }
}

function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    timeDisplay.textContent = '00 : 00 : 00 : 000';
}

startButton.addEventListener('click', startTimer);
endButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
