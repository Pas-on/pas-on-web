const passwordInput = document.querySelector("input[type='password']")
const eyeIcon = document.querySelector("#eye-icon")

eyeIcon.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        eyeIcon.classList.remove("fa-eye")
        eyeIcon.classList.add("fa-eye-slash")
        passwordInput.type = "text"
    } else {
        eyeIcon.classList.add("fa-eye")
        eyeIcon.classList.remove("fa-eye-slash")
        passwordInput.type = "password"
    }
})
