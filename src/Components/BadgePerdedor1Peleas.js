import React from 'react'

const BadgePerdedor1Peleas = ({perdedor1}) => {
    return (
        <div >
                {perdedor1.map((element)=>
                        {
                            return<td>
                                {element.peleas}
                            </td> 
                        })} 
                    </div>
    )
}

export default BadgePerdedor1Peleas
