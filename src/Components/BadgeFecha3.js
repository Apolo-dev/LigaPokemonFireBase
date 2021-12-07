import React from 'react'
import './CSS/BadgeFecha1.css'

const BadgeFecha3 = ({participanteFecha}) => {
    return (
        <div className="claseImagennOMBRE">
            {participanteFecha.map((element)=>
            {
                return <div key={element.id} className="claseDisplay">
                    <div className="tamImgeRealPico">
                        <img src={element.imagen} alt="sd" />
                    </div>
                    <div className="displeydereal">
                        <h4>{element.nombre}</h4>
                    </div>
                </div>
            })}
        </div>
    )
}

export default BadgeFecha3