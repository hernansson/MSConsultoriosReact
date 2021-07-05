import react from 'react'




export default function NavBar() {
    return (
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
                type="button" onclick="Openform();">Ingresar</a>
            <a href="#"
                class="toggle hidden md:flex w-full md:w-auto px-4 py-2  text-center bg-blue-500 hover:bg-blue-600 text-white md:rounded"
                type="button" onclick="OpenRegister();">Registrarse</a>
        </nav>

    )
}