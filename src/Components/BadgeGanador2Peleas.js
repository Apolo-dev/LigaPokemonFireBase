import React from 'react'

const BadgeGanador2Peleas = ({nombre1}) => {
    return (
        <div className="Badgeganador1">
                {nombre1.map((element)=>
                    {
                        return<td key={element.id}>
                                {element.peleas}
                                </td> 
                                })}     
                    </div>
    )
}

export default BadgeGanador2Peleas
