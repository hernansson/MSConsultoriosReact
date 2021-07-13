import React from "react"

import { useState, useEffect } from "react"
import { ItemCount } from "./ItemCount/ItemCount"
import Button from "./ItemCount/ButtonCust"
export default function ProductDetail(props) {

    const [Stock, setStock] = useState(props.product.stock)



    const updateStock = (quanty) => {
        console.log("Stock is being modify")
        console.log(Stock)
        setStock(quanty)
        console.log(Stock)


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