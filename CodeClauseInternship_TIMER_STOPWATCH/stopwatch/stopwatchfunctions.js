let stopwatchInterval;
let stopwatchMilliseconds = 0, stopwatchSeconds = 0;
let stopwatchPaused = false;
let lapCount = 1;

function updateStopwatchDisplay() {
    const hours = Math.floor(stopwatchSeconds / 3600);
    const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
    const seconds = stopwatchSeconds % 60;
    document.getElementById('stopwatchDisplay').innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(stopwatchMilliseconds).padStart(3, '0')}`;
}

function startStopwatch() {
    stopwatchInterval = setInterval(function () {
        if (!stopwatchPaused) {
            stopwatchMilliseconds += 10;
            if (stopwatchMilliseconds === 1000) {
                stopwatchMilliseconds = 0;
                stopwatchSeconds++;
            }
            updateStopwatchDisplay();
        }
    }, 10);
}

function pauseResumeStopwatch() {
    stopwatchPaused = !stopwatchPaused;
    document.getElementById('pauseResumeStopwatch').innerText = stopwatchPaused ? 'Resume' : 'Pause';
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchMilliseconds = 0;
    stopwatchSeconds = 0;
    updateStopwatchDisplay();
    stopwatchPaused = false;
    document.getElementById('pauseResumeStopwatch').innerText = 'Pause';
    lapCount = 1;
    document.getElementById('laps').innerText = '';
}

function lapStopwatch() {
    const lapTime = document.getElementById('stopwatchDisplay').innerText;
    const lapElement = document.createElement('div');
    lapElement.innerText = `Lap ${lapCount}: ${lapTime}`;
    document.getElementById('laps').appendChild(lapElement);
    lapCount++;
}

document.getElementById('startStopwatch').addEventListener('click', startStopwatch);
document.getElementById('pauseResumeStopwatch').addEventListener('click', pauseResumeStopwatch);
document.getElementById('resetStopwatch').addEventListener('click', resetStopwatch);
document.getElementById('lapStopwatch').addEventListener('click', lapStopwatch);
