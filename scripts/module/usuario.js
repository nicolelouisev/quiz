import { perguntasFilmes } from './perguntasObjetos/filmes.js';
import { perguntasLivros } from './perguntasObjetos/livros.js';
import { perguntasSeries } from './perguntasObjetos/series.js';
import { iniciaTimer } from './cronometro.js';
import { criaPerguntas, respostasCorretas, perguntasSection, cronometroSection } from './perguntas.js';

export const usuarioSection = document.querySelector("#usuario");
export const temaSelecionado = document.getElementById("tema");


export function iniciaQuiz() {
    if (temaSelecionado.value === "filmes") {
        criaPerguntas(perguntasFilmes);
        respostasCorretas(perguntasFilmes);
    } else if (temaSelecionado.value === "livros") {
        criaPerguntas(perguntasLivros);
        respostasCorretas(perguntasLivros);
    } else if (temaSelecionado.value === "series") {
        criaPerguntas(perguntasSeries);
        respostasCorretas(perguntasSeries);
    } else {
        alert('Selecione um tema válido!');
    }
    iniciaTimer();
    usuarioSection.classList.add("esconde");
    cronometroSection.classList.remove("esconde");
    perguntasSection.classList.remove("esconde");
}