import React from 'react'
//import imagencualquiera from  '../Images/aerodactyl.jpg'
import './CSS/BadgeUnico.css'

const BadgeUnico = ({id,nombre,tipo,ataque,vida, imagen, handleClick}) => {
    return (
        <div className="haiusasddd">
            <div className="card">
                <div className="jhajsss">
                    <img src={imagen} alt="pokke" />
                </div>
                <div className="nombresito">
                    <h2>{nombre}</h2>
                </div>
                <ul>
                    <li><strong>id:</strong> {id}</li>
                    <li><strong>Tipo: </strong> {tipo} </li>
                    <li><strong>Ataque:</strong> {ataque}</li>
                    <li><strong>Vida:</strong> {vida} </li> 
                </ul>
                <div className="hjasabotonsd">
                    <button onClick={handleClick} className="btn btn-danger">
                        Atacar Bitch!
                    </button>
                </div>
            </div>
        </div>
        
    )
}

export default BadgeUnico
