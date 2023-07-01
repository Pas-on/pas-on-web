import { ProductSlider } from "./slider.js"

const crButtons = document.querySelectorAll("[data-cr-button]")

const button = document.getElementById("hamburger-button")
const drawer = document.getElementById("drawer")
const navbar = document.querySelector("header")
//carousel logic

crButtons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.crButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
        const currentSlide = slides.querySelector("[data-current]")
        let newIndex = [...slides.children].indexOf(currentSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0
        slides.children[newIndex].setAttribute("data-current", "")
        delete currentSlide.removeAttribute("data-current")
    })
})

//new-product-slider
const newItemsWrapper = document.getElementById("new-items")
const npLeftButton = document.getElementById("np-left-button")
const npRightButton = document.getElementById("np-right-button")
new ProductSlider(newItemsWrapper, npLeftButton, npRightButton)

// meat-product-slider
const meatItemsWrapper = document.getElementById("meat-items")
const meatLeftButton = document.getElementById("meat-left-button")
const meatRightButton = document.getElementById("meat-right-button")
new ProductSlider(meatItemsWrapper, meatLeftButton, meatRightButton)


//drawer logic
button.addEventListener("change", () => {
    if (button.checked) {
        const navbarHeight = navbar.offsetHeight
        drawer.style.top = `${navbarHeight}px`
        drawer.style.height = `calc(100vh - ${navbarHeight}px)`
        drawer.classList.add("open")
    } else {
        drawer.classList.remove("open")
    }
})

// on scroll animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "var(--fade-in-animation)"
        }
    })
})

const hiddenElements = document.querySelectorAll(".elHidden")
hiddenElements.forEach(el => observer.observe(el))
