import React, { Component } from 'react'
import FunctionComponent from './FunctionComponent'


export default class ClassComponent extends Component {
    constructor(props) {

        super(props)
        this.array = [
            {
                title: "hola",
                descripcion: "holadesc"
            },
            {
                title: "dbz",
                descripcion: "pikachu"
            }

        ]
        this.state = {
            estado: 'activo'
        }
    }
    render() {

        const mapFunctionComponent = () => {
            let items = []

            for (let index of this.array) {
                let item = <FunctionComponent
                    titulo={index.title}
                    descripcion={index.descripcion}
                />
                items = [...items, item];
            }
            return items;
        }
        const cambiarEstado = () => {
            this.setState({
                estado: 'desactivado'
            })
        }
        return (
            <div>
                <h1>{this.state.estado}</h1>
                <button onClick={cambiarEstado}>Cambiar Estado</button>

            </div>
        )
    }
}
