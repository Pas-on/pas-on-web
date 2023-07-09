// import products from "../data/products.json" assert { type: "json" }
const products = [
    {
        "id": 1,
        "title": "aneka sayuran",
        "price": 150000,
        "size": "700gr",
        "category": "sayuran",
        "image": "/aneka_sayuran-removebg-preview.png",
    },
    {
        "id": 2,
        "title": "bawang putih jepang",
        "price": 70000,
        "size": "350gr",
        "category": "new",
        "image": "/bawang_putih-removebg-preview.png",
    },
    {
        "id": 3,
        "title": "beras import jepang kualitas terbaik",
        "price": 125000,
        "size": "10kg",
        "category": "sayuran",
        "image": "/beras-removebg-preview.png",
    },
]

const injectProduct = (category, productContainer) => {
    const filteredProduct = products.filter(product => product.category === category)
    filteredProduct.forEach(product => {
        const child = document.createElement("div")
        child.classList.add("slider-item", "elHidden")
        child.innerHTML = `<div class="image-wrapper">
        <img src="assets/${product.image}" alt="sayuran" loading="lazy" />
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
