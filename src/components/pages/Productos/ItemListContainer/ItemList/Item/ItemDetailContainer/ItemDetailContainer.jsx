import React from 'react'
import { useParams } from 'react-router'
import { useState, useEffect, useRef } from 'react'
import ItemDetail from './ProductDetail/ItemDetail';
import getStore from '../../../../../../../firebase';
import { useHistory } from 'react-router';
import Loading from '../../../../../../Loading/Loading';


export default function ItemDetailContainer() {




    const [itemDetail, setItemDetail] = useState([]);
    const { iD } = useParams();
    let fetchStatus = useRef(false);
    const history = useHistory()



    useEffect(() => {



        if (iD) {

            const firestore = getStore()
            const collection = firestore.collection("productos")
            let query = collection.doc(iD).get()
            query
                .then(doc => {
                    if (doc.exists) {
                        fetchStatus.current = true
                        setItemDetail({ id: doc.id, ...doc.data() })
                    } else {
                        alert("Producto inexistente")
                        history.push("/Productos")
                    }
                })
                .catch(err => {
                    console.log(err)
                })


        } else {

            /*YA VEREMOS*/
        }
    }, [iD])

    return (
        <div className="Itemdetail py-20">

            {fetchStatus.current === false ?
                <div className="loading">

                    <Loading />
                </div> :
                <div>
                    <ItemDetail item={itemDetail} />
                </div>
            }

        </div>
    )
}