const carouselItems = document.querySelector(".slide")
const crButtons = document.querySelectorAll("[data-cr-button]")
const itemContainer = document.querySelector("#item-container")
const slButtons = document.querySelectorAll("[data-sl-button]")
const slItem = document.querySelector(".slider-item")

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
slButtons.forEach(button => {
    button.addEventListener("click", () => {
        const itemLength = slItem.offsetWidth
        console.log(itemLength)
        const offset = button.dataset.slButton === "next" ? `-${itemLength * 5}px` : `0`
        itemContainer.style.transform = `translateX(${offset})`
    })
})
