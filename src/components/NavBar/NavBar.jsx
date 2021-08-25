import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget/CartWidget.js'
import logo from "./img/logo.png"
import LogIn from './LogIn/LogIn'
import "./Navbar.css"
import DropDownProducts from './DropDownProducts/DropdownProducts.jsx'



export default function NavBar() {

    const [showLogIn, setShowLogin] = useState("hidden")

    const toggleLogIn = () => {
        showLogIn === "hidden" ? setShowLogin("block") : setShowLogin("hidden")
    }





    return (
        <div>
            <nav className="flex  items-center justify-between p-3 bg-blue-900 w-full fixed z-20">
                <img className="w-32 h-16" src={logo} alt="ACME" />
                <div className="flex md:hidden">
                    <button id="hamburger">
                        <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" alt="X"
                            width="40" height="40" />
                        <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" alt="X"
                            width="40" height="40" />
                    </button>
                </div>
                <div className="toggle hidden w-full   md:w-auto md:flex ">
                    <NavLink to="/Home" activeClassName="active"
                        className=" block md:inline-block text-blue-100 hover:text-blue-500 transform hover:scale-125 duration-200 px-3 py-3 border-b-2 mr-4 border-blue-100 md:border-none text-xl">Home</NavLink>
                    <DropDownProducts />
                    <button
                        className="block md:inline-block text-blue-100 hover:text-blue-500 transform hover:scale-125 duration-200 px-3 py-3 border-b-2 mr-4 border-blue-100 md:border-none text-xl">Turnos</button>
                    <button
                        className="block md:inline-block text-blue-100 hover:text-blue-500 transform hover:scale-125 duration-200 px-3 py-3 border-b-2 mr-4 border-blue-100 md:border-none text-xl">Contacto</button>
                </div>
                <div className="flex flex-row ">

                    <button
                        className="toggle hidden md:flex w-full md:w-auto px-4 py-1 mr-10 text-center bg-blue-500 hover:bg-blue-600 transform hover:scale-125 duration-350 text-white md:rounded text-xl"
                        type="button" onClick={toggleLogIn}>Ingresar</button>
                    <button
                        className="toggle hidden md:flex w-full md:w-auto px-4 py-1 mr-10  text-center bg-blue-500 hover:bg-blue-600 transform hover:scale-125 duration-350 text-white md:rounded text-xl"
                        type="button" >Registrarse</button>
                    <CartWidget />
                </div>
            </nav >


            <LogIn value={{ showLogIn, setShowLogin }} />


        </div>




    )
}