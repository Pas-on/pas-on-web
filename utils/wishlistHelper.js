export const getWishlistItem = () => {
    const wishlistItems = localStorage.getItem("wishlists") ? JSON.parse(localStorage.getItem("wishlists")) : []
    return wishlistItems
}

export const setWishlistItem = items => {
    localStorage.setItem("wishlists", JSON.stringify(items))
    return
}
