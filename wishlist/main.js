import products from "../data/products.js"
import { getWishlistItem, setWishlistItem } from "../utils/wishlistHelper.js"

const productContainer = document.querySelector(".product-container")

const fetch = () => {
    const wishlistItem = getWishlistItem()
    const findProducts = products.filter(product => wishlistItem.includes(String(product.id)))
    const totalNum = document.getElementById("total-wishlist")
    totalNum.innerText = findProducts.length
    if (findProducts.length) {
        productContainer.innerHTML = " "
        findProducts.forEach(product => {
            const item = document.createElement("div")
            item.classList.add("product-item", "hidden")
            item.innerHTML = `<div class="image-wrapper">
            <img src="../assets/${product.image}" alt="sayuran" loading="lazy" />
            <div class="product-action ">
                <i class="fa-solid  fa-heart wishlist fa-xl" data-id=${product.id}></i>
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
            productContainer.appendChild(item)
        })
    } else {
        productContainer.innerHTML = `<p class='full-row'">item tidak ditemukan</p>`
    }
}

fetch()

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `var(--scale-in-animation)`
        }
    })
})

const hiddenElements = document.querySelectorAll(".product-item")
hiddenElements.forEach(el => observer.observe(el))

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
            fetch()
        }
    })
})
const wishlistItem = getWishlistItem()

wishlistButtons.forEach(button => {
    wishlistItem.includes(button.dataset.id) ? button.classList.add("active") : ""
})