// Copie e cole o restante do código abaixo do seu código existente
const minutosEl = document.querySelector("#minutes");
const segundosEl = document.querySelector("#seconds");

let intervalo;
let minutos = 5; // Tempo padrão de inicio do timer;
let segundos = 0;
let milisegundos = 0
let pausado = false;

export function iniciaTimer() {

    clearInterval(intervalo)
    minutos = 5; // Toda vez que a função é chamada define o tempo para 5 min;
    segundos = 0;
    milisegundos = 0;

    intervalo = setInterval(() => {
        if (!pausado) {
            // Decrementa o tempo
            if (milisegundos > 0) {
                milisegundos -= 10;
            } else {
                if (segundos > 0) {
                    segundos -= 1;
                    milisegundos = 990; // Defina 990 para que o tempo seja exibido como "00:59" em vez de "00:60"
                } else {
                    if (minutos > 0) {
                        minutos -= 1;
                        segundos = 59;
                        milisegundos = 990;
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

export function calculaTempo() {

    // Convertendo o tempo atual para segundos e armazenando no vetor
    totalSegundos = 300 - (minutos * 60 + segundos);
    console.log(totalSegundos)

}
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

