import { infoUsuarios } from "../infoUsuario.js";
import { temaSelecionado } from "../usuario.js";
import { acertos, erros } from "../perguntas.js";
import { totalSegundos } from "../cronometro.js";
import { formatarDataHora, formatarTempo } from "../../utils/utils.js";
import { criaTabelaMediaAcertos, criaTabelaMediaErros } from "./calculaMedia.js";
import { criaTabelaRanking } from "./ranking.js";

const dataHoraPreenchimento = new Date();

// Captura as informações do usuário
export function pegaInfoUsuario() {
    const nome = document.getElementById("nome").value;
    let infoUsuario = { nome, temaSelecionado: temaSelecionado.value, acertos, erros, totalSegundos, dataHoraPreenchimento: formatarDataHora(dataHoraPreenchimento) };
    infoUsuarios.push(infoUsuario);
    criaTabelaResultados();
    criaTabelaMediaAcertos(infoUsuarios);
    criaTabelaMediaErros(infoUsuarios);
    criaTabelaRanking(infoUsuarios);
};

function criaTabelaResultados() {
    const tabela = document.getElementById("tabela-resultados");
    const tbody = tabela.querySelector("tbody");

    tbody.innerHTML = "";

    for (let usuario of infoUsuarios) {
        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${usuario.nome}</td>
            <td>${usuario.temaSelecionado}</td>
            <td>${usuario.acertos}</td>
            <td>${formatarTempo(usuario.totalSegundos)}</td>
            <td>${usuario.dataHoraPreenchimento}</td>
        `;

        tbody.appendChild(linha);
    }
};