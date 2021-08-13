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
    <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      <div className="flex w-2/5">
        <div className="w-20">
          <Link to={`./Detalle/${CartItem.title}/${CartItem.id}`}><img className="h-24" src={CartItem.image} alt="" /></Link>
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{CartItem.Title}</span>
          <span className="text-red-500 text-xs">{CartItem.categoria}</span>
          <a className="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={remove}>Quitar</a>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <ItemCountCart itemQ={ItemQ} CartItem={CartItem} id={CartItem.id} cartCount={cartCount} setCartCount={setCartCount} />
      </div>
      <span className="text-center w-1/5 font-semibold text-sm">{`${CartItem.price}`}</span>
      <span className="text-center w-1/5 font-semibold text-sm">{`${CartItem.price * ItemQ}`}</span>
    </div>

  )

}

export default CartItem