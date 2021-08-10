import React from 'react'

const OrderForm = ({ value }) => {

    const { setName, setSurname, setCardNumber, cardNumber, expiry, setExpiry, setCvv, setEmail, updateOrder, setPhone } = value

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleSurname = (e) => {
        setSurname(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleCardNumber1 = (e) => {

        let copyArr = [...cardNumber]
        copyArr[0] = e.target.value
        setCardNumber(copyArr)
    }
    const handleCardNumber2 = (e) => {

        let copyArr = [...cardNumber]
        copyArr[1] = e.target.value
        setCardNumber(copyArr)
    }
    const handleCardNumber3 = (e) => {

        let copyArr = [...cardNumber]
        copyArr[2] = e.target.value
        setCardNumber(copyArr)
    }
    const handleCardNumber4 = (e) => {

        let copyArr = [...cardNumber]
        copyArr[3] = e.target.value
        setCardNumber(copyArr)
    }
    const handleCvv = (e) => {
        setCvv(e.target.value)
    }

    const handleExpiry1 = (e) => {
        let cpy = [...expiry]
        cpy[0] = e.target.value
        setExpiry(cpy)
    }

    const handleExpiry2 = (e) => {
        console.log(expiry)
        let cpy = [...expiry]
        cpy[1] = e.target.value
        setExpiry(cpy)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }



    return (



        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={updateOrder}>
            <h3 class="pt-2 py-6 text-2xl text-center">Complete sus datos</h3>
            <div class="mb-4 md:flex md:justify-between ">
                <div class="mb-4 md:mr-2 md:mb-0">
                    <label class=" mb-2 text-sm font-bold text-gray-700" for="firstName">
                        First Name
                    </label>
                    <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        required="true"
                        maxlength="10"
                        onChange={handleName}
                    />
                </div>
                <div class="md:ml-2">
                    <label class=" mb-2 text-sm font-bold text-gray-700" for="lastName">
                        Last Name
                    </label>
                    <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        required="true"
                        maxlength="10"
                        onChange={handleSurname}
                    />
                </div>
            </div>


            <div class="mb-4 md:flex md:justify-between ">
                <div class="mb-4 md:mr-2 md:mb-0">
                    <label class=" mb-2 text-sm font-bold text-gray-700" for="firstName">
                        Numero de la tarjeta
                    </label>
                    <p>
                        <input
                            class="w-full lg:w-1/5 px-3 py-2 text-sm text-center leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="****"
                            required="true"
                            maxlength="4"
                            onChange={handleCardNumber1}
                        />
                        <span>{` - `}</span>
                        <input
                            class="w-full lg:w-1/5 px-3 py-2 text-sm text-center leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="****"
                            required="true"
                            maxlength="4"
                            onChange={handleCardNumber2}
                        />
                        <span>{` - `}</span>
                        <input
                            class="w-full lg:w-1/5 px-3 py-2 text-sm text-center leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="****"
                            required="true"
                            maxlength="4"
                            onChange={handleCardNumber3}
                        />
                        <span>{` - `}</span>
                        <input
                            class="w-full lg:w-1/5 px-3 py-2 text-sm text-center leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="****"
                            required="true"
                            maxlength="4"
                            onChange={handleCardNumber4}
                        />
                    </p>
                </div>

            </div>


            <div class="mb-4 md:flex md:justify-between ">
                <div class="mb-4 md:mr-2 md:mb-0">
                    <label class=" mb-2 text-sm font-bold text-gray-700" for="firstName">
                        Expira
                    </label>
                    <p>
                        <input
                            class="w-1/3 lg:w-1/5 px-3 py-2 text-sm text-center leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="MM"
                            required="true"
                            maxlength="2"
                            onChange={handleExpiry1}
                        />
                        <span>{` / `}</span>
                        <input
                            class="w-1/2 lg:w-1/5 px-3 py-2 text-sm text-center leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="aaaa"
                            required="true"
                            maxlength="4"
                            onChange={handleExpiry2}
                        />
                    </p>
                </div>
                <div class="md:ml-2">
                    <label class=" mb-2 text-sm font-bold text-gray-700" for="lastName">
                        CVV
                    </label>
                    <p>
                        <input
                            class="w-1/2 px-3 py-2 text-center text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="***"
                            required="true"
                            maxlength="3"
                            onChange={handleCvv}
                        />
                    </p>
                </div>
            </div>

            <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                    Celular
                </label>
                <input
                    class="w-full lg:w-1/4 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    type="tel"
                    placeholder="1511112222"
                    required="true"
                    onChange={handlePhone}
                />
            </div>


            <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                    Email
                </label>
                <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    required="true"
                    placeholder="Email"
                    onChange={handleEmail}
                />
            </div>


            <div class="mb-6 text-center">
                <button
                    class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit" >
                    Pagar
                </button>
            </div>
        </form>

    )
}

export default OrderForm