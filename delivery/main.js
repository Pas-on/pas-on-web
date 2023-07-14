import products from "../data/products.js"
import { getDeliveryItem } from "../utils/deliveryHelper.js"

const container = document.querySelector(".delivery-product-container")
const deliveryItems = getDeliveryItem()

if (deliveryItems.length) {
    deliveryItems.forEach(({ tanggal, detail }, index) => {
        const formattedDate = new Date(tanggal).toLocaleDateString()
        const totalHarga = detail.reduce((acc, cur) => {
            const findItem = products.find(product => product.id === Number(cur.productId))
            return acc + findItem.price * cur.quantity
        }, 0)
        const item = document.createElement("div")
        item.classList.add("delivery-item")
        item.innerHTML = `
        <div class="product-header">
            <p>${formattedDate}</p>
        <div class="badge">sedang dikirim</div>
            <p>#${index + 1}</p>
        </div>
        <div class="products-container"></div>
        <div class="total-price">
            <p>total harga : ${new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(totalHarga)}</p>
        </div>
        `
        container.appendChild(item)
        const productContainer = item.querySelector(".products-container")
        detail.forEach(({ productId, quantity }) => {
            const findItem = products.find(product => product.id === Number(productId))
            const item = document.createElement("div")
            item.classList.add("product-wrapper")
            item.innerHTML = `
        <div class="image-wrapper">
        <img src="../assets${findItem.image}" alt="${findItem.title}" loading="lazy" />
        </div>
        <div class="product-desc">
        <p class="product-title">${findItem.title}</p>
        <div class="product-total">
            <p class="product-price">${quantity} x ${new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(findItem.price)}</p>
        </div>
        </div>
        `
            productContainer.appendChild(item)
        })
    })
} else {
    container.textContent = "pesanan masih kosong nih"
}
