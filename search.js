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
                location.href = `/search?q=${list.title}`
            })
            searchList.appendChild(item)
            searchList.style.height = `${item.clientHeight * 5}px`
        })
    }
})

searchForm.addEventListener("submit", e => {
    e.preventDefault()
    location.href = `/search?q=${searchInput.value}`
})
