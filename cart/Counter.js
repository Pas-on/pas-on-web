class Counter {
    constructor(plusButton, input, minButton) {
        this.plusButton = plusButton
        this.input = input
        this.minButton = minButton
        this.plusButton.addEventListener("click", this.incValue.bind(this))
        this.input.value = 1
        this.minButton.addEventListener("click", this.decValue.bind(this))
    }

    updateSummary = () => {
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
            e.innerHTML = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(totalPrice)
        })
    }

    incValue() {
        if (Number(this.input.value) < Number(this.input.max)) {
            this.input.value = Number(this.input.value) + 1
            this.plusButton.classList.remove("disable")
        }
        if (Number(this.input.value) === Number(this.input.max)) {
            this.plusButton.classList.add("disable")
        }
        this.updateSummary()
    }
    decValue() {
        if (this.input.value > 1) {
            this.input.value -= 1
            this.minButton.classList.remove("disable")
        }
        if (Number(this.input.value) === 1) {
            this.minButton.classList.add("disable")
        }
        this.updateSummary()
    }
}

export default Counter
