const toggle = document.getElementById("modo-escuro");
const tema = window.localStorage.getItem("tema");

//verifica se o tema armazenado no navegador do usuário é escuro, se sim aplica o tema escuro ao body
if (tema === "dark"){
    document.body.classList.add("dark")
    document.querySelector("#perguntas").classList.add("perguntaDark")};

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.querySelector("#perguntas").classList.toggle("perguntaDark");
    if (tema === "dark") {
        window.localStorage.setItem("tema", "light");
    } else window.localStorage.setItem("tema", "dark");
});
