import React from "react"
import { useState } from "react"
import ButtonCust from "./ButtonCust"
import AddCart from "../AddCart/AddCart"
export default function ItemCount(props) {

    const [count, setCount] = useState(0)
    /*   const [enableAdd, setEnableAdd] = useState(true)
       const [enableSub, setEnableSub] = useState(false)
   
       if (count == 0) {
           setEnableSub(false)
       } else {
           setEnableSub(true)
       }
   
       if (count > 19) {
           setEnableAdd(false)
       }
   */
    let enableAdd = true;
    let enableSub = true;


    const addCount = () => {
        console.log("el count es", count)
        if (count > (props.stock - 1)) {
            enableAdd = false
        } else {
            setCount(count + 1)


        }

    }
    const subCount = () => {
        if (count == 0) {
            enableSub = false
        } else {
            setCount(count - 1)


        }

    }







    return (
        <div>
            <ButtonCust handleClick={addCount} isEnable={enableAdd} txt="+"></ButtonCust>
            <input className="text-center" readOnly={true} value={count} />
            <ButtonCust handleClick={subCount} isEnable={enableSub} txt="-"></ButtonCust>

            <div>
                <AddCart stock={props.stock} count={count} update={props.update} setCount={setCount} />
            </div>
        </div >
    )
}