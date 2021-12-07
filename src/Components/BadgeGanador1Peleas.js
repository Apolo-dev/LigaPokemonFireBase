import React from 'react'

const BadgeGanador1Peleas = ({nombre}) => {
    return (
        <div className="Badgeganador1">
                {nombre.map((element)=>
                    {
                        return<td key={element.id}>
                                {element.peleas}
                                </td> 
                                })}     
                    </div>
    )
}

export default BadgeGanador1Peleas
