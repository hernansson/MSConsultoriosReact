import React from 'react'
import CartWidget from './CartWidget'
import LogIn from './LogIn'




export default function NavBar() {

    /*  document.getElementById("hamburger").onclick = function toggleMenu() {
          const navToggle = document.getElementsByClassName("toggle");
          for (let i = 0; i < navToggle.length; i++) {
              navToggle.item(i).classList.toggle("hidden");
          }
      }*/

    return (

        <nav className="flex flex-wrap items-center justify-between p-2 bg-blue-900 w-full fixed z-20">
            <img src="http://acmelogos.com/images/logo-1.svg" alt="ACME" width="120" />
            <div className="flex md:hidden">
                <button id="hamburger">
                    <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                        width="40" height="40" />
                    <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                        width="40" height="40" />
                </button>
            </div>
            <div
                className="toggle hidden w-full md:w-auto md:flex text-center text-bold mt-5 md:mt-0 border-t-2 border-blue-100 md:border-none">
                <a href="#"
                    className=" block md:inline-block text-blue-100 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-100 md:border-none">Home</a>
                <a href="#"
                    className="block md:inline-block text-blue-100 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-100 md:border-none">Products</a>
                <a href="#"
                    className="block md:inline-block text-blue-100 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-100 md:border-none">Pricing</a>
                <a href="#"
                    className="block md:inline-block text-blue-100 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-100 md:border-none">Contact</a>

            </div>

            <a href="#"
                className="toggle hidden md:flex w-full md:w-auto px-4 py-2  text-center bg-blue-500 hover:bg-blue-600 text-white md:rounded"
                type="button" onClick=''>Ingresar</a>
            <a href="#"
                className="toggle hidden md:flex w-full md:w-auto px-4 py-2  text-center bg-blue-500 hover:bg-blue-600 text-white md:rounded"
                type="button" onClick="OpenRegister();">Registrarse</a>
            <CartWidget />
        </nav>




    )
}