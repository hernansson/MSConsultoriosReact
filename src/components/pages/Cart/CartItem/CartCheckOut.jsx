import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import CartContext from '../../../Context/CartContext'
import getStore from '../../../../firebase'
import { useHistory } from 'react-router'

const CartCheckOut = () => {

  const { cartCount, cartItems, setOrder, order } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [discount, setDiscount] = useState("")
  const [delivery, setDelivery] = useState(0)
  const [showDiscount, setShowDiscount] = useState("")
  let history = useHistory()



  //HARDCORE POR EL MOMENTO
  const enviosPrice = {
    "Moto": 400,
    "CorreoArgentino": 800,
    "El pibito": 100,
    "Retiro en local": 0
  }

  const discountCodes = ["hernan", "mauri", "colo"]

  //

  const createorder = (e) => {
    e.preventDefault();

    const newOrder = {
      buyer: {
        name: '',
        surname: '',
        phone: '',
        email: '',
        username: ''
      },
      products: cartItems,
      date: getCurrentDate(),
      coupon: discount,
      delivery: delivery,
      paid: false,
      total: total.toFixed(2)
    }


    const firestore = getStore()
    const collection = firestore.collection("ordenes")

    if (order === '') {
      const query = collection.add(newOrder)
      query
        .then((res) => {

          setOrder(res.id)
          history.push(`/Cart/Checkout/${res.id}`);
        })
        .catch((err) => {
          console.log(err)
        })

    } else {
      const query = collection.doc(order)

      query.update({ products: cartItems, date: getCurrentDate(), coupon: discount, delivery: delivery, total: total.toFixed(2) })
        .then(() => {


          history.push(`/Cart/Checkout/${order}`);
        })
        .catch((err) => {
          console.log(err)
        })
    }

  }

  const getCurrentDate = () => {
    var d = new Date();
    return ([d.getDate(), d.getMonth() + 1, d.getFullYear()].join('/'));
  }

  const totalPrice = () => {
    return cartItems.reduce(function (b, c) {

      return (b + (c.item.price * c.count))
    }, 0)

  }

  useEffect(() => {

    totalPriceWithDelivery()

  }, [delivery, showDiscount, cartCount, cartItems])

  const totalPriceWithDelivery = () => {

    setTotal((Number(delivery) + totalPrice()) * applyCoupon())

  }

  const getDelivery = (e) => {

    if (e === undefined) {
      setDelivery(0)
    } else {
      setDelivery(e.target.value)
    }

  }
  const getDiscount = (e) => {

    setDiscount(e.target.value)
  }

  const discountVerify = () => {

    let index = discountCodes.findIndex(e => e === discount)
    return index !== -1 ? true : false
  }

  const applyCoupon = () => {

    let bool = discountVerify()
    let disc = (Number(delivery) + totalPrice()) * 0.1

    if (bool) {
      setShowDiscount(`Descuento 10% aplicado  -$${disc.toFixed(2)}`)
      return 0.9
    } else if (discount === "") {
      setShowDiscount(``)
      return 1
    } else {
      setShowDiscount("Codigo Invalido")
      return 1
    }
  }



  return (
    <div>
      <h1 className="font-semibold text-2xl border-b pb-8 ">Resumen de compra</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">{`Items ${cartCount}`}</span>
        <span className="font-semibold text-sm">{`$${totalPrice()}`}</span>
      </div>
      <div>
        <label className="font-medium inline-block mb-3 text-sm uppercase">Envios</label>
        <select className="block p-2 text-gray-600 w-full text-sm" onChange={getDelivery}>
          <option value={enviosPrice["Retiro en local"]} >{`Retiro en Local - GRATIS`}</option>
          <option value={enviosPrice["CorreoArgentino"]} >{`Correo Argentino - $${enviosPrice["CorreoArgentino"]}`}</option>
          <option value={enviosPrice["Moto"]} >{`Moto - $${enviosPrice["Moto"]}`}</option>
          <option value={enviosPrice["El pibito"]}>{`El pibito - $${enviosPrice["El pibito"]}`}</option>
        </select>
      </div>
      <div className="py-10">
        <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Cupon de descuento</label>
        <input type="text" id="promo" placeholder="Introducir codigo" className="p-2 text-sm w-full" onChange={getDiscount} />


        <div className="flex font-semibold justify-between py-2 text-sm uppercase">
          <span className=" flex text-sm italic justify-between text-red-500">{showDiscount}</span>
        </div>
        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase rounded-lg transform hover:scale-110 transition duration-350" onClick={applyCoupon}>Aplicar</button>

      </div>

      <div className="border-t mt-2">
        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
          <span>Costo Total</span>
          <span>{`$${total.toFixed(2)}`}</span>
        </div>
        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded-lg transform hover:scale-110 transition duration-350" onClick={createorder}>Checkout</button>
      </div>
    </div>

  )
}



export default CartCheckOut