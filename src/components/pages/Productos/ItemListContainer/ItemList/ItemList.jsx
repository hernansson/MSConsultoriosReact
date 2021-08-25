import React, { useEffect, useState } from 'react'
import Item from './Item/Item'
import FilterBox from './filterBox'
import PriceFilter from './PriceFilter'


const ItemList = ({ value }) => {

    const [filterInput, setFilterInput] = useState('')
    const [filteredProductos, setFilteredProducts] = useState([])
    const [orderAsc, setOrderAsc] = useState(false)
    const { productos } = value

    const handleFilterInput = (e) => {
        setFilterInput(e.target.value)
    }

    const orderArray = () => {
        let orderedArray = orderAsc ? filteredProductos.sort((a, b) => a.price - b.price)
            : filteredProductos.sort((a, b) => b.price - a.price)
        console.log("entra al if", filteredProductos)
        setFilteredProducts(orderedArray)
        console.log("entra al if despues", filteredProductos)

    }



    useEffect(() => {


        const filterProds = () => {

            if (filterInput === '') {

                setFilteredProducts(productos)
            } else {
                let filterList = productos.filter((e) => e.title.toLowerCase().startsWith(filterInput.toLowerCase()))
                setFilteredProducts(filterList)
            }

        }
        filterProds()

    }, [filterInput])







    return (
        <div className="pt-28">
            <FilterBox value={{ handleFilterInput }} />
            <PriceFilter value={{ setOrderAsc, orderArray, orderAsc }} />

            <div className="products">
                {filteredProductos.map((prod, idx) => (
                    < Item producto={prod} key={idx} />
                ))}
            </div>
        </div>
    )
}

export default ItemList