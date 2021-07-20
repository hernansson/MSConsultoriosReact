import React from "react"
import "./Loading.css"

export default function Loading() {
    return (
        <div>
            <div className="text-center font-bold text-xl pb-4">Por favor aguarde un momento</div>
            <div class="sk-folding-cube">
                <div class="sk-cube1 sk-cube"></div>
                <div class="sk-cube2 sk-cube"></div>
                <div class="sk-cube4 sk-cube"></div>
                <div class="sk-cube3 sk-cube"></div>
            </div>
            <div className="text-center text-xl" > Cargando Productos...</div >
        </div>
    )
}