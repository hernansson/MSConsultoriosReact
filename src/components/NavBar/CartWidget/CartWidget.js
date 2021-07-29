import cart from '../img/cart.png'
import React from 'react'
import { useContext } from 'react'
import CartContext from '../../Context/CartContext'
export default function CartWidget() {

    const {cartCount} = useContext(CartContext)
    return (
        <div className="">
            <img src={cart} width="40px" alt="" />
            {cartCount}
        </div>
    )
}