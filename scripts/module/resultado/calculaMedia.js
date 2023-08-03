// A lógica para média é soma dos acertos, dividido pelo total de participantes.

const calculaMediaAcertos = (infoUsuarios, temaSelecionado) => {
    const usuariosDoTema = infoUsuarios.filter((usuario) => usuario.temaSelecionado === temaSelecionado);

    const totalAcertosTema = usuariosDoTema.reduce((acum, usuario) => acum + usuario.acertos, 0);

    const mediaAcertosTema = totalAcertosTema / usuariosDoTema.length;

    return Math.round(mediaAcertosTema * 100) / 100;
};

const temas = ["livros", "filmes", "series"];

export function criaTabelaMediaAcertos(infoUsuarios) {
    const tabela = document.getElementById("tabela-medias-acertos");
    const tbody = tabela.querySelector("tbody");

    tbody.innerHTML = "";

    temas.forEach((tema) => {
        const mediaTema = calculaMediaAcertos(infoUsuarios, tema);
        const novaLinha = document.createElement("tr");
        novaLinha.innerHTML = `<td>${tema}</td><td>${mediaTema}</td>`;
        tbody.appendChild(novaLinha);
    });
}

export function criaTabelaMediaErros(infoUsuarios) {
    const tabela = document.getElementById("tabela-medias-erros");
    const tbody = tabela.querySelector("tbody");

    tbody.innerHTML = "";

    temas.forEach((tema) => {
        const mediaTema = (10 - calculaMediaAcertos(infoUsuarios, tema));
        const novaLinha = document.createElement("tr");
        novaLinha.innerHTML = `<td>${tema}</td><td>${mediaTema}</td>`;
        tbody.appendChild(novaLinha);
    });
}