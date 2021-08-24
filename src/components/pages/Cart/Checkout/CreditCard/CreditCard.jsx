import React from 'react'


const CreditCard = ({ value }) => {


    const { name, surname, cardNumber, cvv, expiry } = value



    return (


        <div className="space-y-16 mt-32 mr-10 ml-10">
            <div className="w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-2xl transition-transform transform hover:scale-110 duration-350">

                <img className="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png" alt="No available" />

                <div className="w-full px-8 absolute top-8">
                    <div className="flex justify-between">
                        <div className="">
                            <h1 className="font-light">
                                Nombre
                            </h1>
                            <p className="font-medium tracking-widest">
                                <span>{name}</span>
                                <span>{` ${surname}`}</span>
                            </p>
                        </div>
                        <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png" alt="No available" />
                    </div>
                    <div className="pt-1">
                        <h1 className="font-light">
                            Card Number
                        </h1>
                        <p className="font-medium tracking-more-wider">
                            {cardNumber.map((cn) => (
                                `${cn} `
                            ))}
                        </p>
                    </div>
                    <div className="pt-6 pr-6">
                        <div className="flex justify-between">
                            <div className="">
                                <h1 className="font-light  text-xs">
                                    Expiry
                                </h1>
                                <p className="font-medium tracking-wider text-sm">
                                    {`${expiry[0]}/${expiry[1]}`}
                                </p>
                            </div>

                            <div className="">
                                <h1 className="font-light text-xs">
                                    CVV
                                </h1>
                                <p className="font-bold tracking-more-wider text-sm">
                                    {cvv}
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