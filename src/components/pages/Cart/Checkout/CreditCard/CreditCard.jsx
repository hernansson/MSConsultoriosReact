import React from 'react'
import { useEffect } from 'react'

const CreditCard = ({ value }) => {


    const { name, surname, cardNumber } = value
    console.log("EL NAME", cardNumber)

    useEffect(() => {

    }, [cardNumber[0]])

    return (


        <div class="space-y-16 mt-32 mr-10 ml-10">
            <div class="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110">

                <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png" />

                <div class="w-full px-8 absolute top-8">
                    <div class="flex justify-between">
                        <div class="">
                            <h1 class="font-light">
                                Nombre
                            </h1>
                            <p class="font-medium tracking-widest">
                                <span>{name}</span>
                                <span>{` ${surname}`}</span>
                            </p>
                        </div>
                        <img class="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" />
                    </div>
                    <div class="pt-1">
                        <h1 class="font-light">
                            Card Number
                        </h1>
                        <p class="font-medium tracking-more-wider">
                            {cardNumber.map((cn) => (
                                `${cn}`
                            ))}
                        </p>
                    </div>
                    <div class="pt-6 pr-6">
                        <div class="flex justify-between">
                            <div class="">
                                <h1 class="font-light text-xs">
                                    Valid
                                </h1>
                                <p class="font-medium tracking-wider text-sm">
                                    11/15
                                </p>
                            </div>
                            <div class="">
                                <h1 class="font-light  text-xs">
                                    Expiry
                                </h1>
                                <p class="font-medium tracking-wider text-sm">
                                    03/25
                                </p>
                            </div>

                            <div class="">
                                <h1 class="font-light text-xs">
                                    CVV
                                </h1>
                                <p class="font-bold tracking-more-wider text-sm">
                                    ···
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>



    )
}

export default CreditCard