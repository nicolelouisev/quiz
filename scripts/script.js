import { perguntasFilmes } from "./module/filmes.js";
import { perguntasLivros } from "./module/livros.js";
import { perguntasSeries } from "./module/series.js";


function criaPerguntas(vetor) {
    const perguntasSection = document.querySelector("#perguntas");

    vetor.forEach((pergunta, i) => {

        perguntasSection.innerHTML += `

                <h3>${pergunta.pergunta}</h3>

                <input type="radio" name="resposta${i}" id="a">
                A - ${pergunta.respostas.a}

                <input type="radio" name="resposta${i}" id="b">
                B - ${pergunta.respostas.b}

                <input type="radio" name="resposta${i}" id="c">
                C - ${pergunta.respostas.c}

                <input type="radio" name="resposta${i}" id="d">
                D - ${pergunta.respostas.d}

        `
    })
}

criaPerguntas(perguntasFilmes);




