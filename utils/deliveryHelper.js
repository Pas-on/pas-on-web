export const getDeliveryItem = () => {
    const deliveryItem = localStorage.getItem("deliveries") ? JSON.parse(localStorage.getItem("deliveries")) : []
    return deliveryItem
}

export const setDeliveryItem = items => {
    localStorage.setItem("deliveries", JSON.stringify(items))
    return
}
