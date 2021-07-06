import react from 'react'
import logIn from './logIn.js'




export default function NavBar() {
    return (
        <>
            <nav class="  flex flex-wrap items-center justify-between p-2 bg-blue-900 w-full fixed z-20">
                <img src="http://acmelogos.com/images/logo-1.svg" alt="ACME" width="120" />
                <div class="flex md:hidden">
                    <button id="hamburger">
                        <img class="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                            width="40" height="40" />
                        <img class="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                            width="40" height="40" />
                    </button>
                </div>
                <div
                    class="toggle hidden w-full md:w-auto md:flex text-center text-bold mt-5 md:mt-0 border-t-2 border-blue-100 md:border-none">
                    <a href="#"
                        class=" block md:inline-block text-blue-100 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-100 md:border-none">Home</a>
                    <a href="#"
                        class="block md:inline-block text-blue-100 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-100 md:border-none">Products</a>
                    <a href="#"
                        class="block md:inline-block text-blue-100 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-100 md:border-none">Pricing</a>
                    <a href="#"
                        class="block md:inline-block text-blue-100 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-100 md:border-none">Contact</a>
                </div>

                <a href="#"
                    class="toggle hidden md:flex w-full md:w-auto px-4 py-2  text-center bg-blue-500 hover:bg-blue-600 text-white md:rounded"
                    type="button" onClick={logIn}>Ingresar</a>
                <a href="#"
                    class="toggle hidden md:flex w-full md:w-auto px-4 py-2  text-center bg-blue-500 hover:bg-blue-600 text-white md:rounded"
                    type="button" onClick="OpenRegister();">Registrarse</a>
            </nav>

            <div>
                <form onsubmit="logUser(this)">
                    <div class="hidden modal-login animate bg-white rounded shadow-lg p-8 m-4 fixed inset-0 z-40     "
                        id="loginModal">
                        <div class="flex flex-col mb-4 md:w-full">
                            <label class="block text-gray-700 text-sm font-bold mb-2 " for="username">
                                Usuario
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                autocomplete="off" id="username" type="text" placeholder="Username"></input>
                        </div>
                        <div class="flex flex-col mb-4 md:w-full">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                                Contraseña
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" type="password" placeholder="*************"></input>
                            <div class="text-red-500 text-xs italic" id="pwRedLabel">Ingrese su contraseña.</div>
                        </div>
                        <div class="flex flex-col mb-4 md:min-w-full ">
                            <button
                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  transform hover:scale-105 transition all duration-500"
                                type="submit">
                                Iniciar Sesion
                            </button>
                            <a class="inline-block my-3 text-center font-bold flex-auto text-sm text-blue-500 hover:text-blue-800"
                                href="#">
                                Olvido su contraseña?
                            </a>
                        </div>
                        <p class="text-center text-gray-500 text-xs">
                            &copy;2021 Hernan Suzuki Son. All rights reserved.
                        </p>
                    </div>
                </form>
            </div>
        </>

    )
}