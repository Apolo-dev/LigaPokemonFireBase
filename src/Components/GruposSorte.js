import React, {useState} from 'react'
import './CSS/GruposSorteo.css'

import { ReactSortable } from "react-sortablejs";



const GruposSorte = ({bombos}) => {

const [bombo, setBombo] = useState(bombos)

    return (
        <div className="card ">
                <div className="grupitosTamaño">
                    <h3>Grupo A</h3>
                </div>
                
                    <div className="caac">
                        <div className="divRecive">
                            
                        </div>
                        <div className="divRecive">
                            
                        </div>
                        <div className="divRecive">
                            
                        </div>
                        <div className="divRecive">
                            
                        </div>
                    </div>
                
                
                
            
            
        </div>
    )
}

export default GruposSorte
