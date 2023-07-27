// Copie e cole o restante do código abaixo do seu código existente
const minutosEl = document.querySelector("#minutes");
const segundosEl = document.querySelector("#seconds");
const botaoValidaEl = document.querySelector("#finaliza")

let intervalo;
let minutos = 5;
let segundos = 0;
let milliseconds = 0
let pausado = false;


botaoValidaEl.addEventListener("click", calculaTempo);


export function iniciaTimer() {
    intervalo = setInterval(() => {
        if (!pausado) {
            // Decrementa o tempo
            if (milliseconds > 0) {
                milliseconds -= 10;
            } else {
                if (segundos > 0) {
                    segundos -= 1;
                    milliseconds = 990; // Defina 990 para que o tempo seja exibido como "00:59" em vez de "00:60"
                } else {
                    if (minutos > 0) {
                        minutos -= 1;
                        segundos = 59;
                        milliseconds = 990;
                    } else {
                        // O cronômetro atingiu 00:00, então para o intervalo
                        clearInterval(intervalo);
                        IniciarQuizEl.style.display = "none";
                        
                    }
                }
            }

            minutosEl.textContent = formatTime(minutos);
            segundosEl.textContent = formatTime(segundos);
        
        }
    }, 10);

    
} 

// modificação contagem regressiva do cronômetro 

export let totalSegundos = 0

function calculaTempo() {
    pausado = true;
    // Convertendo o tempo atual para segundos e armazenando no vetor
     totalSegundos = 300 - (minutos * 60 + segundos) ;

}
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

