import React from 'react'

const OrderForm = ({ value }) => {

    const { setName, setSurname, setCardNumber, cardNumber } = value

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleSurname = (e) => {
        setSurname(e.target.value)
    }
    const handleCardNumber1 = (e) => {
        console.log("cambio el numero1", e.target.value)
        cardNumber[0] = e.target.value
        setCardNumber(cardNumber)
    }
    const handleCardNumber2 = (e) => {
        console.log("cambio el numero1", cardNumber)
        cardNumber[1] = e.target.value
        setCardNumber(cardNumber)
    }
    const handleCardNumber3 = (e) => {
        cardNumber[2] = e.target.value
        setCardNumber(cardNumber)
    }
    const handleCardNumber4 = (e) => {
        cardNumber[3] = e.target.value
        setCardNumber(cardNumber)
    }



    return (



        <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
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
                            class="w-1/5 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="****"
                            maxlength="4"
                            onChange={handleCardNumber1}
                        />
                        <span>{` - `}</span>
                        <input
                            class="w-1/5 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="****"
                            maxlength="4"
                            onChange={handleCardNumber2}
                        />
                        <span>{` - `}</span>
                        <input
                            class="w-1/5 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="****"
                            maxlength="4"
                            onChange={handleCardNumber3}
                        />
                        <span>{` - `}</span>
                        <input
                            class="w-1/5 px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="****"
                            maxlength="4"
                            onChange={handleCardNumber4}
                        />
                    </p>
                </div>

            </div>

            <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                    Email
                </label>
                <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                />
            </div>
            <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                    <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                        Password
                    </label>
                    <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"

                        type="password"
                        placeholder="******************"
                    />
                    <p class="text-xs italic text-red-500">Please choose a password.</p>
                </div>
                <div class="md:ml-2">
                    <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                        Confirm Password
                    </label>
                    <input
                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="c_password"
                        type="password"
                        placeholder="******************"
                    />
                </div>
            </div>
            <div class="mb-6 text-center">
                <button
                    class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Register Account
                </button>
            </div>
            <hr class="mb-6 border-t" />
            <div class="text-center">
                <a
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="#"
                >
                    Forgot Password?
                </a>
            </div>
            <div class="text-center">
                <a
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                    href="./index.html"
                >
                    Already have an account? Login!
                </a>
            </div>
        </form>

    )
}

export default OrderForm