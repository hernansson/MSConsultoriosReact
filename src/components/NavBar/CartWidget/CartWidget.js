import cart from '../img/cart.png'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import CartContext from '../../Context/CartContext'
import { Link } from 'react-router-dom'
export default function CartWidget() {

    const { cartCount } = useContext(CartContext)
    const [showCart, setCartShow] = useState(false)

    useEffect(() => {
        if (cartCount > 0) {
            setCartShow(true)
        } else {
            setCartShow(false)
        }
    }, [cartCount])



    return (
        <div>
            {showCart &&
                <div className=" flex ">
                    <span className="transform hover:scale-150  mr-6 transition duration-500"><Link to="/Cart"><img src={cart} width="40px" alt="" /></Link></span>
                    <span className=" font-bold  text-green-600 mr-8 text-4xl ">{cartCount}</span>
                </div>}
        </div>

    )
}