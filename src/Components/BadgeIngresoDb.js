import React from 'react'
import './CSS/BadgeIngresoDb.css'



const BadgeIngresoDb = ({element}) => {



    return (
        <div  className="kjhkhk">
        <article className="card">
                <div className="casasas">
                    {element.imagen}
                </div>
                    <h2>{element.nombre}</h2>
                    <div className="sdsdsddddddddd">
                        <ul>
                            <li><strong>Id:</strong>{element.id} </li>
                            <li><strong>Tipo:</strong> {element.tipo} </li>
                            <li><strong>Ataque:</strong> {element.ataque} </li>
                            <li> <strong>Vida:</strong> {element.vida} </li>
                        </ul>
                    </div>
        </article>
        </div>
    )
}

export default BadgeIngresoDb
