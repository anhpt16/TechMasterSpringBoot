
const inputPasswordEl = document.getElementById("input-password");
const btnShow = document.getElementById("show");
const icon = document.getElementById("icon");


btnShow.addEventListener('click', () => {
    if (inputPasswordEl.type === "password") {
        inputPasswordEl.type = "text";
        icon.classList.replace("fa-eye", "fa-eye-slash");
    }
    else {
        inputPasswordEl.type = "password";
        icon.classList.replace("fa-eye-slash", "fa-eye");
    }
})