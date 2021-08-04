import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Item from './Item/Item';
import "./ItemListContainer.css"
import Loading from '../../../Loading/Loading';
import getStore from '../../../../firebase';
export default function ItemListContainer() {

    const ic = useRef(true);
    let fetchStatus = useRef(false);
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
        fetch('http://localhost:4000/Products', config)
            .then(res => res.json())
            .then(resp => setTimeout(() => {
                console.log(resp)
                fetchStatus.current = true
                console.log("seteo fetch en", fetchStatus.current)
                setProductos(resp)

            }, 3000))
    }

    useEffect(() => {

        fetchData();




    }, [])
    //preguntar aca arriba
    return (

        <div>
            {console.log("el fetch stats en laoding es :", fetchStatus.current)}
            {fetchStatus.current == false ?
                <div className="loading">

                    <Loading />
                </div> :
                <div className="products">
                    {productos.map((prod, idx) => (
                        < Item producto={prod} key={idx} />
                    ))}

                </div>
            }
        </div>
    )

}