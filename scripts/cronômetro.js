// Copie e cole o restante do código abaixo do seu código existente
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const IniciarQuizEl = document.querySelector("#iniciarQuiz"); // aqui

let interval;
let minutes = 5;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

IniciarQuizEl.addEventListener("click", startTimer);
PauseBtnEl.addEventListener("click", pauseTimer);
ResumeBtnEl.addEventListener("click", resumeTimer);
ResetBtnEl.addEventListener("click", resetTimer);

function startTimer() {
    interval = setInterval(() => {
        if (!isPaused) {
            // Decrementa o tempo
            if (milliseconds > 0) {
                milliseconds -= 10;
            } else {
                if (seconds > 0) {
                    seconds -= 1;
                    milliseconds = 990; // Defina 990 para que o tempo seja exibido como "00:59" em vez de "00:60"
                } else {
                    if (minutes > 0) {
                        minutes -= 1;
                        seconds = 59;
                        milliseconds = 990;
                    } else {
                        // O cronômetro atingiu 00:00, então para o intervalo
                        clearInterval(interval);
                        IniciarQuizEl.style.display = "none";
                        
                    }
                }
            }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisecondsEl.textContent = formatMilliseconds(milliseconds);
        }
    }, 10);

    iniciarQuizEl.style.display = "none";
    PauseBtnEl.style.display = "block";
    ResumeBtnEl.style.display = "none";
} // modificação contagem regressiva do cronômetro 


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
    minutes = 5;
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
