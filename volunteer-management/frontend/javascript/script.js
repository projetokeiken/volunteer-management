document.querySelector(".button-p").addEventListener("click" , function() {
    const emailInput = document.querySelector(".email");
    const errorSpan = document.getElementById("errorEmail");
    const emailValue = emailInput.value.trim();


    const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailValue === "") {

        errorSpan.textContent = "Por favor, digite seu e-mail";
        errorSpan.style.display = "block"
    } else if (!emailRegex.test(emailValue)) {

        errorSpan.textContent = "Por favor, insira um e-mail válido";
        errorSpan.style.display = "block";
    } else {

        errorSpan.style.display = "none";
        alert("Login efetuado com sucesso! ")
    }
})