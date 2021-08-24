import { Provider } from "./CartContext"
import { useState } from "react"
import React from "react";
import getStore from "../../firebase";
import firebase from "firebase";

const CustomProvider = ({ children }) => {

    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([])
    const [order, setOrder] = useState('')

    const addItem = (item, count) => {


        const indexId = cartItems.findIndex(e => e.item.id === item.id)

        if (indexId === -1) {
            setCartItems([...cartItems, { item, count }])
        } else {
            let copyArr = [...cartItems];
            copyArr[indexId].count = copyArr[indexId].count + count;
            setCartItems(copyArr)
        }
        setCartCount(cartCount + count)
    }

    const removeItem = id => {
        let copyArr = cartItems.filter(e => e.item.id !== id)
        setCartItems(copyArr)

    }

    const removeAll = () => {
        setCartCount(0)
        setCartItems([])
    }



    const updateStock = () => {

        cartItems.map((cartItem) => {
            const collection = getStore().collection('productos')
            let query = collection.doc(cartItem.item.id)
            query = query.update({ stock: firebase.firestore.FieldValue.increment(-(cartItem.count)) })
            return query
        })

    }

    const validateStock = async () => {


        const isAvailable = async (id, cant) => {
            const collection = getStore().collection('productos')
            let doc = await collection.doc(id).get()
            return ((doc.data().stock - cant) < 0)
        }


        const promises = cartItems.flatMap(async cartItem => {
            let hasStock = await isAvailable(cartItem.item.id, cartItem.count)

            return hasStock ? cartItem : []

        })

        const noStock = (await Promise.all(promises)).flat(1)

        return noStock


    }

    return (
        <Provider value={{ cartItems, addItem, cartCount, setCartCount, removeItem, setCartItems, removeAll, validateStock, updateStock, order, setOrder }}>
            {children}
        </Provider>
    )
}

export default CustomProvider