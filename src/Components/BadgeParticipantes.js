import React from 'react'
import './CSS/BadgeParticipante.css'

const BadgeParticipantes = ({participante}) => {
    return (
        <div className="papidelFlow">
            {participante.map((element)=>
            {
                return <div key={element.id} className="card card-body ordenar">
                <div className="tamañoImagenBadgeParti">
                    <img src={element.imagen} alt="as" />
                </div>
                <div>
                    <ul>
                        <h3>{element.nombre}</h3>
                        <li>Tipo: {element.tipo}</li>
                        <li>Ataque: {element.ataque}</li>
                        <li>Vida: {element.vida}</li> 
                    </ul>
                </div>
            </div>
            })}
            
        </div>
        
    )
}

export default BadgeParticipantes
