import { temaSelecionado, usuarioSection } from "./usuario.js";
import { pegaInfoUsuario } from "./resultado/resultados.js";
import { calculaTempo } from "./cronometro.js";

const resultadoSection = document.querySelector("#resultados");
export const cronometroSection = document.querySelector(".cronometro");
export const perguntasSection = document.querySelector("#perguntas");


let respostasUser = [];
let respostasCertas = [];
export let acertos = 0;
export let erros = 0;

// Preenche a section de perguntas.
export function criaPerguntas(vetor) {

    perguntasSection.innerHTML = "";

    switch (temaSelecionado.value) {
        case "filmes":
            perguntasSection.innerHTML += "<h1>Tema: Filmes</h1>";
            break;
        case "series":
            perguntasSection.innerHTML += "<h1>Tema: Séries</h1>";
            break;
        case "livros":
            perguntasSection.innerHTML += "<h1>Tema: Livros</h1>";
            break;
    }

    vetor.forEach((pergunta, i) => {
        perguntasSection.innerHTML += `
            <div class="divPergunta">
                <h3>${pergunta.pergunta}</h3>

                <div class="inputs">
                    <div>
                        <input type="radio" name="resposta${i}" id="a">
                        <label> A - ${pergunta.respostas.a} </label>
                    </div>

                    <div>
                        <input type="radio" name="resposta${i}" id="b">
                        <label> B - ${pergunta.respostas.b} </label>
                    </div>

                    <div>
                        <input type="radio" name="resposta${i}" id="c">
                        <label> C - ${pergunta.respostas.c} </label>
                    </div>

                    <div>
                        <input type="radio" name="resposta${i}" id="d">
                        <label> D - ${pergunta.respostas.d} </label>
                    </div>

                </div>        
            </div>
        `;
    });

    perguntasSection.innerHTML += `
        <div class="btnPerguntas">
            <button id="finaliza">Finalizar</button>
            <button id="reinicia">Reiniciar</button>
        </div>
    `
    document.querySelector("#finaliza").addEventListener("click", respostasUsuario);
    document.querySelector("#reinicia").addEventListener("click", reiniciaQuiz);
}


// Traz as respostas corretas e armazena em um vetor, baseado na escolha do usuário.
export function respostasCorretas(perguntas) {
    respostasCertas = [];
    perguntas.forEach((resp) => {
        respostasCertas.push(resp.respostaCorreta);
    });
};


// Verifica se o usuário respondeu todas as perguntas e armazenas as respostas em um vetor.
function respostasUsuario() {
    const radios = document.querySelectorAll("input[type=radio]:checked");
    const btnFinaliza = document.querySelector("#finaliza");

    radios.forEach((radio) => {
        respostasUser.push(radio.id);
    });

    if (respostasUser.length < 10) {
        alert("Responda todas as perguntas!");
        respostasUser = [];
    } else {
        verificaRespostas();
        resultadoSection.classList.remove("esconde");
        cronometroSection.classList.add("esconde");
        btnFinaliza.classList.add("esconde");
        perguntasSection.style.display = "none";
    }

};

// Verifica quais respostas estão certas e quais estão erradas 
// E pinta a div com verde caso correta e vermelha caso errada
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

// Funcionalidade do botão de reiniciar.
export function reiniciaQuiz() {
    const inputNome = document.querySelector("#nome");

    perguntasSection.style.display = "none";
    usuarioSection.classList.remove("esconde");
    cronometroSection.classList.add("esconde");
    resultadoSection.classList.add("esconde");
    inputNome.value = "";
    temaSelecionado.value = "filmes";
    respostasUser = [];
    acertos = 0;
    erros = 0;
}