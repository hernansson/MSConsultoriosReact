import React, { useState } from 'react'
import CreditCard from './CreditCard/CreditCard'
import OrderForm from './OrderForm/OrderForm'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import getStore from '../../../../firebase'
import CartContext from '../../../Context/CartContext'
import { useContext } from 'react'

const Checkout = () => {

    const { validateStock, updateStock } = useContext(CartContext)
    const [name, setName] = useState('Debora Meltrozo')
    const [surname, setSurname] = useState('')
    const [cardNumber, setCardNumber] = useState(['****', '****', '****', '****'])
    const [expiry, setExpiry] = useState(['MM', 'aaaa'])
    const [cvv, setCvv] = useState('***')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState(1554545454)
    const { orderId } = useParams()
    const [isPaid, setIsPaid] = useState(false)

    const updateOrder = () => {
        const collection = getStore().collection('ordenes')
        let query = collection.doc(orderId)
        query = query.update({ buyer: { name: name, surname: surname, email: email, phone: phone }, paid: true })
        query.then(() => {
            setIsPaid(true)
        })

    }


    const updateAll = async (e) => {
        e.preventDefault();
        console.log("before", noStockItem)
        let noStockItem = await validateStock()

        console.log("after", noStockItem)

        if (noStockItem.length == 0) {
            let upd = await updateStock()

            console.log("termio updatestock")
            updateOrder()

        }


    }


    return (
        <div>
            {!isPaid ?

                <div class="w-3/4 mx-auto py-44 " >

                    <div class="w-full mx-auto xl:w-3/4  shadow-2xl rounded-3xl flex">
                        <div class="w-full h-auto bg-gray-200 hidden 2xl:block lg:w-5/12 2xl:w-11/12  rounded-l-lg">
                            <CreditCard value={{ name, surname, cardNumber, cvv, expiry }} />

                        </div>
                        <div class="w-full  bg-white p-5 rounded-lg lg:rounded-l-none">
                            <OrderForm value={{ setName, setSurname, setCardNumber, cardNumber, expiry, setExpiry, setCvv, setEmail, updateAll, setPhone }} />
                        </div>
                    </div>

                </div>
                :

                "Gracias por su compra"
            }
        </div>


    )
}

export default Checkout