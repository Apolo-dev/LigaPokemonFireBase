import React from 'react'

import imagen from '../Images/imagenPokemonInicio.jpg'





import './CSS/CuerpoImagen.css'

const CuerpoInicio = () => {
    return (
        <div className="gridInicio">
            <div className="tamañoIMagenInicio">
                <img src={imagen} alt="assa "/>
            </div>
                
        </div>
        
    )
}

export default CuerpoInicio
