import { ProductSlider } from "./slider.js"
import products from "./data/products.json" assert { type: "json" }
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

// sayuran-product-slider
const sayuranItemsWrapper = document.getElementById("sayuran-items")
const sayuranItemsContainer = sayuranItemsWrapper.querySelector(".item-container")
products.forEach(product => {
    const child = document.createElement("div")
    child.classList.add("slider-item", "elHidden")
    child.innerHTML = `<div class="image-wrapper new">
    <img src="assets/${product.image}" alt="sayuran" loading="lazy" />
    <div class="product-action ">
        <i class="fa-solid fa-heart wishlist fa-xl" data-id=${product.id}></i>
    </div>
</div>
<div class="product-desc">
    <div>
        <p class="product-price">${new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(product.price)}</p>
        <p class="product-weight">~${product.size}</p>
    </div>
    <span class="product-title"> ${product.title} </span>
</div>
<button class="product-cart-button" data-id=${product.id} >add to cart</button>
`
    sayuranItemsContainer.appendChild(child)
})

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

// add-to-wishlist logic
const wishlistButtons = document.querySelectorAll(".wishlist")
// get wishlist item dr localStorage
wishlistButtons.forEach(button => {
    button.addEventListener("click", e => {
        const wishlistItems = localStorage.getItem("wishlists") ? JSON.parse(localStorage.getItem("wishlists")) : []
        const id = e.target.dataset.id
        const checkId = wishlistItems.includes(id)
        if (!checkId) {
            wishlistItems.push(id)
            localStorage.setItem("wishlists", JSON.stringify(wishlistItems))
            button.classList.add("active")
        } else {
            const updatedWishlistItems = wishlistItems.filter(item => item !== id)
            localStorage.setItem("wishlists", JSON.stringify(updatedWishlistItems))
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
