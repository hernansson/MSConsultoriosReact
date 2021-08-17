import React from "react"
import "./Login.css"

export default function LogIn({ value }) {

    const { showLogIn } = value;


    return (

        <div className="background bg-opacity-80">
            <form >

                <div className={`${showLogIn}  modal-login animate  mt-32   bg-white rounded shadow-lg p-8 fixed z-40`}
                    id="loginModal">
                    <div className="flex flex-col mb-4 md:w-full">
                        <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="username">
                            Usuario
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            autoComplete="off" id="username" type="text" placeholder="Username"></input>
                    </div>
                    <div className="flex flex-col mb-4 md:w-full">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="password" placeholder="*************"></input>
                        <div className="text-red-500 text-xs italic" id="pwRedLabel">Ingrese su contraseña.</div>
                    </div>
                    <div className="flex flex-col mb-4 md:min-w-full ">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  transform hover:scale-105 transition all duration-500"
                            type="submit">
                            Iniciar Sesion
                        </button>
                        <a className="inline-block my-3 text-center font-bold flex-auto text-sm text-blue-500 hover:text-blue-800"
                        >
                            Olvido su contraseña?
                        </a>
                    </div>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2021 Hernan Suzuki Son. All rights reserved.
                    </p>
                </div>

            </form>
        </div>


    )
}