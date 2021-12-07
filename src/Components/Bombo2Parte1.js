import React from 'react'


import pokemones from '../Pokemones'

const Bombo2Parte1 = () => {

    return (
        <div className="card cajas">
            <div className = "card-body">
                <div className="separarDiv">
                    <div className="imagenPeleasjj">
                        {pokemones[10].imagen}
                    </div>
                    <div className="nombrepOkesito">
                        <h4>{pokemones[10].nombre}</h4>
                    </div>
                </div>
                <div className="separarDiv">
                    <div className="imagenPeleasjj">
                        {pokemones[15].imagen}
                    </div>
                    <div className="nombrepOkesito">
                        <h4>{pokemones[15].nombre}</h4>
                    </div>
                </div>
                <div className="separarDiv">
                    <div className="imagenPeleasjj">
                        {pokemones[21].imagen}
                    </div>
                    <div className="nombrepOkesito">
                        <h4>{pokemones[21].nombre}</h4>
                    </div>
                </div>
                <div className="separarDiv">
                    <div className="imagenPeleasjj">
                        {pokemones[30].imagen}
                    </div>
                    <div className="nombrepOkesito">
                        <h4>{pokemones[30].nombre}</h4>
                    </div>
                </div>
                <div className="separarDiv">
                    <div className="imagenPeleasjj">
                        {pokemones[14].imagen}
                    </div>
                    <div className="nombrepOkesito">
                        <h4>{pokemones[14].nombre}</h4>
                    </div>
                </div>
                <div className="separarDiv">
                    <div className="imagenPeleasjj">
                        {pokemones[25].imagen}
                    </div>
                    <div className="nombrepOkesito">
                        <h4>{pokemones[25].nombre}</h4>
                    </div>
                </div>
                <div className="separarDiv">
                    <div className="imagenPeleasjj">
                        {pokemones[4].imagen}
                    </div>
                    <div className="nombrepOkesito">
                        <h4>{pokemones[4].nombre}</h4>
                    </div>
                </div>
                <div className="separarDiv">
                    <div className="imagenPeleasjj">
                        {pokemones[20].imagen}
                    </div>
                    <div className="nombrepOkesito">
                        <h4>{pokemones[20].nombre}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bombo2Parte1