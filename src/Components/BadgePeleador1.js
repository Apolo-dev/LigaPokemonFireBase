import React from 'react'
import './CSS/BadgePeleador1.css'

const BadgePeleador1 = ({peleador1, handleClick, vida1}) => {
    return (
        <div>
            <div className="vidaNumero">
                <h4><strong>Vida:</strong> {vida1} puntos</h4>
            </div>
            {peleador1.map((element)=>
            {
                return <div key={element.id} className="badgePokem">
                    <div className="tamañoImagenPelador1">
                        <img src={element.imagen} alt="ss" />
                    </div>
                    <div>
                        <ul>
                            <h3>{element.nombre}</h3>
                            <div><strong>Tipo: </strong>{element.tipo}</div>
                            <div><strong>Ataque:</strong> {element.ataque}</div>
                            <div className="TipoAtaqueListo">
                                <strong><div>Hiperrayo</div></strong>
                            </div>
                        </ul>
                    </div>
                    
                    <div className="botoncetePapu">
                        <button onClick={handleClick} className="btn btn-danger">
                            A pelear !
                        </button>
                    </div>
                </div>
            })}
            
        </div>
    )
}

export default BadgePeleador1
