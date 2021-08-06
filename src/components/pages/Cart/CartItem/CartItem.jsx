import React from "react"
import { Link } from "react-router-dom";
import ItemCountCart from "./ItemCountCart";

const CartItem = (data) => {

  const { CartItem, ItemQ, removeItem, setCartCount, cartCount } = data;



  const remove = () => {
    removeItem(CartItem.id)
    setCartCount(cartCount - ItemQ)
  }


  return (
    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div class="flex w-2/5">
        <div class="w-20">
          <Link to={`./Detalle/${CartItem.title}/${CartItem.id}`}><img class="h-24" src={CartItem.image} alt="" /></Link>
        </div>
        <div class="flex flex-col justify-between ml-4 flex-grow">
          <span class="font-bold text-sm">{CartItem.Title}</span>
          <span class="text-red-500 text-xs">{CartItem.categoria}</span>
          <a href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={remove}>Quitar</a>
        </div>
      </div>
      <div class="flex justify-center w-1/5">
        <ItemCountCart itemQ={ItemQ} CartItem={CartItem} id={CartItem.id} cartCount={cartCount} setCartCount={setCartCount} />
      </div>
      <span class="text-center w-1/5 font-semibold text-sm">{`${CartItem.price}`}</span>
      <span class="text-center w-1/5 font-semibold text-sm">{`${CartItem.price * ItemQ}`}</span>
    </div>

  )

}

export default CartItem