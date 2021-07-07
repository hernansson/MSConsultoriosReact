import React from 'react'

export default function ItemListContainer(props) {
    return (
        <div className="itemListContainer">
            <h1>{props.greetings}</h1>
            <h2 >Ya llegaste</h2>
        </div>
    )
}