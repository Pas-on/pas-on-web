export const getDeliveryItem = () => {
    const DeliveryItem = localStorage.getItem("Deliverys") ? JSON.parse(localStorage.getItem("Deliverys")) : []
    return DeliveryItem
}

export const setDeliveryItem = items => {
    localStorage.setItem("Deliverys", JSON.stringify(items))
    return
}
