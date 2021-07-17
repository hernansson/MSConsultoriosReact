import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Item from './Item/Item';
import "./ItemListContainer.css"
export default function ItemListContainer() {

    const ic = useRef(true);
    const [productos, setProductos] = useState([]);

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


    const fetchData = () => {
        let call = fetch('http://localhost:4000/Products', config)
            .then(res => res.json())
            .then(resp => setTimeout(() => {
                setProductos(resp)
            }, 0))
    }

    useEffect(() => {
        if (ic.current) {
            fetchData()
            ic.current = false;
        }
    }, [productos])

    return (
        <div className="productContainer">
            <div className="products">
                {productos.map((prod, idx) => (
                    <Item producto={prod} key={idx} />
                ))}
            </div>
        </div>
    )

}