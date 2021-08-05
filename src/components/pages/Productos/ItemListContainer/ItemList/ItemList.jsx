import React from 'react'
import Item from './Item/Item'

const ItemList = (data) => {

    const { productos } = data

    return (
        <div className="products">
            {productos.map((prod, idx) => (
                < Item producto={prod} key={idx} />
            ))}

        </div>
    )
}

export default ItemList