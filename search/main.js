import products from "../data/products.js"
import { getWishlistItem, setWishlistItem } from "../utils/wishlistHelper.js"

const productContainer = document.querySelector(".product-container")
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const query = urlParams.get("q")
const findProducts = products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()))
const foundNum = document.getElementById("found-number")
foundNum.innerText = findProducts.length

if (findProducts.length) {
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

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("hidden")
        }
    })
})

const hiddenElements = document.querySelectorAll(".product-item")
console.log(hiddenElements)
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
        }
    })
})

const wishlistItem = getWishlistItem()
wishlistButtons.forEach(button => {
    wishlistItem.includes(button.dataset.id) ? button.classList.add("active") : ""
})
