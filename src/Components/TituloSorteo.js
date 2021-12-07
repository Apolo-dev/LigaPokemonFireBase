import React from 'react'
import './CSS/TituloSorteo.css'

const TituloSorteo = () => {
    return (
        <div className="GridsepararTitulo">
            <div className="tituloBombo1">
                <h2>Sorteo Liga Bombo 1</h2>
            </div>
            <div className="botonSiguiente">
                <button className="btn btn-danger">
                    Siguiente
                </button>
            </div>
        </div>
    )
}

export default TituloSorteo
