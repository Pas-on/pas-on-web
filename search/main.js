import products from "../data/products.js"

const productContainer = document.querySelector(".product-container")
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const query = urlParams.get("q")
const findProducts = products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()))
findProducts.forEach(product => {
    const item = document.createElement("div")
    item.classList.add("product-item", "elHidden")
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
