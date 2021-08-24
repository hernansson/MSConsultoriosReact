import React from "react"
import { useState } from "react"


export default function ItemCount({ value }) {


    const [disableMinus, setdisableMinus] = useState(true)
    const [disablePlus, setdisablePlus] = useState(false)

    const { stock, count, setCount } = value


    const addCount = () => {


        count === stock - 1 ? setdisablePlus(true) : null
        count === 0 ? setdisableMinus(false) : null
        setCount(count + 1)


    }
    const subCount = () => {


        count === 1 ? setdisableMinus(true) : null
        count === stock ? setdisablePlus(false) : null
        setCount(count - 1)

    }

    return (
        <div>

            <div className="flex flex-row h-10 rounded-lg ">
                <button className="bg-gray-300 text-gray-600 w-1/5 hover:text-gray-700 hover:bg-gray-400 h-full  rounded-r cursor-pointer" disabled={disablePlus} onClick={addCount}>
                    <span className="m-auto text-2xl font-thin">+</span>
                </button>
                <input type="number" className="outline-none focus:outline-none text-center w-2/5 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 " readOnly={true} value={count}></input>

                <button className=" bg-gray-300 text-gray-600 w-1/5 hover:text-gray-700 hover:bg-gray-400 h-full  rounded-l cursor-pointer outline-none" disabled={disableMinus} onClick={subCount} >
                    <span className="m-auto text-2xl font-thin">−</span>
                </button>

            </div>
        </div >
    )
}