import React from 'react'

const BadgePerdedor1Puntos = ({perdedor1}) => {
    return (
        <div >
                {perdedor1.map((element)=>
                            {
                                return<td>
                                        {element.puntos}
                                    </td> 
                            })}  
                    </div>
    )
}

export default BadgePerdedor1Puntos
