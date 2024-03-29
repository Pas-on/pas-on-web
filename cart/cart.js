import { getCartItem, setCartItem } from "../utils/cartHelper.js"
import products from "../data/products.js"
import Counter from "./Counter.js"
import { getUserItem } from "../utils/userHelper.js"
import { getDeliveryItem, setDeliveryItem } from "../utils/deliveryHelper.js"

// fluid-container-height
const navbar = document.querySelector("header")
const container = document.querySelector(".container")
const navbarHeight = navbar.clientHeight
container.style.minHeight = `calc(100vh - ${navbarHeight}px)`

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

const revertPayButton = () => {
    paymentButton.forEach(button => {
        button.innerText = "bayar"
    })
}

const closeButton = document.querySelector(".close-button")
const paymentModal = document.querySelector(".payment-container")
const overlay = document.querySelector(".overlay")

closeButton.addEventListener("click", () => {
    paymentModal.classList.remove("active")
    revertPayButton()
})

overlay.addEventListener("click", () => {
    paymentModal.classList.remove("active")
    revertPayButton()
})

const summaryPrice = document.querySelectorAll(".summaryPrice")

paymentButton.forEach(button => {
    button.addEventListener("click", () => {
        if (summaryPrice[1].value === 0) return
        fakeLoading()

        setTimeout(() => {
            paymentModal.classList.add("active")
        }, 1000)
    })
})

const formButtons = document.querySelectorAll(".form-action")
const formContainer = document.querySelector(".form-container")
const formIndex = document.querySelectorAll(".form-index")
const productQty = document.querySelectorAll('input[type="number"]')
const allForm = formContainer.children
const donePayment = async () => {
    const alert = await Swal.fire({
        title: "pembayaran berhasil.",
        width: 500,
        padding: "1em",
        backdrop: `
          rgba(0,0,123,0.4)
          url("../assets/conffetti.gif")
          center / cover
          no-repeat
        `,
    })
    const cartItem = getCartItem()
    const deliveryItem = getDeliveryItem()
    let detail = []
    cartItem.forEach((item, index) => {
        detail.push({ productId: item, quantity: productQty[index].value })
    })
    deliveryItem.push({ tanggal: new Date(), detail })
    setDeliveryItem(deliveryItem)
    setCartItem([])
    injectCartProduct()
    updateSummary()
    if (alert.isConfirmed || alert.dismiss) {
        revertPayButton()
        paymentModal.classList.remove("active")
    }
}

formButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.dataset.action === "submit") {
            const spinner = document.createElement("i")
            spinner.classList.add("fa", "fa-spinner", "fa-spin")
            button.innerText = ""
            button.append(spinner)
            setTimeout(async () => {
                await donePayment()
                button.innerText = "bayar"
            }, 2000)
        } else {
            const offset = button.dataset.action === "next" ? 1 : -1
            const activeForm = formContainer.querySelector("[data-active]")
            const newIndex = [...allForm].indexOf(activeForm) + offset
            for (let index = 0; index <= newIndex; index++) {
                formIndex[index].classList.add("active")
            }
            if (offset === -1) {
                formIndex[newIndex + 1].classList.remove("active")
            }
            allForm[newIndex].setAttribute("data-active", "")
            activeForm.removeAttribute("data-active")
        }
    })
})

const userData = getUserItem()
const currentUser = localStorage.getItem("activeUser")
const userDetail = userData.find(user => user.name === currentUser)
const allInput = document.querySelectorAll(".input-box")
allInput.forEach(e => {
    const input = e.children[1]
    const props = input.name
    if (userDetail.hasOwnProperty(props)) {
        input.value = userDetail[props]
    }
})

const paymentMethod = document.querySelector(".payment-method")
const cardPaymentInput = document.querySelector(".card")
const otherPaymentInput = document.querySelector(".others")
Array.from(paymentMethod.children).forEach(method => {
    method.addEventListener("click", () => {
        const activeMethod = document.querySelector("[data-payment-active]")

        if (activeMethod) {
            activeMethod.removeAttribute("data-payment-active")
        }

        method.setAttribute("data-payment-active", "")
        if (method.id !== "card") {
            otherPaymentInput.setAttribute("data-payment-active", "")
            cardPaymentInput.removeAttribute("data-payment-active")
        } else {
            cardPaymentInput.setAttribute("data-payment-active", "")
            otherPaymentInput.removeAttribute("data-payment-active")
        }
    })
})

// card validation
const cartInput = document.querySelector("#cardNumber")
cartInput.addEventListener("input", e => {
    const formattedNumber = e.target.value.replace(/(\d{4})(?=\d)/g, "$1 ")
    e.target.value = formattedNumber
})

const expireDateInput = document.querySelector("#expireDate")
expireDateInput.addEventListener("input", e => {
    const formattedDate = e.target.value.replace(/(\d{2})(?=\d)/g, "$1/")
    e.target.value = formattedDate
})
