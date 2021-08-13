import React, { useState } from 'react'
import { useContext } from 'react'
import CartContext from '../../../Context/CartContext'


const ItemCountCart = ({ itemQ, cartCount, setCartCount, CartItem }) => {

    const { addItem } = useContext(CartContext)

    const [iCount, setICount] = useState(itemQ)

    const [showPlus, setShowPlus] = useState(() => {
        return itemQ === CartItem.stock ? false : true
    })
    const [showMinus, setShowMinus] = useState(() => {
        return itemQ === 1 ? false : true

    })

    const addOne = () => {
        if (iCount < CartItem.stock) {
            if (iCount === CartItem.stock) {
                setShowPlus(false)
            }
            if (iCount === 1) {
                setShowMinus(true)
            }

            addItem(CartItem, 1)
            setCartCount(cartCount + 1)
            setICount(iCount + 1)
        }

    }
    const subsOne = () => {

        if (iCount === 2) {
            setShowMinus(false)
        }
        if (iCount === CartItem.stock) {
            setShowPlus(true)
        }
        addItem(CartItem, -1)
        setCartCount(cartCount - 1)
        setICount(iCount - 1)



    }





    return (
        <div className='block'>
            {showPlus ? <button onClick={addOne} >+ </button> : null}
            <input type="text" className="text-center" size="2" readOnly={true} value={iCount} />
            {showMinus ? <button onClick={subsOne}> -</button> : null}
        </div>
    )
}

export default ItemCountCart