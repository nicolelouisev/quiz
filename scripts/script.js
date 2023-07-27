import { perguntasFilmes } from "./module/filmes.js";
import { perguntasLivros } from "./module/livros.js";
import { perguntasSeries } from "./module/series.js";
import { verificarRespostas } from "./module/filmes.js";

document.getElementById('iniciarQuiz').addEventListener('click', () => { // modificação para integrar o cronômetro no iniciar quiz voltar aqui dps, nehuma modificação foi feita ainda

    const nome = document.getElementById('nome').value;
    const temaSelecionado = document.getElementById('tema').value;

    if (temaSelecionado === 'filmes') {
        criaPerguntas(perguntasFilmes);
    } else if (temaSelecionado === 'livros') {
        criaPerguntas(perguntasLivros);
    } else if (temaSelecionado === 'series') {
        criaPerguntas(perguntasSeries);
    } else {
        alert('Selecione um tema válido!');
    }
});

function criaPerguntas(vetor) {
    const perguntasSection = document.querySelector("#perguntas");

    perguntasSection.innerHTML = '';

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
};


function playAudio() {
    let x = document.getElementById("myAudio");
    x.play();
}
function pauseAudio() {
    let x = document.getElementById("myAudio");
    x.pause();
}  