import { Provider } from "./CartContext"
import { useState } from "react"
import React from "react";
import getStore from "../../firebase";

const CustomProvider = ({ children }) => {

    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([])

    const addItem = (item, count) => {


        const indexId = cartItems.findIndex(e => e.item.id == item.id)

        if (indexId == -1) {
            setCartItems([...cartItems, { item, count }])
        } else {
            let copyArr = [...cartItems];
            copyArr[indexId].count = copyArr[indexId].count + count;
            setCartItems(copyArr)
        }
        setCartCount(cartCount + count)
    }

    const removeItem = id => {
        let copyArr = cartItems.filter(e => e.item.id != id)
        setCartItems(copyArr)

    }

    const removeAll = () => {
        setCartCount(0)
        setCartItems([])
    }



    /* const updateStock = () => {
         const collection = getStore().collection('productos')
         cartItems.map((e) => {
             let query = collection.doc(e.item.id)
             let getQuery = query.get()
             getQuery
 
         })
         let query = collection.doc(orderId)
         query = query.update({ user: { name: name, surname: surname, email: email }, paid: true })
         query.then(() => {
             alert("Compra realizada!")
         })
 
     }*/

    const validateStock = () => {


        let promise = new Promise((res) => {
            let hasStock = true;
            for (let i = 0; i < cartItems.length; i++) {
                const collection = getStore().collection('productos')

                let getQuery = collection.doc(cartItems[i].item.id).get()
                getQuery
                    .then((doc) => {
                        console.log("COUNT DENTRO DEL THEN", cartItems[i].count)
                        if ((doc.data().stock - cartItems[i].count) < 0) {
                            hasStock = false

                            if (i == cartItems.length) {
                                res(hasStock)
                            }

                        }
                    })

            }

        })

        promise.then((status) => {
            console.log("SSTATUS", status)
            return status
        })



    }

    return (
        <Provider value={{ cartItems, addItem, cartCount, setCartCount, removeItem, setCartItems, removeAll, validateStock }}>
            {children}
        </Provider>
    )
}

export default CustomProvider