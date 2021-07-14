import React from 'react'
import { ItemCount } from '../../ProductDetail/ItemCount/ItemCount'
import { useState } from 'react'

export default function Item(data) {

    const [Stock, setStock] = useState(data.producto.stock)

    /*useContext*/
    const updateStock = (quanty) => {

        setStock(quanty)

    }

    return (
        <div>
            {
                <div className="product" >
                    <h1>{data.producto.id}</h1>
                    <h2>Price: {data.producto.price}</h2>
                    <h3>Stock: {Stock}</h3>
                    <img src={data.producto.image} alt="" />
                    <h4>{data.producto.descripcion}</h4>
                    <div>
                        <ItemCount update={updateStock} stock={data.producto.stock} />
                    </div>

                </div>
            }
        </div>
    )
}