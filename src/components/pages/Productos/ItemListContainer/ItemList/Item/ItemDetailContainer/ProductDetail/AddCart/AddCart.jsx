import React from 'react'

export default function AddCart({ value }) {

    const { onAdd, count } = value

    const add = () => {
        onAdd(count)
    }


    return (
        <div>
            <button type="button" className=" bg-red-400 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" onClick={add} >
                Add to Cart
            </button>
        </div>
    )
}
