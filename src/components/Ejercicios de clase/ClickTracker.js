import React from 'react'
import { useState, useEffect } from 'react'

export default function ClickTracker() {

    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date);

    useEffect(() => {
        window.addEventListener('click', getClick)

        return () => {
            window.removeEventListener('click', getClick)
        }
    })

    const getClick = () => {
        setCount(count + 1);
        setDate(new Date());
    }

    return (
        <div>
            <h1>total de Click {count}</h1>
            <h2>Tu ultimo Click fue: {count == 0 ? 'No hay Clicks registrados' : date.toLocaleTimeString()}</h2>
        </div>
    )
}