import React from "react"
import "./Cart.css"
import { useContext } from "react"
import CartContext from "../../Context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "./CartItem/CartItem"
import CartCheckOut from "./CartItem/CartCheckOut"

export default function Cart() {

  const { cartItems, cartCount, removeItem, setCartCount, setCartItems } = useContext(CartContext)

  const removeAll = () => {
    setCartCount(0)
    setCartItems([])
  }



  console.log("EL CONTADOR ES", cartCount)


  return (

    <div className="containerCart  mx-auto ">
      <div class="flex shadow-2xl border-1 border-gray-300 rounded-2xl">
        <div class="w-3/4 bg-red px-10 py-28">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-2xl">Carrito de compras</h1>
            <h2 class="font-semibold text-2xl">{`${cartCount} Productos`}</h2>
          </div>
          <div class="flex mt-10 mb-5">
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Detalle de los produtos</h3>
            <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Cantidad</h3>
            <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Precio</h3>
            <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
          </div>

          {cartItems.map((e) => (
            <CartItem CartItem={e.item} ItemQ={e.count} removeItem={removeItem} setCartCount={setCartCount} cartCount={cartCount} />
          ))}

          <div class="flex mt-10 mb-5">
            <h3 class=" w-4/5"></h3>
            <a href="#" className="font-bold  text-red-700 text-xs uppercase w-1/5 text-center" onClick={removeAll}>Quitar TODO</a>
          </div>


          <Link to="/Productos"><a href="#" class="flex font-semibold text-indigo-600 text-sm mt-10 transform hover:scale-105 transition duration-350">

            <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
            Seguir Comprando
          </a></Link>
        </div>
        <div id="summary" class="w-1/4 px-8 py-28 bg-gray-100">
          <CartCheckOut></CartCheckOut>
        </div>
      </div>
    </div>

  )
}