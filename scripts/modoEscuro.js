const tema = window.localStorage.getItem("tema");
const btnDark = document.querySelector("#modo-escuro");

//verifica se o tema armazenado no navegador do usuário é escuro, se sim aplica o tema escuro ao body
if (tema === "dark") {
    document.body.classList.add("dark")
}

export function temaEscuro() {
    document.body.classList.toggle("dark");

    const novoTema = document.body.classList.contains("dark") ? "dark" : "light";
    window.localStorage.setItem("tema", novoTema);

    if (novoTema === "dark") {
        btnDark.innerText = "Modo claro";
    } else {
        btnDark.innerText = "Modo escuro";
    }
}
