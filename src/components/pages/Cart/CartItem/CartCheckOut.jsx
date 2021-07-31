import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import CartContext from '../../../Context/CartContext'

const CartCheckOut = () => {

  const { cartCount, cartItems } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  //HARDCORE POR EL MOMENTO
  const enviosPrice = {
    "Moto": 400,
    "CorreoArgentino": 800,
    "El pibito": 100,
    "Retiro en local":0
  }

  const discountCodes = ["hernan","mauri","colo"]

  //

  useEffect(() => {
console.log("MEMONTEE")
  },[cartCount])

  const totalPrice = () => {
    return cartItems.reduce(function (b, c) {

      return (b + (c.item.price * c.count))
    }, 0)

  }

  useEffect(()=>{

    totalPriceWithDelivery()

  },[])

  const totalPriceWithDelivery = (e) => {
    console.log("LA E ",e)
    if(e ==undefined){
      setTotal(0 + totalPrice())
    }else{
      setTotal(Number(e.target.value) + totalPrice())
    }
    
  }
  const getDiscount = (e) =>{
    return e.target.value;
  }

  const applyCoupon = () =>{
    let coupon = getDiscount()

    let index = discountCodes.findIndex(e => e==coupon)

    if(index != -1){
      alert("TIENE UN CUPON")
    }
  }


  return (
    <div>
      <h1 className="font-semibold text-2xl border-b pb-8 ">Resumen de compra</h1>
      <div class="flex justify-between mt-10 mb-5">
        <span class="font-semibold text-sm uppercase">{`Items ${cartCount}`}</span>
        <span class="font-semibold text-sm">{`$${totalPrice()}`}</span>
      </div>
      <div>
        <label class="font-medium inline-block mb-3 text-sm uppercase">Envios</label>
        <select class="block p-2 text-gray-600 w-full text-sm" onChange={totalPriceWithDelivery}>
          <option value={enviosPrice["Retiro en local"]} >{`Retiro en Local - GRATIS`}</option>
          <option value={enviosPrice["CorreoArgentino"]} >{`Correo Argentino - $${enviosPrice["CorreoArgentino"]}`}</option>
          <option value={enviosPrice["Moto"]} >{`Moto - $${enviosPrice["Moto"]}`}</option>
          <option value={enviosPrice["El pibito"]}>{`El pibito - $${enviosPrice["El pibito"]}`}</option>
        </select>
      </div>
      <div class="py-10">
        <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Cupon de descuento</label>
        <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full" onChange={getDiscount} />
      </div>
      <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase rounded-lg transform hover:scale-110 transition duration-350" onClick={applyCoupon}>Aplicar</button>
      <div class="border-t mt-8">
        <div class="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Costo Total</span>
          <span>{`$${total}`}</span>
        </div>
        <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded-lg transform hover:scale-110 transition duration-350">Checkout</button>
      </div>
    </div>

  )
}

export default CartCheckOut