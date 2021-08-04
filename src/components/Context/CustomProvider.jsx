import { Provider } from "./CartContext"
import { useState } from "react"
import React from "react";
const CustomProvider = ({ children }) => {

    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([])

    const addItem = (item, count) => {


        const indexId = cartItems.findIndex(e => e.item.id == item.id)

        if (indexId == -1) {
            setCartItems([...cartItems, { item, count }])
        } else {
            let copyArr = cartItems;
            copyArr[indexId].count = copyArr[indexId].count + count;
            setCartItems(copyArr)
        }
        setCartCount(cartCount + count)
    }

    const removeItem = id => {
        let copyArr = cartItems.filter(e => e.item.id != id)
        setCartItems(copyArr)

    }

    const removeAll = () => {
        setCartCount(0)
        setCartItems([])
    }
    return (
        <Provider value={{ cartItems, addItem, cartCount, setCartCount, removeItem, setCartItems, removeAll }}>
            {children}
        </Provider>
    )
}

export default CustomProvider