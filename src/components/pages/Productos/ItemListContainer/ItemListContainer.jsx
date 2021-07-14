import React from 'react'
import ProductDetail from './ProductDetail/ProductDetail'
import "../ItemListContainer/style.css"
import { useState } from 'react'
import ItemList from './ItemList/ItemList'



export default function ItemListContainer(props) {


    return (
        <div className="itemListContainer">
            <h1>{props.greetings}</h1>

            <ItemList />



        </div >
    )
}