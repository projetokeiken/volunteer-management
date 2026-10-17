const emailInput = document.querySelector(".email");


document.querySelector(".button-p").addEventListener("click" , function() {
    const emailValue = emailInput.value.trim();

    localStorage.setItem(`userEmail`, emailValue);

    window.location.href = "criarC_dados.html";

})