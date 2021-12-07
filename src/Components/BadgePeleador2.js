import React from 'react'
import './CSS/BadgePeleador1.css'

const BadgePeleador2 = ({peleador2, handleClick2, vida2}) => {
    return (
        <div>
            <div className="vidaNumero">
                <h4><strong>Vida:</strong> {vida2} puntos</h4>
            </div>
            {peleador2.map((element)=>
            {
                return <div key={element.id} className="badgePokem">
                    <div className="tamañoImagenPelador1">
                        <img src={element.imagen} alt="ss" />
                    </div>
                    <div>
                        <ul>
                            <h3>{element.nombre}</h3>
                            <div><strong>Tipo:</strong> {element.tipo}</div>
                            <div><strong>Ataque:</strong> {element.ataque}</div>
                            <div className="TipoAtaqueListo">
                                <strong><div>Hidrobomba</div></strong>
                            </div>
                            
                        </ul>
                    </div>
                    <div className="botoncetePapu">
                        <button onClick={handleClick2} className="btn btn-danger">
                            Pelea bitch!
                        </button>
                    </div>
                </div>
            })}
        </div>
    )
}

export default BadgePeleador2
