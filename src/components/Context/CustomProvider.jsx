import { Provider } from "./CartContext"
import { useState } from "react"
import React from "react";
const CustomProvider = ({children}) =>{

    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([])

    const addItem = (item,count) =>{
        
        setCartItems([...cartItems,{item,count}])
    }

    return(
        <Provider value={{cartItems, addItem,cartCount,setCartCount}}>
            {children}
        </Provider>
    )
}

export default CustomProvider