import React from 'react'
import './CSS/GruposPresentacion.css'



const GruposPresentacion = ({grupo}) => {

    //console.log(grupo);

    
    return (
        <div className="ponerArriba">
                {grupo.map((elemento)=>
                {
                    return<div key={elemento.id} className="card gridCompoImagenes">
                        <div className="tamañoIMagenGruposPres">
                            <img src={elemento.imagen} alt="sd" />
                        </div>
                        <div>
                            <h4>{elemento.nombre}</h4>
                            <h6>Tipo: {elemento.tipo}</h6>
                            <h6>Ataque: {elemento.ataque}</h6>
                        </div>
                    </div>
                })}
        </div>
    )
}

export default GruposPresentacion
