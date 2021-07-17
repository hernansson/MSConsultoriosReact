import React from 'react'

export default function ButtonCust(props) {



    return (

        <button type="button" disabled={!props.isEnable} className="bg-green-400 hover:bg-green-800 text-white font-bold py-2 px-4 rounded "
            onClick={props.handleClick}>
            {props.txt}
        </button>

    )
}