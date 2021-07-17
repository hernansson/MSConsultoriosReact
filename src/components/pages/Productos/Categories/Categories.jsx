import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect, useRef } from 'react'
import Item from '../ItemListContainer/Item/Item'
import { Link } from 'react-router-dom'


export default function Categories() {

    const [categories, setCategories] = useState([]);
    const { categoriaID } = useParams();

    let initialRender = useRef(true);

    const config = {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow'

    }

    const getCategories = () => {

        let call = fetch(`http://localhost:4000/product/category/${categoriaID}`, config)
            .then(data => data.json())
            .then(dataJson =>
                //Pedido en un desafio a entregar
                setTimeout(() => {
                    console.log(dataJson)
                    setCategories(dataJson)
                }, 2000)
            )
    }

    useEffect(() => {
        if (initialRender) {

            getCategories()
            initialRender = false;
        }
    }, [categoriaID])

    return (
        <div className="productContainer">
            <div className="products">
                {categories.map((cat, idx) => (
                    <Link to={`/Detalle/${cat.title}/${cat.id}`}><Item producto={cat} key={idx} /></Link>
                ))}
            </div>
        </div>
    )
}