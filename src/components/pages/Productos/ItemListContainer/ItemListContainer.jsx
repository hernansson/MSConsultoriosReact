import React from 'react';
import { useEffect, useState, useRef } from 'react';
import "./ItemListContainer.css"
import Loading from '../../../Loading/Loading';
import getStore from '../../../../firebase';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList/ItemList';
export default function ItemListContainer() {

    const ic = useRef(true);
    let fetchStatus = useRef(false);
    const [productos, setProductos] = useState([]);
    const { id } = useParams()

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


        const firestore = getStore()
        const collection = firestore.collection("productos")

        if (!id) {

            const query = collection.get()
            query
                .then((snapshot) => {
                    const documentos = snapshot.docs
                    const productos = documentos.map((doc) => {
                        return { id: doc.id, ...doc.data() }
                    })

                    setTimeout(() => {
                        fetchStatus.current = true
                        setProductos(productos)
                    }, 2000)


                })
                .catch((error) => {
                    console.log(error)
                })
        } else {

            let query = collection.where("categoria", "==", id)
            /* query = query.where("price",">",4000) */
            query = query.get()
            query
                .then((snapshot) => {
                    const documentos = snapshot.docs
                    const productos = documentos.map((doc) => {
                        return { id: doc.id, ...doc.data() }
                    })

                    fetchStatus.current = true
                    setProductos(productos)

                })
                .catch((error) => {
                    console.log(error)
                })
        }

    }, [id])
    //preguntar aca arriba
    return (

        <div>
            {console.log("el fetch stats en laoding es :", fetchStatus.current)}
            {fetchStatus.current == false ?
                <div className="loading">

                    <Loading />
                </div> :
                <div>
                    <ItemList productos={productos} />
                </div>
            }
        </div>
    )

}