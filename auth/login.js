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
import { getUserItem } from "../utils/userHelper.js"
const form = document.querySelector("form")
const errorBox = document.querySelector(".error-box")
const errorText = "user atau password salah"
const submitButton = document.querySelector("button")
const spinner = document.createElement("i")
spinner.classList.add("fa", "fa-spinner", "fa-spin")
//set to local storage
const userData = getUserItem()

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
    if (!findUser) {
        fakeLoading()
        setTimeout(addErrorText, 500)
    } else {
        const checkPass = findUser?.password === password.value
        if (!checkPass) {
            fakeLoading()
            setTimeout(addErrorText, 500)
        } else {
            fakeLoading()
            setTimeout(() => {
                localStorage.setItem("activeUser", findUser.name)
                location.href = "/"
            }, 500)
        }
    }
})
