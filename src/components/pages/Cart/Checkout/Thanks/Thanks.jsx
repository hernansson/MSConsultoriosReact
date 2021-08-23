import React from 'react'
import { useContext } from 'react'
import CartContext from '../../../../Context/CartContext'


const Thanks = () => {

    const { order } = useContext(CartContext)


    return (

        <div className=" text-center pt-48 ">
            <span className=" font-bold  text-2xl text-pink-400">MUCHAS GRACIAS POR SU COMPRA!</span>
            <img className="mx-auto mt-5 mb-5" src="https://c.tenor.com/n9u7zcGqlUQAAAAi/cute-hamster.gif" alt="" />
            <span className="font-bold">{`Guarde su numero de orden ${order}`}</span>
        </div>

    )
}

export default Thanks