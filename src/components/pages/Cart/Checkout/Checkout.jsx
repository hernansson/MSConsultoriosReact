import React, { useState, useEffect } from 'react'
import CreditCard from './CreditCard/CreditCard'
import OrderForm from './OrderForm/OrderForm'
import { useParams } from 'react-router'
import getStore from '../../../../firebase'
import CartContext from '../../../Context/CartContext'
import { useContext } from 'react'
import LoadingOrder from './LoadingOrder/LoadingOrder'
import Thanks from './Thanks/Thanks'
import { useHistory } from 'react-router'




const Checkout = () => {

    const { validateStock, updateStock, setCartCount, setCartItems, setOrder } = useContext(CartContext)
    const { orderId } = useParams()
    const [name, setName] = useState('Debora Meltrozo')
    const [surname, setSurname] = useState('')
    const [cardNumber, setCardNumber] = useState(['****', '****', '****', '****'])
    const [expiry, setExpiry] = useState(['MM', 'aaaa'])
    const [cvv, setCvv] = useState('***')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState(1554545454)
    const [total, setTotal] = useState(0)
    const [isPaid, setIsPaid] = useState(false)
    const [showLoadingOrder, setShowLoadingOrder] = useState(true)
    let history = useHistory()


    const updateOrder = () => {
        const collection = getStore().collection('ordenes')
        let query = collection.doc(orderId)
        query = query.update({ buyer: { name: name, surname: surname, email: email, phone: phone }, paid: true })
        query.then(() => {

            setIsPaid(true)
        })

    }

    const updateAll = async () => {


        let noStockItem = await validateStock()

        if (noStockItem.length === 0) {
            await updateStock()

            setCartCount(0)
            setOrder('')

            setCartItems([])

            updateOrder()
        } else {
            alert("Se acabo el Stock :(")
            history.push('/Cart')
        }


    }

    useEffect(() => {
        getOrder()
    }, [])

    const getOrder = () => {
        const collection = getStore().collection('ordenes')
        let query = collection.doc(orderId).get()
        query
            .then((doc) => {

                if (!doc.data().paid) {
                    setTimeout(() => {

                        setOrder(orderId)
                        setCartItems(doc.data().products)
                        setTotal(doc.data().total)
                        let sum = getCount(doc.data().products)
                        setCartCount(sum)
                        setShowLoadingOrder(false)
                    }, 2000)
                } else {
                    alert("Orden ya pagada.")
                    history.push("../../")

                }





            })
            .catch((err) => {
                console.log(err)
                alert("Numero de Orden Invalido")
                history.push("../../")
            })


    }


    return (
        <div>
            {showLoadingOrder ?
                <LoadingOrder />
                : isPaid ?
                    <Thanks />
                    :
                    <div className="w-3/4 mx-auto py-44 " >
                        <div className="w-1/2 border-2 border-red-400 rounded-lg mx-auto text-center mb-5 ">
                            <span className="text-lg font-bold">{`Su codigo de orden es #${orderId}`}</span>
                            <span className="text-lg font-bold text-red-600">{` Precio total: ${total}`}</span>
                        </div>
                        <div className="w-full mx-auto   shadow-2xl rounded-3xl flex">
                            <div className=" h-auto bg-gray-200 hidden 2xl:block lg:w-5/12 2xl:w-11/12  rounded-l-lg">
                                <CreditCard value={{ name, surname, cardNumber, cvv, expiry }} />

                            </div>
                            <div className="w-full  bg-white p-5 rounded-lg lg:rounded-l-none">
                                <OrderForm value={{ email, setName, setSurname, setCardNumber, cardNumber, expiry, setExpiry, setCvv, setEmail, updateAll, setPhone }} />
                            </div>
                        </div>

                    </div>


            }

        </div>


    )
}

const getCount = (list) => {

    let sum = list.reduce((acc, elem) => {
        return acc + elem.count
    }, 0)

    return sum
}

export default Checkout