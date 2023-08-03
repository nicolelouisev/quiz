const divLigado = document.querySelector("#div-ligado");
const divDesligado = document.querySelector("#div-desligado");
const audio = document.querySelector("#meuAudio");

export function ligaAudio() {
    audio.volume = 0.1;
    audio.play();
    divLigado.classList.add("esconde");
    divDesligado.classList.remove("esconde");
}


export function desligaAudio() {
    audio.pause();
    divLigado.classList.remove("esconde");
    divDesligado.classList.add("esconde");
}