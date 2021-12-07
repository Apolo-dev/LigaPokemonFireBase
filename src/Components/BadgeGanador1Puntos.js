import React from 'react'

const BadgeGanador1Puntos = ({nombre}) => {
    return (
    
            <div className="Badgeganador1">
                {nombre.map((element)=>
                    {
                        return<td key={element.id}>
                                {element.puntos}
                                </td> 
                                })}     
                    </div>
        
    )
}

export default BadgeGanador1Puntos
