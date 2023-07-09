class Counter {
    constructor(plusButton, input, minButton) {
        this.plusButton = plusButton
        this.input = input
        this.minButton = minButton
        this.plusButton.addEventListener("click", this.incValue.bind(this))
        this.input.value = 1
        this.minButton.addEventListener("click", this.decValue.bind(this))
    }

    incValue() {
        if (Number(this.input.value) < Number(this.input.max)) {
            this.input.value = Number(this.input.value) + 1
            this.plusButton.classList.remove("disable")
        }
        if (Number(this.input.value) === Number(this.input.max)) {
            this.plusButton.classList.add("disable")
        }
    }
    decValue() {
        if (this.input.value > 1) {
            this.input.value -= 1
            this.minButton.classList.remove("disable")
        }
        if (Number(this.input.value) === 1) {
            this.minButton.classList.add("disable")
        }
    }
}

export default Counter
