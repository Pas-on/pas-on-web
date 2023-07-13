import { getCartItem, setCartItem } from "../utils/cartHelper.js"
import products from "../data/products.js"
import Counter from "./Counter.js"

const productContainer = document.querySelector(".product-container")

const injectCartProduct = () => {
    const cartProduct = getCartItem()
    productContainer.innerHTML = ""
    if (cartProduct.length) {
        const findProducts = products.filter(product => cartProduct.includes(String(product.id)))
        findProducts.forEach(product => {
            const item = document.createElement("div")
            item.classList.add("product-item")
            item.innerHTML = `<div class="product-wrapper">
            <div class="image-wrapper">
                <img src="../assets/${product.image}" alt="${product.title}" loading='lazy' />
            </div>
            <div class="product-desc">
                <p class="product-title">${product.title}</p>
                <p class="product-weight">~${product.size}</p>
                <p class="product-price" data-value=${product.price} >${new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(product.price)}</p>
            </div>
            </div>
            <div class="product-action">
            <i class="fa-solid fa-trash" data-id=${product.id}></i>
            <div class="product-counter" data-counter=${product.id}>
                <div class="minus"><i class="fa-solid fa-minus fa-xs"></i></div>
                <input type="number" min=0 max=20 pattern="\d*" maxlength="2" />
                <div class="plus">
                    <i class="fa-solid fa-plus fa-xs"></i>
                </div>
            </div>
            </div>
            </div>`
            productContainer.appendChild(item)
            const productCounter = document.querySelector(`[data-counter="${product.id}"]`)
            const [minus, input, plus] = productCounter.children
            new Counter(plus, input, minus)
        })
    } else {
        productContainer.innerHTML = `<h2>cart masih kosong nih</h2>`
    }
}

const updateSummary = () => {
    const productPrice = document.querySelectorAll(".product-price")
    const productQty = document.querySelectorAll('input[type="number"]')
    const summaryPrice = document.querySelectorAll(".summaryPrice")
    const summaryProducts = []
    productPrice.forEach((product, index) => {
        const price = product.dataset.value
        const quantity = productQty[index].value

        const productObj = {
            price,
            quantity,
        }

        summaryProducts.push(productObj)
    })
    const totalPrice = summaryProducts.reduce((prev, cur) => prev + Number(cur.price) * Number(cur.quantity), 0)
    summaryPrice.forEach(e => {
        e.value = totalPrice
        e.innerHTML = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(totalPrice)
    })
}

injectCartProduct()
updateSummary()

document.addEventListener("click", e => {
    if (e.target.classList.contains("fa-trash")) {
        const trashButton = e.target
        const cartProduct = getCartItem()
        const updatedCart = cartProduct.filter(item => item !== trashButton.dataset.id)
        setCartItem(updatedCart)
        injectCartProduct()
        updateSummary()
    }
})

const inputs = document.querySelectorAll('input[type="number"]')
inputs.forEach(input => {
    input.addEventListener("change", () => {
        updateSummary()
    })
})

// payment logic
const paymentButton = document.querySelectorAll(".cart-payment")

const fakeLoading = () => {
    paymentButton.forEach(button => {
        const spinner = document.createElement("i")
        spinner.classList.add("fa", "fa-spinner", "fa-spin")
        button.innerText = ""
        button.append(spinner)
    })
}

const summaryPrice = document.querySelectorAll(".summaryPrice")

paymentButton.forEach(button => {
    button.addEventListener("click", () => {
        if (summaryPrice[1].value === 0) return
        fakeLoading()

        setTimeout(async () => {
            await paymentLogic()
        }, 1000)
    })
})
