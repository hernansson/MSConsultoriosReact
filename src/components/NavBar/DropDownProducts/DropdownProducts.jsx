import React from "react"
import { NavLink } from "react-router-dom"
import "./DropDownProducts.css"
export default function DropDownProducts() {

  return (

    <div className="group inline-block">
      <button
        className=" bg-blue-900  flex items-center  transform hover:scale-125 duration-200">
        <NavLink to="/"
          className="block md:inline-block text-blue-100 hover:text-blue-500  px-2 py-3 border-b-2 mr-8 border-blue-100 md:border-none text-xl ">Productos</NavLink>
        <span>
          <svg
            className="bg-blue-400 border rounded-lg fill-current h-4 w-4 -ml-9 mt-1 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20">
            <path fill="white"
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </span>
      </button>
      <ul
        className="bg-blue-100 border rounded-lg transform scale-0 group-hover:scale-100 absolute
  transition duration-350 ease-in-out min-w-32"
      >
        <li className="rounded-sm px-4 py-2 hover:bg-gray-100  text-left ">
          <NavLink to="/Productos/Categoria/CremasCorporales" activeClassName='activo'>Cremas Corporales</NavLink>
        </li>
        <li className="rounded-sm px-4 py-2 hover:bg-gray-100  text-left">
          <NavLink to="/Productos/Categoria/HigieneCapilar" activeClassName='activo'>Higiene Capilar</NavLink>
        </li>
        <li className="rounded-sm relative px-4 py-2 hover:bg-gray-100">
          <button
            className="w-full text-left flex items-center outline-none focus:outline-none"
          >
            <span className="pr-1 flex-1">
              <NavLink to="/Productos/Categoria/Analgesico" activeClassName='activo'>Analgesico</NavLink>
            </span>
            <span className="mr-auto">
              <svg
                className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </span>
          </button>
          <ul
            className="bg-white border rounded-sm absolute top-0 right-0
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
          >
            <li className="px-3 py-1 hover:bg-gray-100">Anti-termicos</li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
              <button
                className="w-full text-left flex items-center outline-none focus:outline-none"
              >
                <span className="pr-1 flex-1">Anti-inflamatorios</span>
                <span className="mr-auto">
                  <svg
                    className="fill-current h-4 w-4
                transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </span>
              </button>
              <ul
                className="bg-white border rounded-sm absolute top-0 right-0
      transition duration-150 ease-in-out origin-top-left
      min-w-32
      "
              >
                <li className="px-3 py-1 hover:bg-gray-100">Acido acetilsalicílico</li>
                <li className="px-3 py-1 hover:bg-gray-100">Ibuprofeno</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="rounded-sm px-4 py-2 hover:bg-gray-100  text-left">
          <NavLink to="/Productos/Categoria/ProteccionSexual" activeClassName='activo'>Proteccion Sexual</NavLink>
        </li>
      </ul>
    </div>



  )
}