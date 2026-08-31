document.addEventListener("DOMContentLoaded", () => {

    const emailSalvo = localStorage.getItem(`userEmail`) || "usuario@email.com";

    const letraInicial = emailSalvo.charAt(0);

    const campoAvatar = document.getElementById(`avatar`);
    const campoNome = document.getElementById(`username-display`);

    campoAvatar.textContent = letraInicial;
    campoNome.textContent = emailSalvo;
});