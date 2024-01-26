let timerInterval;
let timerSeconds = 0;
let timerPaused = false;

function updateTimerDisplay() {
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;
    document.getElementById('timerDisplay').innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function setTimer() {
    const userInput = prompt('Enter the timer duration in minutes (e.g., 5):');
    const timerDuration = parseInt(userInput, 10);

    if (!isNaN(timerDuration) && timerDuration > 0) {
        timerSeconds = timerDuration * 60;
        updateTimerDisplay();
    } else {
        alert('Invalid input. Please enter a valid positive number for the timer duration.');
    }
}

function startTimer() {
    timerInterval = setInterval(function () {
        if (!timerPaused && timerSeconds > 0) {
            timerSeconds--;
            updateTimerDisplay();
        } else if (timerSeconds === 0) {
            clearInterval(timerInterval);
            alert('Timer expired!');
        }
    }, 1000);
}

function pauseResumeTimer() {
    timerPaused = !timerPaused;
    document.getElementById('pauseResumeTimer').innerText = timerPaused ? 'Resume' : 'Pause';
}

function resetTimer() {
    clearInterval(timerInterval);
    timerSeconds = 0;
    updateTimerDisplay();
    timerPaused = false;
    document.getElementById('pauseResumeTimer').innerText = 'Pause';
}

document.getElementById('setTimer').addEventListener('click', setTimer);
document.getElementById('startTimer').addEventListener('click', startTimer);
document.getElementById('pauseResumeTimer').addEventListener('click', pauseResumeTimer);
document.getElementById('resetTimer').addEventListener('click', resetTimer);
