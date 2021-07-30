import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect, useRef } from 'react'
import ItemDetail from './ProductDetail/ItemDetail';


export default function ItemDetailContainer() {




    const [itemDetail, setItemDetail] = useState([]);
    const { iD } = useParams();
    

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

    const getItemDetail = () => {

        let call = fetch(`http://localhost:4000/product/${iD}`, config)
            .then(data => data.json())
            .then(dataJson =>
                //Pedido en un desafio a entregar
                setTimeout(() => {
                    console.log(dataJson)
                    setItemDetail(dataJson)
                }, 0)
            )
    }

    useEffect(() => {
        if (initialRender) {

            getItemDetail()
            initialRender = false;
        }
    }, [iD])

    return (
        <div className="Itemdetail py-20">


            {itemDetail.map((item) => (
 
                <ItemDetail item={item} />
            ))}


        </div>
    )
}