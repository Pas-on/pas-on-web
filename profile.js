const profilePicture = document.querySelector("#profile-picture")
const inputPicture = document.querySelector(".input-file")

inputPicture.addEventListener("change", e => {
    const file = e.target.files[0]
    const picture = URL.createObjectURL(file)
    profilePicture.src = picture
})
