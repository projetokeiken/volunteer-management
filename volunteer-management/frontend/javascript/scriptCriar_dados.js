const emailValue = localStorage.getItem("userEmail");

// USANDO QUERYSELECTOR COM O PONTO (.) ANTES DA CLASSE:
const nome = document.querySelector(".NOME");
const sobrenome = document.querySelector(".SOBRENOME");
const nomeJapones = document.querySelector(".NOME-JAPONES");
const sobrenomeJapones = document.querySelector(".SOBRENOME-JAPONES");
const telefone = document.querySelector(".TELEFONE");
const privilegio = document.querySelector(".privilegio");
const congregacao = document.querySelector(".congregacao");
const botao = document.querySelector(".button-D");



botao.addEventListener("click" , (event) => {
        event.preventDefault();
        const nomeValor = nome.value;
        const sobrenomeValor = sobrenome.value;
        const nomejaponesValor = nomeJapones.value;
        const sobrenomejaponesValor = sobrenomeJapones.value;
        const telefoneValor = telefone.value;
        const valuePrivilegio = privilegio.value;
        const valueCongregacao = congregacao.value


        localStorage.setItem("nomeUsuario", nomeValor);
        localStorage.setItem("sobrenomeUsuario", sobrenomeValor);
        localStorage.setItem("nomeJapones", nomejaponesValor);
        localStorage.setItem("sobrenomeJapones", sobrenomejaponesValor);
        localStorage.setItem("telefoneUsuario", telefoneValor);
        localStorage.setItem("privilegio" , valuePrivilegio);
        localStorage.setItem("congregacao" , valueCongregacao);


        
        window.location.href = "criarC_senha.html";

});