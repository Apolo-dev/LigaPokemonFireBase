import React, {useEffect} from 'react'
import './CSS/BadgeBatalla1.css'

const BadgeBatalla1 = ({estados, elemento, handleClick}) => {

  
    return (
        <div className="card">
            <div className="card-body">
                <div className="imagenBatalla1">
                    <img src={elemento.imagen} alt="alakazam" />
                </div>
                <div className="nombresito">
                    <h3>{elemento.nombre}</h3>
                </div>
                <ul className="sdsdsdr">
                    <li><strong>id:</strong> {elemento.id}</li>
                    <li><strong>Tipo:</strong> {elemento.tipo}</li>
                    <li><strong>Ataque:</strong> {elemento.ataque}</li>
                    <li><strong>Vida:</strong> {elemento.vida}</li>
                </ul>
                <div className="bkssss">
                    <button onClick={handleClick} className="btn btn-danger ">
                        Atacar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BadgeBatalla1
