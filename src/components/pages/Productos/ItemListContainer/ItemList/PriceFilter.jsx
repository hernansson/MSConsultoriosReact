
import React from 'react'
import { useState } from 'react'
import "./ItemList.css"

const PriceFilter = ({ value }) => {

    const { setOrderAsc, orderArray, orderAsc } = value
    const [show, setShow] = useState('hidden')
    const handleClick = () => {
        show === 'hidden' ? setShow('block') : setShow('hidden')
    }

    const handleOrder = () => {
        handleClick()
        setOrderAsc(!orderAsc)
        orderArray()
    }

    return (

        <div className=" flex justify-end mr-10">
            <div>
                <button className=" border-0 block bg-blue-600  text-gray-200 rounded-lg px-2 text-sm py-2 overflow-hidden focus:outline-none focus:border-white" onClick={handleClick}>
                    <div className="flex justify-between"> <span>Ordenar</span> <svg className="fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M7 10l5 5 5-5z" />
                        <path d="M0 0h24v24H0z" fill="none" /></svg> </div>
                </button>
                <div className={`${show} absolute mt-2 py-2 orderPrice bg-white rounded-lg shadow-xl z-50`}>
                    <button className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" onClick={handleOrder}>Mayor precio</button>
                    <button className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" onClick={handleOrder}>Menor Precio</button>
                </div>
            </div >
        </div >
    )
}

export default PriceFilter