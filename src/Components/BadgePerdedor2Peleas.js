import React from 'react'

const BadgePerdedor2Peleas = ({perdedor2}) => {
    return (
        <div>
            {perdedor2.map((element)=>
                            {
                                return<td key={element.id}>
                                        {element.peleas}
                                    </td> 
                            })}
        </div>
    )
}

export default BadgePerdedor2Peleas
