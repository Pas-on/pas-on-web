const productContainer = document.querySelector(".product-container")

import products from "../data/products.js"
import colorPicker from "../utils/colorPicker.js"
import { getWishlistItem, setWishlistItem } from "../utils/wishlistHelper.js"
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const query = urlParams.get("id")
const findProducts = products.find(product => product.id === Number(query))
const colorThief = new ColorThief()

const rgbToHex = (r, g, b) =>
    "#" +
    [r, g, b]
        .map(x => {
            const hex = x.toString(16)
            return hex.length === 1 ? "0" + hex : hex
        })
        .join("")

if (findProducts) {
    const img = new Image()
    img.src = `../assets${findProducts.image}`
    if (img.complete) {
        console.log(colorThief.getColor(img))
    } else {
        window.addEventListener("load", function () {
            const [r, g, b] = colorThief.getColor(img)
            const color = rgbToHex(r, g, b)
            productContainer.innerHTML = `<div class="image-wrapper">
            <img src="../assets${findProducts.image}" alt="sayuran" loading="lazy" />
        </div>
        <div class="product-desc">
            <div>
                <span class="product-title">${findProducts.title}</span>
                <i class="fa-solid fa-heart wishlist fa-xl"  data-id="${findProducts.id}"></i>
            </div>
            <div class='row2'>
            <p class="product-weight">~${findProducts.size}</p>
            <div class='product-category' >${findProducts.category}</div>
            </div>
            <p class="product-price">${new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(findProducts.price)}</p>
            ${findProducts.description}
            <div class="product-action">
                <button class="product-cart-button" data-id="${findProducts.id}">add to cart</button>
            </div>
        </div>`
            productContainer.querySelector(".product-category").style.background = color
            console.log(colorPicker(color))
            productContainer.querySelector(".product-category").style.color = colorPicker(color)
            // add-to-wishlist logic
            const wishlistButtons = document.querySelector(".wishlist")
            // get wishlist item dr localStorage
            wishlistButtons.addEventListener("click", e => {
                e.stopPropagation()
                const wishlistItems = getWishlistItem()
                const id = e.target.dataset.id
                const checkId = wishlistItems.includes(id)
                if (!checkId) {
                    wishlistItems.push(id)
                    setWishlistItem(wishlistItems)
                    wishlistButtons.classList.add("active")
                } else {
                    const updatedWishlistItems = wishlistItems.filter(item => item !== id)
                    setWishlistItem(updatedWishlistItems)
                    wishlistButtons.classList.remove("active")
                }
            })

            const wishlistItem = getWishlistItem()

            wishlistItem.includes(wishlistButtons.dataset.id) ? wishlistButtons.classList.add("active") : ""

            // add-to-cart logic
            const cartButtons = document.querySelector(".product-cart-button")
            // get cart item dr localStorage
            const cartItems = localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : []
            const productId = cartButtons.dataset.id

            // Check if the current product is in the cart items
            if (cartItems.includes(productId)) {
                cartButtons.innerText = "added"
            }

            cartButtons.addEventListener("click", e => {
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
                    cartButtons.innerText = "added"
                }
            })
        })
    }
}
