const hamburg = document.querySelector(".hamburg");
const cancel = document.querySelector(".cancel");
const navbar = document.querySelector(".dropdown");

// Evento para abrir o menu
hamburg.addEventListener("click", () => {
    navbar.style.transform = "translateY(0px)"; // Exibe o menu
    navbar.classList.add("active"); // Adiciona a classe "active"
    hamburg.style.display = "none"; // Esconde o ícone do hamburguer
    cancel.style.display = "block"; // Mostra o ícone de cancelamento (X)
});

// Evento para fechar o menu
cancel.addEventListener("click", () => {
    navbar.style.transform = "translateY(-100%)"; // Oculta o menu
    navbar.classList.remove("active"); // Remove a classe "active"
    hamburg.style.display = "block"; // Mostra o ícone do hamburguer
    cancel.style.display = "none"; // Esconde o ícone de cancelamento (X)
});

// Fechar o menu ao clicar em um link dentro dele
navbar.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        navbar.style.transform = "translateY(-100%)"; // Oculta o menu
        navbar.classList.remove("active"); // Remove a classe "active"
        hamburg.style.display = "block"; // Mostra o ícone do hamburguer
        cancel.style.display = "none"; // Esconde o ícone de cancelamento (X)
    }
});