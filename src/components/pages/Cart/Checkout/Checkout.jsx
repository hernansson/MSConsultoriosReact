import React, { useState } from 'react'
import CreditCard from './CreditCard/CreditCard'
import OrderForm from './OrderForm/OrderForm'
import { useParams } from 'react-router'
import getStore from '../../../../firebase'
import CartContext from '../../../Context/CartContext'
import { useContext } from 'react'




const Checkout = () => {

    const { validateStock, updateStock, setCartCount, setCartItems } = useContext(CartContext)
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


    const updateOrder = () => {
        const collection = getStore().collection('ordenes')
        let query = collection.doc(orderId)
        query = query.update({ buyer: { name: name, surname: surname, email: email, phone: phone }, paid: true })
        query.then(() => {
            console.log("se hizo bien el update")
            setIsPaid(true)
        })

    }

    const updateAll = async (e) => {
        e.preventDefault();

        let noStockItem = await validateStock()

        if (noStockItem.length === 0) {
            await updateStock()

            setCartCount(0)

            setCartItems([])

            updateOrder()
        }


    }

    /*  const getOrder = () => {
          const collection = getStore().collection('ordenes')
          let query = collection.doc(orderId).get()
          query
              .then((doc) => {
                  console.log("CARGAR ORDEN..")
                  setTotal(doc.data().total)
              })
      }
  */

    return (
        <div>
            {!isPaid ?

                <div className="w-3/4 mx-auto py-44 " >
                    <span>{orderId}</span>
                    <span>{`    ${total}`}</span>
                    <div className="w-full mx-auto xl:w-3/4  shadow-2xl rounded-3xl flex">
                        <div className="w-full h-auto bg-gray-200 hidden 2xl:block lg:w-5/12 2xl:w-11/12  rounded-l-lg">
                            <CreditCard value={{ name, surname, cardNumber, cvv, expiry }} />

                        </div>
                        <div className="w-full  bg-white p-5 rounded-lg lg:rounded-l-none">
                            <OrderForm value={{ setName, setSurname, setCardNumber, cardNumber, expiry, setExpiry, setCvv, setEmail, updateAll, setPhone }} />
                        </div>
                    </div>

                </div>
                :
                <div className=" text-center pt-48 ">
                    <span className=" font-bold  text-2xl text-pink-400">MUCHAS GRACIAS POR SU COMPRA!</span>
                    <img className="mx-auto mt-5 mb-5" src="https://c.tenor.com/n9u7zcGqlUQAAAAi/cute-hamster.gif" alt="" />
                </div>

            }
        </div>


    )
}

export default Checkout