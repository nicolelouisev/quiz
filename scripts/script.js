import { iniciaQuiz } from "./module/usuario.js";
import { ligaAudio, desligaAudio } from "./module/audio.js";
import { temaEscuro } from "./modoEscuro.js";
import { reiniciaQuiz } from "./module/perguntas.js";

document.querySelector("#audio-ligado").addEventListener("click", ligaAudio);
document.querySelector("#audio-desligado").addEventListener("click", desligaAudio);
document.getElementById("iniciarQuiz").addEventListener("click", iniciaQuiz);
document.getElementById("modo-escuro").addEventListener("click", temaEscuro);
document.querySelector("#reiniciaResultado").addEventListener("click", reiniciaQuiz);