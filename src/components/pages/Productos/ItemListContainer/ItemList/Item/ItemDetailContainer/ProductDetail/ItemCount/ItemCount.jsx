import React from "react"
import { useState } from "react"
import AddCart from "../AddCart/AddCart"

export default function ItemCount({ value }) {

    const [count, setCount] = useState(0)
    const [showMinus, setShowMinus] = useState(false)
    const [showPlus, setShowPlus] = useState(true)

    const { stock, onAdd } = value


    const addCount = () => {
        if (count < stock) {
            if (count === stock - 1) {
                setShowPlus(false)
            }
            if (count === 0) {
                setShowMinus(true)
            }
            setCount(count + 1)

        }
    }
    const subCount = () => {
        if (count === 1) {
            setShowMinus(false)
        }
        if (count === stock) {
            setShowPlus(true)
        }
        setCount(count - 1)

    }

    return (
        <div>

            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                {showPlus && <button className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer" onClick={addCount}>
                    <span className="m-auto text-2xl font-thin">+</span>
                </button>}
                <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 " readOnly={true} value={count}></input>

                {showMinus && <button className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none" onClick={subCount} >
                    <span className="m-auto text-2xl font-thin">−</span>
                </button>}
                <AddCart value={{ onAdd, count, setCount }}
                />
            </div>
        </div >
    )
}