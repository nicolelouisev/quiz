const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const StartBtnEl = document.querySelector("#StartBtn");
const PauseBtnEl = document.querySelector("#PauseBtn");
const ResumeBtnEl = document.querySelector("#ResumeBtn");
const ResetBtnEl = document.querySelector("#ResetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

StartBtnEl.addEventListener("click", startTimer);
PauseBtnEl.addEventListener("click", pauseTimer);
ResumeBtnEl.addEventListener("click", resumeTimer);
ResetBtnEl.addEventListener("click", resetTimer);

function startTimer() {
    interval = setInterval(() => {
        if (!isPaused) {
            milliseconds += 10;

            if (milliseconds >= 1000) {
                seconds += Math.floor(milliseconds / 1000);
                milliseconds %= 1000;
            }

            if (seconds >= 60) {
                minutes += Math.floor(seconds / 60);
                seconds %= 60;
            }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatMilliseconds(milliseconds);
        }
    }, 10);

    StartBtnEl.style.display = "none";
    PauseBtnEl.style.display = "block";
    ResumeBtnEl.style.display = "none";
}

function pauseTimer() {
    isPaused = true;
    PauseBtnEl.style.display = "none";
    ResumeBtnEl.style.display = "block";
}

function resumeTimer() {
    isPaused = false;
    ResumeBtnEl.style.display = "none";
    PauseBtnEl.style.display = "block";
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    isPaused = false;
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    millisecondsEl.textContent = "000";
    StartBtnEl.style.display = "block";
    PauseBtnEl.style.display = "none";
    ResumeBtnEl.style.display = "none";
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function formatMilliseconds(time) {
    return time < 100 ? String(time).padStart(3, "0") : time;
}
