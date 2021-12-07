import React from 'react'
import './CSS/BadgePintarDatos.css'

const BadgePintarDatos = ({elemento}) => {


    return (
        <>
            <div className="card tamanooosdd">
                <div className="tamañosssssssssssdsd">
                    <img src={elemento.imagen} alt="sdsd" />
                </div>
                <div>
                    <h2 className="titulobjbk">{elemento.nombre}</h2>
                    <div>
                        <ul>
                            <li><strong>Id:</strong> {elemento.id}</li>
                            <li><strong>Tipo:</strong> {elemento.tipo}</li>
                            <li><strong>Ataque:</strong>{elemento.ataque}</li>
                            <li><strong>Vida:</strong> {elemento.vida}</li>
                        </ul>
                    </div>
                </div>
            </div>    
        </>
        
    )
}

export default BadgePintarDatos
