import { perguntasFilmes } from "./module/filmes.js";
import { perguntasLivros } from "./module/livros.js";
import { perguntasSeries } from "./module/series.js";
import { totalSegundos, iniciaTimer, calculaTempo } from "./cronometro.js";
import { criaTabelaMediaAcertos } from "./calculaMedia.js";
import { criaTabelaMediaErros } from "./calculaMedia.js";


const temaSelecionado = document.getElementById("tema");

document.getElementById("iniciarQuiz").addEventListener("click", () => {
    // modificação para integrar o cronômetro no iniciar quiz voltar aqui dps, nehuma modificação foi feita ainda

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

});

function criaPerguntas(vetor) {
    const perguntasSection = document.querySelector("#perguntas");

    perguntasSection.innerHTML = "";

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
        `;
    });

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
});

document.querySelector("#audio-desligado").addEventListener("click", () => {
    audio.pause();
    divLigado.classList.remove("esconde");
    divDesligado.classList.add("esconde");
});

let respostasCertas = [];
// Traz as respostas corretas e armazena em um vetor, baseado na escolha do usuário.
function respostasCorretas(perguntas) {
    respostasCertas = [];
    perguntas.forEach((resp) => {
        respostasCertas.push(resp.respostaCorreta);
    });
};

let respostasUser = [];
// Verifica se o usuário respondeu todas as perguntas e armazenas as respostas em um vetor.
function respostasUsuario() {
    const radios = document.querySelectorAll("input[type=radio]:checked");

    radios.forEach((radio) => {
        respostasUser.push(radio.id);
    });

    // if (respostasUser.length < 10) {
    //     alert("Responda todas as perguntas!");
    //     respostasUser = [];
    // } else {
    //     verificaRespostas();
    // }
    verificaRespostas();
};

// Verifica quais respostas estão certas e quais estão erradas.

let acertos = 0;
let erros = 0;
function verificaRespostas() {
    const divs = document.querySelectorAll(".divPergunta");
    const radios = document.querySelectorAll("input[type=radio]");

    for (let i = 0; i < respostasCertas.length; i++) {
        if (respostasCertas[i] == respostasUser[i]) {
            acertos++;
            divs[i].classList.add("respostaCorreta");
            desabilitaResposta(radios);
        } else {
            erros++;
            divs[i].classList.add("respostaErrada");
            desabilitaResposta(radios);
        }
    }
    calculaTempo();
    pegaInfoUsuario()
};

// Desabilita os campos (input type=radio) após as respostas serem validadas.
function desabilitaResposta(campos) {
    campos.forEach((campo) => {
        if (!campo.checked) {
            campo.disabled = true;
        }
    });
};

let infoUsuarios = [
    {nome: 'Ana',
    temaSelecionado: 'livros',
    acertos: 8, erros: 2,
    totalSegundos: 187,
    dataHoraPreenchimento: '25/07/2023 12:32'},
    {nome: 'João',
    temaSelecionado: 'livros',
    acertos: 5, erros: 5,
    totalSegundos: 233,
    dataHoraPreenchimento: '01/07/2023 17:49'},
    {nome: 'Gabriel',
    temaSelecionado: 'filmes',
    acertos: 3, erros: 7,
    totalSegundos: 267,
    dataHoraPreenchimento: '10/07/2023 10:15'},
    {nome: 'Beatriz',
    temaSelecionado: 'filmes',
    acertos: 7, erros: 3,
    totalSegundos: 199,
    dataHoraPreenchimento: '22/07/2023 21:30'},
    {nome: 'Maria',
    temaSelecionado: 'series',
    acertos: 10, erros: 0,
    totalSegundos: 212,
    dataHoraPreenchimento: '29/07/2023 08:45'}
];

function formatarDataHora(data) {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear().toString();
    const hora = data.getHours().toString().padStart(2, '0');
    const minuto = data.getMinutes().toString().padStart(2, '0');

    return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
}

const dataHoraPreenchimento = new Date();

// Captura as informações do usuário: nome, tema, acertos e erros.
function pegaInfoUsuario() {
    const nome = document.getElementById("nome").value;
    let infoUsuario = {nome, temaSelecionado: temaSelecionado.value, acertos, erros, totalSegundos, dataHoraPreenchimento: formatarDataHora(dataHoraPreenchimento)};
    infoUsuarios.push(infoUsuario);
    console.log(infoUsuario);

    criaTabelaResultados();
    criaTabelaMediaAcertos(infoUsuarios);
    criaTabelaMediaErros(infoUsuarios);
};


function formatarTempo(totalSegundos) {
    const minutos = Math.floor(totalSegundos / 60);
    const segundos = totalSegundos % 60;

    const minutosFormatados = minutos.toString().padStart(2, '0');
    const segundosFormatados = segundos.toString().padStart(2, '0');

    return `${minutosFormatados}:${segundosFormatados}`;
}

function criaTabelaResultados() {
    const tabela = document.getElementById("tabela-resultados");
    const tbody = tabela.querySelector("tbody");

    tbody.innerHTML = "";

    for (let usuario of infoUsuarios) {
        const linha = document.createElement("tr");
        linha.innerHTML = `<td>${usuario.nome}</td><td>${usuario.temaSelecionado}</td><td>${usuario.acertos}</td><td>${formatarTempo(usuario.totalSegundos)}</td><td>${usuario.dataHoraPreenchimento}</td>`;
        tbody.appendChild(linha);
    }
};

document.querySelector("#reiniciar").addEventListener("click", reiniciarQuiz);

function reiniciarQuiz() {
    respostasUser = [];
    acertos = 0;
    erros = 0;

    document.getElementById("iniciarQuiz").disabled = false;

    const perguntasSection = document.querySelector("#perguntas");
    perguntasSection.innerHTML = "";
};