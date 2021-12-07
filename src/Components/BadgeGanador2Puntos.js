import React from 'react'

const BadgeGanador2Puntos = ({nombre1}) => {
    return (
        <div className="Badgeganador1">
                {nombre1.map((element)=>
                    {
                        return<td key={element.id}>
                                {element.puntos}
                                </td> 
                    })}     
            </div>
    )
}

export default BadgeGanador2Puntos
