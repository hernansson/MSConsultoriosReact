import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Item from './Item/Item';
export default function ItemList() {

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

    const fetchData = async () => {
        let call = fetch('http://localhost:4000/Products', config)
            .then(res => res.json())
            .then(resp => setProductos(resp))

    }
    useEffect(() => {
        if (ic.current) {
            fetchData()
            ic.current = false;
        }
    })


    return (
        <div className="products">
            {productos.map((prod, idx) => (
                <Item producto={prod} key={idx} />

            ))}
        </div >
    )

}