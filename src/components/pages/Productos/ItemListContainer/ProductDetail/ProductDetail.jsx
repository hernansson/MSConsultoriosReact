import React from "react"

import { useState, useEffect } from "react"
import { ItemCount } from "./ItemCount/ItemCount"

export default function ProductDetail(props) {

    const [Stock, setStock] = useState(props.product.stock)

    /*useContext*/
    const updateStock = (quanty) => {

        setStock(quanty)

    }

    return (
        <div>
            {
                <div className="product" >
                    <h1>{props.product.name}</h1>
                    <h2>Price: {props.product.cost}</h2>
                    <h3>Stock: {Stock}</h3>
                    <img src={props.product.img} alt="" />
                    <div>
                        <ItemCount update={updateStock} stock={props.product.stock} />
                    </div>

                </div>
            }
        </div>
    )
}