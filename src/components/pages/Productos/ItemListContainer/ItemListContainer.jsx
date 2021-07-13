import React from 'react'
import ProductDetail from './ProductDetail/ProductDetail'
import "../ItemListContainer/style.css"
import { useState } from 'react'
import imgVaccine from "./img/vaccine.jpg"
import actron from "./img/actron.webp"
import balanza from "./img/balanza.jpg"
import aspirina from "./img/aspirina.jpg"
import bisolvon from "./img/bisolvon.png"

export default function ItemListContainer(props) {

    const [products, setProducts] = useState([
        {
            name: 'Vacuna Codiv-19',
            cost: '$59000',
            stock: 15,
            img: imgVaccine
        },
        {
            name: 'Ibuprofeno',
            cost: '$35',
            stock: 30,
            img: actron
        }
        ,
        {
            name: 'Balanza Medica',
            cost: '$12000',
            stock: 5,
            img: balanza
        }
        ,
        {
            name: 'Aspirina',
            cost: '$369',
            stock: 100,
            img: aspirina
        }
        ,
        {
            name: 'bisolvon',
            cost: '$150',
            stock: 8,
            img: bisolvon
        }

    ])

    return (
        <div className="itemListContainer">
            <h1>{props.greetings}</h1>

            <div className="products">
                {products.map((prod, idx) => (
                    <ProductDetail product={prod} key={idx} />
                ))
                }
            </div>
        </div>
    )
}