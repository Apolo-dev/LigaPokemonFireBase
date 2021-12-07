import React from 'react'

const BadgePerdedor2 = ({perdedor2}) => {
    return (
        <div>
            <tr>
            {perdedor2.map((element)=>
                    {
                        return<td key={element.id}>
                            {element.nombre[0].nombre}
                    </td> 
            })}
            </tr>           
        </div>
    )
}

export default BadgePerdedor2
