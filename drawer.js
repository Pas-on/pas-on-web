const button = document.getElementById("hamburger-button")
const drawer = document.getElementById("drawer")
const navbar = document.querySelector("header")

//drawer logic
button.addEventListener("change", () => {
    if (button.checked) {
        const navbarHeight = navbar.offsetHeight
        drawer.style.top = `${navbarHeight}px`
        drawer.style.height = `calc(100dvh - ${navbarHeight}px)`
        drawer.classList.add("open")
    } else {
        drawer.classList.remove("open")
    }
})
