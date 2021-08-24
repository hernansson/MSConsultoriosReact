import React from 'react'

const FilterBox = ({ value }) => {

    const { handleFilterInput } = value
    return (
        <div className="flex items-center justify-center mx-auto ">

            <svg className="w-6 h-6 mr-4 mt-3 text-gray-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Escriba su producto"
                className="w-1/3 py-2 border-b-2 text-lg border-red-600 outline-none focus:border-green-400 transform hover:scale-105 hover:border-green-400 duration-350" onChange={handleFilterInput} />
        </div>
    )
}

export default FilterBox