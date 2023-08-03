export function formatarDataHora(data) {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear().toString();
    const hora = data.getHours().toString().padStart(2, '0');
    const minuto = data.getMinutes().toString().padStart(2, '0');

    return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
}

export function formatarTempo(totalSegundos) {
    const minutos = Math.floor(totalSegundos / 60);
    const segundos = totalSegundos % 60;

    const minutosFormatados = minutos.toString().padStart(2, '0');
    const segundosFormatados = segundos.toString().padStart(2, '0');

    return `${minutosFormatados}:${segundosFormatados}`;
}