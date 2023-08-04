import { perguntasFilmes } from './perguntasObjetos/filmes.js';
import { perguntasLivros } from './perguntasObjetos/livros.js';
import { perguntasSeries } from './perguntasObjetos/series.js';
import { iniciaTimer } from './cronometro.js';
import { criaPerguntas, respostasCorretas, perguntasSection, cronometroSection } from './perguntas.js';

export const usuarioSection = document.querySelector("#usuario");
export const temaSelecionado = document.getElementById("tema");


export function iniciaQuiz() {
    const inputNome = document.querySelector("#nome").value;
    if (inputNome.trim() != "") {
        if (temaSelecionado.value === "filmes") {

            criaPerguntas(perguntasFilmes);
            respostasCorretas(perguntasFilmes);
            iniciaTimer();
            usuarioSection.classList.add("esconde");
            cronometroSection.classList.remove("esconde");
            perguntasSection.style.display = "flex";

        } else if (temaSelecionado.value === "livros") {

            criaPerguntas(perguntasLivros);
            respostasCorretas(perguntasLivros);
            iniciaTimer();
            usuarioSection.classList.add("esconde");
            cronometroSection.classList.remove("esconde");
            perguntasSection.style.display = "flex";

        } else if (temaSelecionado.value === "series") {

            criaPerguntas(perguntasSeries);
            respostasCorretas(perguntasSeries);
            iniciaTimer();
            usuarioSection.classList.add("esconde");
            cronometroSection.classList.remove("esconde");
            perguntasSection.style.display = "flex";
        }
    } else {
        alert('Insira um nome!');
    }

}