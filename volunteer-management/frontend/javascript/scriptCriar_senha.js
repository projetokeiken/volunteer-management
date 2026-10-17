const emailValue = localStorage.getItem("userEmail");
const nome = localStorage.getItem("nomeUsuario");
const sobrenome = localStorage.getItem("sobrenomeUsuario");
const nomeJapones = localStorage.getItem("nomeJapones");
const sobrenomeJapones = localStorage.getItem("sobrenomeJapones");
const telefone = localStorage.getItem("telefoneUsuario");
const privilegio = localStorage.getItem("privilegio");
const congregacao = localStorage.getItem("congregacao");

const senhaInput = document.querySelector(".senha");

document.querySelector(".button-S").addEventListener("click" , function() {
    const senhaValue = senhaInput.value;

    localStorage.setItem(`userSenha`, senhaValue);

    window.location.href = "criarC_confirmar.html";

})