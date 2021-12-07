import React from 'react'
import './CSS/BadgeGanador1.css'

const BadgeGanador1 = ({nombre}) => {
    return (
        <div className="Badgeganador1">
                {nombre.map((element)=>
                    {
                        return<td key={element.id}>
                                {element.nombre[0].nombre}
                                </td> 
                    })}     
        </div>
    )
}

export default BadgeGanador1
