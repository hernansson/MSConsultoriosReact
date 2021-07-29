import React from "react"
import { useState } from "react"
import ButtonCust from "./ButtonCust"
import AddCart from "../AddCart/AddCart"
export default function ItemCount(props) {

    

    let enableAdd = true;
    let enableSub = true;

    const addCount = () => {
        console.log("el count es", props.count)
        if (props.count > (props.stock - 1)) {
            enableAdd = false
        } else {
            props.setCount(props.count + 1)


        }

    }
    const subCount = () => {
        if (props.count === 0) {
            enableSub = false
        } else {
            props.setCount(props.count - 1)


        }

    }


    return (
        <div>
            <ButtonCust handleClick={addCount} isEnable={enableAdd} txt="+"></ButtonCust>
            <input className="text-center" readOnly={true} value={props.count} />
            <ButtonCust handleClick={subCount} isEnable={enableSub} txt="-"></ButtonCust>

            <div>
                <AddCart stock={props.stock} count={props.count} update={props.update} setCount={props.setCount} setShow={props.setShow} addItem={props.addItem} item={props.item} cartCount={props.cartCount} setCartCount={props.setCartCount}/>
            </div>
        </div >
    )
}