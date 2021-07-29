import React from "react"
import "./Cart.css"
import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import { useEffect } from "react"
import Item from "../Productos/ItemListContainer/Item/Item.jsx"


export default function Cart(){

    const {cartItems} = useContext(CartContext)
    console.log(cartItems)

    useEffect (()=>{

    },[cartItems])

    return(
        <div className="cartContainer">
            {cartItems.map((x)=>(
                <div> {`La cantidad comprada es: ${x.count}`}
                {`La cantidad comprada es: ${x.item.title}`}
                {`La cantidad comprada es: ${x.item.descripcion}`}
                <img src={x.item.image} alt="" />

               
                </div>)
               
            )}
        </div>
    )
}