import users from "../data/user.js"
export const getUserItem = () => {
    const userItems = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : localStorage.setItem("users", JSON.stringify(users))
    return userItems
}

export const setUserItem = items => {
    localStorage.setItem("users", JSON.stringify(items))
    return
}
