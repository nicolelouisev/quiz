import { perguntasFilmes } from "./module/filmes.js";
import { perguntasLivros } from "./module/livros.js";
import { perguntasSeries } from "./module/series.js";
import { totalSegundos, iniciaTimer, calculaTempo } from "./cronometro.js";




const temaSelecionado = document.getElementById('tema');

document.getElementById('iniciarQuiz').addEventListener('click', () => { // modificação para integrar o cronômetro no iniciar quiz voltar aqui dps, nehuma modificação foi feita ainda

    if (temaSelecionado.value === 'filmes') {
        criaPerguntas(perguntasFilmes);
        respostasCorretas(perguntasFilmes);
    } else if (temaSelecionado.value === 'livros') {
        criaPerguntas(perguntasLivros);
        respostasCorretas(perguntasLivros);
    } else if (temaSelecionado.value === 'series') {
        criaPerguntas(perguntasSeries);
        respostasCorretas(perguntasSeries);
    } else {
        alert('Selecione um tema válido!');
    }
    iniciaTimer();

});


function criaPerguntas(vetor) {
    const perguntasSection = document.querySelector("#perguntas");

    perguntasSection.innerHTML = '';

    vetor.forEach((pergunta, i) => {

        perguntasSection.innerHTML += `

            <div class="divPergunta">
                <h3>${pergunta.pergunta}</h3>

                <input type="radio" name="resposta${i}" id="a">
                A - ${pergunta.respostas.a}

                <input type="radio" name="resposta${i}" id="b">
                B - ${pergunta.respostas.b}

                <input type="radio" name="resposta${i}" id="c">
                C - ${pergunta.respostas.c}

                <input type="radio" name="resposta${i}" id="d">
                D - ${pergunta.respostas.d}
            </div>
        `
    })

    perguntasSection.innerHTML += `
            <button id="finaliza">Finalizar</button>
        `

    document.querySelector("#finaliza").addEventListener("click", respostasUsuario);
};


const divLigado = document.querySelector("#div-ligado");
const divDesligado = document.querySelector("#div-desligado");
const audio = document.querySelector("#meuAudio");

document.querySelector("#audio-ligado").addEventListener("click", () => {
    audio.volume = 0.1;
    audio.play();
    divLigado.classList.add("esconde");
    divDesligado.classList.remove("esconde");
})

document.querySelector("#audio-desligado").addEventListener("click", () => {

    audio.pause();
    divLigado.classList.remove("esconde");
    divDesligado.classList.add("esconde");
})

let respostasCertas = [];
// Traz as respostas corretas e armazena em um vetor, baseado na escolha do usuário.
function respostasCorretas(perguntas) {
    respostasCertas = [];
    perguntas.forEach(resp => {
        respostasCertas.push(resp.respostaCorreta);
    })
}

let respostasUser = [];
// Verifica se o usuário respondeu todas as perguntas e armazenas as respostas em um vetor.
function respostasUsuario() {
    const radios = document.querySelectorAll("input[type=radio]:checked");

    radios.forEach(radio => {
        respostasUser.push(radio.id);
    })

    if (respostasUser.length < 10) {
        alert("Responda todas as perguntas!");
        respostasUser = [];

    } else {
        verificaRespostas();
    }
}


// Verifica quais respostas estão certas e quais estão erradas.

let acertos = 0;
let erros = 0;
function verificaRespostas() {
    const divs = document.querySelectorAll(".divPergunta");
    const radios = document.querySelectorAll("input[type=radio]")

    for (let i = 0; i < respostasCertas.length; i++) {

        if (respostasCertas[i] == respostasUser[i]) {
            acertos++;
            divs[i].classList.add("respostaCorreta");
            desabilitaResposta(radios)

        } else {
            erros++
            divs[i].classList.add("respostaErrada");
            desabilitaResposta(radios)

        }

    }
    calculaTempo();
    pegaInfoUsuario()
}


// Desabilita os campos (input type=radio) após as respostas serem validadas. 
function desabilitaResposta(campos) {
    campos.forEach(campo => {
        if (!campo.checked) {
            campo.disabled = true;
        }
    })
}

let infoUsuario = [];
// Captura as informações do usuário: nome, tema, acertos e erros.
function pegaInfoUsuario() {
    const nome = document.getElementById('nome').value;
    infoUsuario = { nome, temaSelecionado: temaSelecionado.value, acertos, erros, totalSegundos };
}

