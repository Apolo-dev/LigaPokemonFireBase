import React from 'react'

const BadgePerdedor1 = ({perdedor1}) => {
    return (
        <div>
            <tr>
                    {perdedor1.map((element)=>
                    {
                    return<td>
                            {element.nombre[0].nombre}
                        </td> 
                    })}
            </tr>
        </div>
    )
}

export default BadgePerdedor1
