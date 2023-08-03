let rankingGeral = {};

function criaRanking(infoUsuarios) {
    rankingGeral = {};

    for (let usuario of infoUsuarios) {
        const { nome, temaSelecionado, acertos } = usuario;

        if (!rankingGeral[temaSelecionado]) {
            rankingGeral[temaSelecionado] = [];
        }
        rankingGeral[temaSelecionado].push({ nome, acertos });

    }

    for (let tema in rankingGeral) {
        rankingGeral[tema].sort((a, b) => b.acertos - a.acertos);
    }
}

function criaTabela(tema, infoUsuarios) {
    const tabela = document.getElementById(`tabela-${tema}`);
    const usuariosTema = rankingGeral[tema];

    const tbody = tabela.querySelector("tbody");
    tbody.innerHTML = "";

    usuariosTema.forEach((usuario, index) => {
        const novaLinha = document.createElement("tr");
        novaLinha.innerHTML = `<td>${index + 1}º lugar</td><td>${usuario.nome}</td><td>${usuario.acertos}</td>`;
        tbody.appendChild(novaLinha);
    });
}

export function criaTabelaRanking(infoUsuarios) {
    criaRanking(infoUsuarios);
    criaTabela("filmes", infoUsuarios);
    criaTabela("livros", infoUsuarios);
    criaTabela("series", infoUsuarios);
}