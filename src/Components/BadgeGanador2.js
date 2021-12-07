import React from 'react'

const BadgeGanador2 = ({nombre1}) => {
    return (
        <div>
            <tr>
                            {nombre1.map((element)=>
                            {
                                return<td key={element.id}>
                                        {element.peleador1[0].nombre}
                                    </td> 
                            })}
                        </tr> 
        </div>
    )
}

export default BadgeGanador2
