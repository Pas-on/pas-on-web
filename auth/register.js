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

// form logic
const form = document.querySelector("form")
const userData = JSON.parse(localStorage.getItem("users"))
const errorBox = document.querySelector(".error-box")
const errorText = "user sudah pernah dibuat"
const submitButton = document.querySelector("button")
const spinner = document.createElement("i")
spinner.classList.add("fa", "fa-spinner", "fa-spin")

const fakeLoading = () => {
    submitButton.innerText = ""
    submitButton.appendChild(spinner)
}

const addErrorText = () => {
    errorBox.classList.add("show")
    errorBox.innerText = errorText
    submitButton.innerText = "sign in"
    submitButton.removeChild(spinner)
}

form.addEventListener("submit", e => {
    e.preventDefault()
    const { name, password } = e.target.elements
    const findUser = userData.find(user => user.name === name.value)
    if (findUser) {
        fakeLoading()
        setTimeout(addErrorText, 500)
    } else {
        userData.push({ name: name.value, password: password.value })
        localStorage.setItem("users", JSON.stringify(userData))
        fakeLoading()
        setTimeout(() => {
            location.href = "/auth/login.html"
        }, 500)
    }
})
