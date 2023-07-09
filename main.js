import { ProductSlider } from "./slider.js"
import { getWishlistItem, setWishlistItem } from "./helpers/wishlistHelper.js"
import injectProduct from "./helpers/injectProduct.js"

// check on load
window.addEventListener("load", () => {
    const wishlistItem = getWishlistItem()
    injectProduct("sayuran", sayuranItemsContainer)

    wishlistButtons.forEach(button => {
        wishlistItem.includes(button.dataset.id) ? button.classList.add("active") : ""
    })
})

const crButtons = document.querySelectorAll("[data-cr-button]")

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

// sayuran-product-slider
const sayuranItemsWrapper = document.getElementById("sayuran-items")
const sayuranItemsContainer = sayuranItemsWrapper.querySelector(".item-container")
const sayuranLeftButton = document.getElementById("sayuran-left-button")
const sayuranRightButton = document.getElementById("sayuran-right-button")
new ProductSlider(sayuranItemsWrapper, sayuranLeftButton, sayuranRightButton)

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

// add-to-wishlist logic
const wishlistButtons = document.querySelectorAll(".wishlist")
// get wishlist item dr localStorage
wishlistButtons.forEach(button => {
    button.addEventListener("click", e => {
        const wishlistItems = getWishlistItem()
        const id = e.target.dataset.id
        const checkId = wishlistItems.includes(id)
        if (!checkId) {
            wishlistItems.push(id)
            setWishlistItem(wishlistItems)
            button.classList.add("active")
        } else {
            const updatedWishlistItems = wishlistItems.filter(item => item !== id)
            setWishlistItem(updatedWishlistItems)
            button.classList.remove("active")
        }
    })
})

// add-to-cart logic
const cartButtons = document.querySelectorAll(".product-cart-button")
// get cart item dr localStorage
const cartItems = localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : []
cartButtons.forEach(button => {
    button.addEventListener("click", e => {
        const id = e.target.dataset.id
        const checkId = cartItems.includes(id)
        if (!checkId) {
            cartItems.push(id)
            localStorage.setItem("carts", JSON.stringify(cartItems))
        }
    })
})
