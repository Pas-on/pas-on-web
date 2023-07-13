import { getUserItem, setUserItem } from "./utils/userHelper.js"

const profilePicture = document.querySelector("#profile-picture")
const inputPicture = document.querySelector(".input-file")

inputPicture.addEventListener("change", e => {
    const file = e.target.files[0]
    const picture = URL.createObjectURL(file)
    profilePicture.src = picture
})

const form = document.querySelector("#profile-form")

const userIndex = localStorage.getItem("activeUser")
const userData = getUserItem()
const userDetail = userData.find(user => user.name === userIndex)
const inputs = form.querySelectorAll("input")
inputs.forEach(input => {
    if (input.name === "tanggalLahir") {
        const date = userDetail?.tanggalLahir ? new Date(userDetail.tanggalLahir) : null
        if (date) {
            const formattedDate = date.toISOString()
            input.value = formattedDate
        }
    }

    if (input.name === "gender") {
        if (input.value === userDetail.gender) {
            input.checked = true
        }
    }
    input.value = userDetail[input.name]
})

const submitButton = form.querySelector("button")
const spinner = document.createElement("i")
spinner.classList.add("fa", "fa-spinner", "fa-spin")

const fakeLoading = () => {
    submitButton.innerText = ""
    submitButton.appendChild(spinner)
}

const profileName = document.querySelector(".profile-name")
profileName.innerText = localStorage.getItem("activeUser")

form.addEventListener("submit", e => {
    e.preventDefault()
    inputs.forEach(input => {
        userDetail[input.name] = input.value
    })
    userData[userIndex] = userDetail
    localStorage.setItem("activeUser", userDetail.name)
    setUserItem(userData)
    fakeLoading()
    setTimeout(() => {
        Swal.fire({ icon: "success", title: "success edit profile", timer: 2000 })
        submitButton.innerText = "submit"
    }, 1000)
})
