export const perguntasFilmes = [
    {
        pergunta: "1. Qual filme conta a história de um jovem leão que precisa enfrentar desafios para se tornar rei da savana?",
        respostas: {
            a: "O Rei Leão",
            b: "Titanic",
            c: "Jurassic Park",
            d: "Star Wars: Episódio IV - Uma Nova Esperança",
        },
        respostaCorreta: "a",
    },
    {
        pergunta: "2. Em qual filme um grupo de amigos embarca em uma jornada para destruir um poderoso anel maligno?",
        respostas: {
            a: "Harry Potter e a Pedra Filosofal",
            b: "The Lord of the Rings: The Fellowship of the Ring",
            c: "Matrix",
            d: "Avatar",
        },
        respostaCorreta: "b",
    },
    {
        pergunta: "3. Qual filme retrata a história de uma naufrágio trágico com um casal de protagonistas?",
        respostas: {
            a: "O Resgate do Soldado Ryan",
            b: "Jurassic Park",
            c: "Titanic",
            d: "Gladiador",
        },
        respostaCorreta: "c",
    },
    {
        pergunta: "4. Qual filme é ambientado em um parque temático repleto de dinossauros?",
        respostas: {
            a: "Jurassic Park",
            b: "Matrix",
            c: "Pulp Fiction",
            d: "Star Wars: Episódio V - O Império Contra-Ataca",
        },
        respostaCorreta: "a",
    },
    {
        pergunta: "5. Qual filme é um clássico da ficção científica e tem como protagonista um jovem fazendeiro que se torna um herói galáctico?",
        respostas: {
            a: "O Senhor dos Anéis: O Retorno do Rei",
            b: "The Godfather",
            c: "Star Wars: Episódio IV - Uma Nova Esperança",
            d: "Inception",
        },
        respostaCorreta: "c",
    },
    {
        pergunta: "6. Em qual filme um hacker de computador descobre que a realidade que ele conhece não é o que parece?",
        respostas: {
            a: "The Lord of the Rings: The Two Towers",
            b: "Inception",
            c: "The Matrix",
            d: "Fight Club",
        },
        respostaCorreta: "c",
    },
    {
        pergunta: "7. Qual filme retrata a história de um grupo de soldados em uma missão perigosa durante a Segunda Guerra Mundial?",
        respostas: {
            a: "O Resgate do Soldado Ryan",
            b: "Pulp Fiction",
            c: "Gladiador",
            d: "The Godfather",
        },
        respostaCorreta: "a",
    },
    {
        pergunta: "8. Em qual filme um ex-general romano busca vingança contra um imperador corrupto?",
        respostas: {
            a: "The Godfather",
            b: "Pulp Fiction",
            c: "Gladiador",
            d: "The Lord of the Rings: The Return of the King",
        },
        respostaCorreta: "c",
    },
    {
        pergunta: "9. Qual filme é um clássico do crime e conta a história de uma família mafiosa?",
        respostas: {
            a: "Matrix",
            b: "The Godfather",
            c: "Pulp Fiction",
            d: "Inception",
        },
        respostaCorreta: "b",
    },
    {
        pergunta: "10. Em qual filme um ladrão de sonhos é contratado para realizar uma missão complexa?",
        respostas: {
            a: "Inception",
            b: "Fight Club",
            c: "The Lord of the Rings: The Two Towers",
            d: "The Matrix",
        },
        respostaCorreta: "a",
    },
];


export function verificarRespostas() {
    const respostasCorretas = ['a', 'b', 'c', 'a', 'c', 'c', 'a', 'c', 'b', 'a']; // Adicione aqui as respostas corretas para cada pergunta

    let numPerguntas = 2; // Defina o número total de perguntas no quiz

    let pontos = 0;

    for (let i = 1; i <= numPerguntas; i++) {
        const respostaSelecionada = document.querySelector(`input[name="resposta${i}"]:checked`);
        if (respostaSelecionada) {
            const resposta = respostaSelecionada.value;
            if (resposta === respostasCorretas[i - 1]) {
                pontos++;
            }
        }
    }

    exibirResultado(pontos, numPerguntas);
}

function exibirResultado(pontos, totalPerguntas) {
    const resultadoContainer = document.getElementById('resultado');
    resultadoContainer.innerHTML = `Você acertou ${pontos} de ${totalPerguntas} perguntas.`;
}