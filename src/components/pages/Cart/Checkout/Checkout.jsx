import React, { useState } from 'react'
import CreditCard from './CreditCard/CreditCard'
import OrderForm from './OrderForm/OrderForm'

const Checkout = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [cardNumber, setCardNumber] = useState([])



    return (


        <div class="w-3/4 mx-auto py-44 ">

            <div class="w-full mx-auto xl:w-3/4  flex">
                <div class="w-full h-auto bg-gray-200 hidden 2xl:block lg:w-5/12 2xl:w-11/12  rounded-l-lg">
                    <CreditCard value={{ name, surname, cardNumber }} />
                </div>
                <div class="w-full  bg-white p-5 rounded-lg lg:rounded-l-none">
                    <OrderForm value={{ setName, setSurname, setCardNumber, cardNumber }} />
                </div>
            </div>

        </div>

    )
}

export default Checkout