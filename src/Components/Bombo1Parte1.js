import React from 'react'


import pokemones from '../Pokemones'

const Bombo1Parte1 = () => {

    return (
        <div className="card cajas">
            <div className = "card-body">
                <div className="separarDiv">
                    <div className="imagenPeleasjj">
                        {pokemones[0].imagen}
                    </div>
                    <div className="nombrepOkesito">
                        <h4>{pokemones[0].nombre}</h4>
                    </div>
                </div>
                <div className="separarDiv">
                    <div className="imagenPeleasjj">
                        {pokemones[1].imagen}
                    </div>
                    <div className="nombrepOkesito">
                        <h4>{pokemones[1].nombre}</h4>
                    </div>
                </div>
                <div className="separarDiv">
                    <div className="imagenPeleasjj">
                        {pokemones[2].imagen}
                    </div>
                    <div className="nombrepOkesito">
                        <h4>{pokemones[2].nombre}</h4>
                    </div>
                </div>
                <div className="separarDiv">
                    <div className="imagenPeleasjj">
                        {pokemones[3].imagen}
                    </div>
                    <div className="nombrepOkesito">
                        <h4>{pokemones[3].nombre}</h4>
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
                        {pokemones[5].imagen}
                    </div>
                    <div className="nombrepOkesito">
                        <h4>{pokemones[5].nombre}</h4>
                    </div>
                </div>
                <div className="separarDiv">
                    <div className="imagenPeleasjj">
                        {pokemones[24].imagen}
                    </div>
                    <div className="nombrepOkesito">
                        <h4>{pokemones[24].nombre}</h4>
                    </div>
                </div>
                <div className="separarDiv">
                    <div className="imagenPeleasjj">
                        {pokemones[31].imagen}
                    </div>
                    <div className="nombrepOkesito">
                        <h4>{pokemones[31].nombre}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bombo1Parte1
