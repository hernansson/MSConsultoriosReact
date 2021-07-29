import React from 'react'

export default function AddCart(props) {

    const upd = () => {
        props.update(props.stock - props.count)
        props.setCount(0)
        props.setShow(true)
        props.addItem(props.item,props.count)
        props.setCartCount(props.cartCount + props.count)
        
    }

    return (
        <div>
            <button type="button" className="bg-red-400 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" onClick={upd} >
                Add to Cart
            </button>
        </div>
    )
}