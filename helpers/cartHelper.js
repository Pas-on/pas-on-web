export const getCartItem = () => {
    const cartItem = localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : []
    return cartItem
}

export const setCartItem = items => {
    localStorage.setItem("carts", JSON.stringify(items))
    return
}
