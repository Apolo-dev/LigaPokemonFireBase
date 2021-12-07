import React from 'react'

const BadgePerdedor2Puntos = ({perdedor2}) => {
    return (
        <div>
            {perdedor2.map((element)=>
                            {
                                return<td key={element.id}>
                                        {element.puntos}
                                    </td> 
                            })}
        </div>
    )
}

export default BadgePerdedor2Puntos
