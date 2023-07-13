import { ProductSlider } from "./slider.js"
import { getWishlistItem, setWishlistItem } from "./utils/wishlistHelper.js"
import injectProduct from "./utils/injectProduct.js"
import { getUserItem, setUserItem } from "./utils/userHelper.js"
import users from "./data/user.js"

const crButtons = document.querySelectorAll("[data-cr-button]")
const carousel = document.querySelector("[data-carousel]")
//carousel logic
crButtons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.crButton === "next" ? 1 : -1
        const slides = carousel.querySelector("[data-slides]")
        const currentSlide = slides.querySelector("[data-current]")
        let newIndex = [...slides.children].indexOf(currentSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0
        slides.children[newIndex].setAttribute("data-current", "")
        currentSlide.removeAttribute("data-current")
    })
})

// meat-product-slider
const meatItemsWrapper = document.getElementById("meat-items")
const meatItemsContainer = meatItemsWrapper.querySelector(".item-container")
const meatLeftButton = document.getElementById("meat-left-button")
const meatRightButton = document.getElementById("meat-right-button")
injectProduct("Daging", meatItemsContainer)
new ProductSlider(meatItemsWrapper, meatLeftButton, meatRightButton)

// sayuran-product-slider
const sayuranItemsWrapper = document.getElementById("sayuran-items")
const sayuranItemsContainer = sayuranItemsWrapper.querySelector(".item-container")
const sayuranLeftButton = document.getElementById("sayuran-left-button")
const sayuranRightButton = document.getElementById("sayuran-right-button")
injectProduct("Sayur", sayuranItemsContainer)

new ProductSlider(sayuranItemsWrapper, sayuranLeftButton, sayuranRightButton)

//buah
const buahItemsWrapper = document.getElementById("buah-items")
const buahItemsContainer = buahItemsWrapper.querySelector(".item-container")
const buahLeftButton = document.getElementById("buah-left-button")
const buahRightButton = document.getElementById("buah-right-button")
injectProduct("Buah", buahItemsContainer)

new ProductSlider(buahItemsWrapper, buahLeftButton, buahRightButton)

//buah
const seafoodItemsWrapper = document.getElementById("seafood-items")
const seafoodItemsContainer = seafoodItemsWrapper.querySelector(".item-container")
const seafoodLeftButton = document.getElementById("seafood-left-button")
const seafoodRightButton = document.getElementById("seafood-right-button")
injectProduct("Seafood", seafoodItemsContainer)

new ProductSlider(seafoodItemsWrapper, seafoodLeftButton, seafoodRightButton)

//susu
const susuItemsWrapper = document.getElementById("susu-items")
const susuItemsContainer = susuItemsWrapper.querySelector(".item-container")
const susuLeftButton = document.getElementById("susu-left-button")
const susuRightButton = document.getElementById("susu-right-button")
injectProduct("Susu", susuItemsContainer)

new ProductSlider(susuItemsWrapper, susuLeftButton, susuRightButton)
// on scroll animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "var(--scale-in-animation)"
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
        e.stopPropagation()
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

const wishlistItem = getWishlistItem()
wishlistButtons.forEach(button => {
    wishlistItem.includes(button.dataset.id) ? button.classList.add("active") : ""
})

// add-to-cart logic
const cartButtons = document.querySelectorAll(".product-cart-button")
// get cart item dr localStorage
const cartItems = localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : []

cartButtons.forEach(button => {
    const productId = button.dataset.id

    // Check if the current product is in the cart items
    if (cartItems.includes(productId)) {
        button.innerText = "added"
    }
})

cartButtons.forEach(button => {
    button.addEventListener("click", e => {
        e.stopPropagation()
        const id = e.target.dataset.id
        const checkId = cartItems.includes(id)
        if (!checkId) {
            cartItems.push(id)
            localStorage.setItem("carts", JSON.stringify(cartItems))
            const Toast = Swal.mixin({
                toast: true,
                position: "top-right",
                iconColor: "white",
                customClass: {
                    popup: "colored-toast",
                },
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
            })
            Toast.fire({
                icon: "success",
                title: "success add to cart",
            })
            button.innerText = "added"
        }
    })
})

localStorage.getItem("activeUser") ? "" : localStorage.setItem("activeUser", "john")
getUserItem() ? "" : setUserItem(users)
const profileName = document.querySelector(".profile-name")
profileName.innerText = localStorage.getItem("activeUser")
