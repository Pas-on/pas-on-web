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
import users from "../data/user.json" assert { type: "json" }
const form = document.querySelector("form")
const errorBox = document.querySelector(".error-box")
const errorText = "user atau password salah"
const submitButton = document.querySelector("button")

const fakeLoading = () => {
    const spinner = document.createElement("i")
    spinner.classList.add("fa", "fa-spinner", "fa-spin")
    submitButton.innerText = ""
    submitButton.appendChild(spinner)
}

const addErrorText = () => {
    errorBox.classList.add("show")
    errorBox.innerText = errorText
}

form.addEventListener("submit", e => {
    e.preventDefault()
    const { name, password } = e.target.elements
    const findUser = users.find(user => user.name === name.value)
    if (!findUser) {
        addErrorText()
    } else {
        const checkPass = findUser?.password === password.value
        if (!checkPass) {
            addErrorText()
        } else {
            fakeLoading()
            setInterval(() => {
                location.href = "/"
            }, 500)
        }
    }
})
