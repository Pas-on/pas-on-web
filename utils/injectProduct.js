import products from "../data/products.js"

const injectProduct = (category, productContainer) => {
    const filteredProduct = products.filter(product => product.category === category)
    filteredProduct.forEach(product => {
        const child = document.createElement("div")
        child.classList.add("slider-item", "elHidden")
        child.innerHTML = `<div class="image-wrapper">
        <img src="assets${product.image}" alt="sayuran" loading="lazy" />
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
        productContainer.appendChild(child)
    })
}

export default injectProduct
