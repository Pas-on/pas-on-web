class ProductSlider {
    constructor(wrapper, leftButton, rightButton) {
        this.slidePos = 0
        this.wrapper = wrapper
        this.leftButton = leftButton
        this.rightButton = rightButton
        this.itemContainer = wrapper.querySelector(".item-container")
        this.items = wrapper.querySelectorAll(".slider-item")
        this.CurrentLength = getComputedStyle(wrapper).getPropertyValue("--max-item")
        this.leftButton.addEventListener("click", this.slideToPrev.bind(this))
        this.rightButton.addEventListener("click", this.slideToNext.bind(this))
        this.checkBoundary()
    }

    checkBoundary() {
        if (this.slidePos === 0) {
            this.leftButton.classList.add("hidden")
        } else {
            this.leftButton.classList.remove("hidden")
        }

        if (Math.abs(this.slidePos) + this.items[0].offsetWidth * this.CurrentLength >= this.items[0].offsetWidth * this.items.length) {
            this.rightButton.classList.add("hidden")
        } else {
            this.rightButton.classList.remove("hidden")
        }
    }

    translateSlider() {
        this.checkBoundary()
        this.itemContainer.style.transform = `translateX(${this.slidePos}px)`
    }

    slideToNext() {
        this.slidePos -= this.items[0].offsetWidth * this.CurrentLength
        this.translateSlider()
    }

    slideToPrev() {
        this.slidePos += this.items[0].offsetWidth * this.CurrentLength
        this.translateSlider()
    }
}

export { ProductSlider }
