import products from "./data/products.js"
const searchInput = document.querySelector("#search-input")
const searchForm = document.querySelector(".search-form")
const searchList = document.querySelector(".list-search")

searchInput.addEventListener("input", e => {
    const query = e.target.value.toLowerCase()
    const autoCompleteList = products.filter(product => product.title.toLowerCase().includes(query))
    searchList.innerHTML = ""
    if (!autoCompleteList.length) {
        const item = document.createElement("li")
        item.innerText = "product not found"
        searchList.appendChild(item)
    } else if (!query) {
        searchList.innerHTML = ""
    } else {
        autoCompleteList.forEach((list, idx) => {
            const item = document.createElement("li")
            item.setAttribute("tabindex", idx)
            const index = list.title.toLowerCase().indexOf(query)
            const boldedTitle = `${list.title.substring(0, index)}<strong>${list.title.substring(
                index,
                index + query.length
            )}</strong>${list.title.substring(index + query.length)}`
            item.innerHTML = boldedTitle
            item.addEventListener("click", () => {
                location.href = `/search/index.html?q=${list.title}`
            })
            searchList.appendChild(item)
            searchList.style.height = `${item.clientHeight * 5}px`
        })
    }
})

searchForm.addEventListener("submit", e => {
    e.preventDefault()
    location.href = `/search/index.html?q=${searchInput.value}`
})

const searchInputMobile = document.querySelector("#search-input-mobile")
const searchFormMobile = document.querySelector(".search-form-mobile")
const searchListMobile = document.querySelector("#list-search-mobile")
searchInputMobile.addEventListener("input", e => {
    const query = e.target.value.toLowerCase()
    const autoCompleteList = products.filter(product => product.title.toLowerCase().includes(query))
    searchListMobile.innerHTML = ""
    if (!autoCompleteList.length) {
        const item = document.createElement("li")
        item.innerText = "product not found"
        searchListMobile.appendChild(item)
    } else if (!query) {
        searchListMobile.innerHTML = ""
    } else {
        autoCompleteList.forEach((list, idx) => {
            const item = document.createElement("li")
            item.setAttribute("tabindex", idx)
            const index = list.title.toLowerCase().indexOf(query)
            const boldedTitle = `${list.title.substring(0, index)}<strong>${list.title.substring(
                index,
                index + query.length
            )}</strong>${list.title.substring(index + query.length)}`
            item.innerHTML = boldedTitle
            item.addEventListener("click", () => {
                location.href = `/search/index.html?q=${list.title}`
            })
            searchListMobile.appendChild(item)
            searchListMobile.style.height = `${item.clientHeight * 5}px`
        })
    }
})

searchFormMobile.addEventListener("submit", e => {
    e.preventDefault()
    location.href = `/search/index.html?q=${searchInputMobile.value}`
})

// toggle search bar mobile
const backButton = document.querySelector(".back-button")
backButton.addEventListener("click", () => {
    searchFormMobile.style.transform = "translateX(-100%)"
})

const searchIcon = document.querySelector("#search-icon")
searchIcon.addEventListener("click", () => {
    searchFormMobile.style.transform = "translateX(0)"
})

//popover
const popAction = document.querySelector(".profile")
const dropDown = document.querySelector(".drop-down-profile")
popAction.addEventListener("click", () => {
    console.log(popAction)
    dropDown.classList.toggle("active")
})
