const carouselItems = document.querySelector(".slide")
const crButtons = document.querySelectorAll("[data-cr-button]")
const itemContainer = document.querySelector("#item-container")
const slButtons = document.querySelectorAll("[data-sl-button]")
const slItem = document.querySelector(".slider-item")
const productSlider = document.getElementById("product-slider")
const slLeftButton = document.getElementById("sl-left-button")
const slRightButton = document.getElementById("sl-right-button")
const productSliderItem = document.querySelectorAll(".slider-item")
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

//product-slider

let slidePos = 0

const currentItemsLength = getComputedStyle(productSlider).getPropertyValue("--max-item")

checkBoundary()

function translateSlider() {
    checkBoundary()

    itemContainer.style.transform = `translateX(${slidePos}px)`
}

function slideToNext() {
    slLeftButton.classList.remove("hidden")
    slidePos -= productSliderItem[0].offsetWidth * currentItemsLength
    translateSlider()
}

function slideToPrev() {
    slidePos += productSliderItem[0].offsetWidth * currentItemsLength
    translateSlider()
}

function checkBoundary() {
    if (slidePos === 0) {
        slLeftButton.classList.add("hidden")
    } else {
        slLeftButton.classList.remove("hidden")
    }

    if (
        Math.abs(slidePos) + productSliderItem[0].offsetWidth * currentItemsLength >=
        productSliderItem[0].offsetWidth * productSliderItem.length
    ) {
        slRightButton.classList.add("hidden")
    } else {
        slRightButton.classList.remove("hidden")
    }
}

slLeftButton.addEventListener("click", slideToPrev)
slRightButton.addEventListener("click", slideToNext)
