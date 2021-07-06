export default function logIn() {
    return (

        <div>
            <form onSubmit="logUser(this)">
                <div class=" modal-login animate bg-white rounded shadow-lg p-8 m-4 fixed inset-0 z-40     "
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


    )
}