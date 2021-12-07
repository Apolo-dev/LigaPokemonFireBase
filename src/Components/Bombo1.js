import React, {useState} from 'react'
import './CSS/Bombo1.css'

import { ReactSortable } from "react-sortablejs";


const Bombo1 = ({bombos}) => {

    const [bombo, setBombo] = useState(bombos)

    

    return (
        
            <div className="card">
                <div className="titulosssas">
                    <h3>Bombo 1</h3>
                </div>
                <div >
                <ReactSortable list={bombo} setList={setBombo}>
                    {bombo.map((value, index)=>
                    {
                        return (<ul key={value.id} className="listaBombo1xcv">
                                    <div className="separalasweas">
                                            <div className="imagenListabom1">
                                                {value.imagen}
                                            </div>
                                            <div className="claseNombre">
                                                <h3>{value.nombre}</h3>
                                            </div>
                                    </div>
                                </ul>)
                            })}
                </ReactSortable>
                </div>
            </div>
           
    )
}

export default Bombo1
