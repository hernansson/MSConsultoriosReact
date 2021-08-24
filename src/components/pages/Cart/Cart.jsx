import React, { useEffect } from "react"
import "./Cart.css"
import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "./CartItem/CartItem"
import CartCheckOut from "./CartItem/CartCheckOut"
import { useState } from "react"


export default function Cart() {

  const { cartItems, cartCount, removeItem, setCartCount, removeAll } = useContext(CartContext)
  const [show, setShow] = useState(false)


  useEffect(() => {
    if (cartCount > 0) {
      setShow(true)
    } else {
      setShow(false)
    }
  }, [cartCount])





  return (

    <div>
      {!show ?
        <div className=" text-center pt-48 ">
          <span className=" font-bold  text-2xl text-blue-600">Ups! ... No encontramos nada aqui</span>
          <img className="mx-auto mt-5 mb-5" src="https://static.wixstatic.com/media/7742ef_dfe620d0354b471b8620fcb2c3a46e62~mv2.gif" alt="" />
          <span className=" font-semibold text-red-500 text-lg underline  transform hover:scale-105 transition duration-350">
            <Link to="/">
              Seguir Comprando
            </Link>
          </span>

        </div> :

        <div className="containerCart  mx-auto ">
          <div className="flex shadow-2xl border-1 border-gray-300 rounded-2xl">
            <div className="w-3/4 bg-red px-10 py-28">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Carrito de compras</h1>
                <h2 className="font-semibold text-2xl">{`${cartCount} Productos`}</h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Detalle de los produtos</h3>
                <h3 className="cartLabel">Cantidad</h3>
                <h3 className="cartLabel">Precio</h3>
                <h3 className="cartLabel">Total</h3>
              </div>

              {cartItems.map((e, id) => (
                <CartItem key={id} CartItem={e.item} ItemQ={e.count} removeItem={removeItem} setCartCount={setCartCount} cartCount={cartCount} />
              ))}

              <div className="flex mt-10 mb-5">

                <a className="font-bold  text-red-700 text-xs uppercase w-1/5 text-center" onClick={removeAll}>Quitar TODO</a>
              </div>

              <div className=" border-b "></div>
              <Link to="/"><span className="flex font-semibold text-indigo-600 text-sm mt-10 transform hover:scale-105 transition duration-350">

                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
                Seguir Comprando
              </span></Link>

            </div>
            <div id="summary" className="w-1/4 px-8 py-28 bg-gray-100">
              <CartCheckOut></CartCheckOut>
            </div>
          </div>
        </div>
      }

    </div>
  )
}