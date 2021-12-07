import React from 'react'

const PintarPrueba = ({prueba}) => {
    return (
        <div>
            {prueba.map((elemento)=>
            {
                return<div key={elemento.id} className="card gridCompoImagenes">
                    <div className="tamañoIMagenGruposPres">
                        <img src={elemento.imagen} alt="sd" />
                    </div>
                    <div>
                        <h4>{elemento.nombre}</h4>
                        <h6>{elemento.tipo}</h6>
                    </div>
                </div>
            })}
        </div>
    )
}

export default PintarPrueba
