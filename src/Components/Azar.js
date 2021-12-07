import React from 'react'
//mport pokemones from '../Pokemones'
import './CSS/Azar.css'


const Azar = ({bombo, handleClick}) => {



    return (
        <div className="card">
            <div className="tituloAzarBombos">
                <h3>Bombos</h3>
            </div>
            <ul>
            {bombo.map((element)=>
            {
                return <div key={element.id} className="imagenNombre">
                    <div  className="bordeaCadUNo ">
                        <img src={element.imagen} alt="w" />
                    </div>
                    <div  className="divNombreSeparar">
                        <h3 key={element.id}>{element.nombre}</h3>
                    </div>
                </div>
            })}
                
            </ul>
            <div className="botoncetePpauu">
                <button onClick={handleClick} className="btn btn-danger botonAzar"> 
                    A jugar!
                </button>
            </div>
        </div>
    )
}

export default Azar
