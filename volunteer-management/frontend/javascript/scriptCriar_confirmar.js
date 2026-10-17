document.addEventListener("DOMContentLoaded", function() {
    
    const nomeSalvo = localStorage.getItem("nomeUsuario");
    const sobrenomeSalvo = localStorage.getItem("sobrenomeUsuario");
    const nomeJaponesSalvo = localStorage.getItem("nomeJapones");
    const sobrenomeJaponesSalvo = localStorage.getItem("sobrenomeJapones");
    const telefoneSalvo = localStorage.getItem("telefoneUsuario");
    const privilegioSalvo = localStorage.getItem("privilegio");
    const congregacaoSalvo = localStorage.getItem("congregacao");

    
    document.getElementById("txtNome").textContent = nomeSalvo;
    document.getElementById("txtSobrenome").textContent = sobrenomeSalvo;
    document.getElementById("txtNomeJapones").textContent = nomeJaponesSalvo;
    document.getElementById("txtSobrenomeJapones").textContent = sobrenomeJaponesSalvo;
    document.getElementById("txtTelefone").textContent = telefoneSalvo;
    document.getElementById("txtPrivilegio").textContent = privilegioSalvo;
    document.getElementById("txtCongregacao").textContent = congregacaoSalvo;
});