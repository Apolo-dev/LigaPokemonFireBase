import React from 'react'
import './CSS/Sidebar.css'
import {Link} from 'react-router-dom'


const Sidebar = () => {
    return (
        <div className="container">
            <ul>
                <div className="titulo-sidebar">
                    <h2>Liga Pokemon</h2>
                </div>
                
                <li>
                    <Link to="/participantes">Participantes</Link>
                </li>
                

                <li>
                    <Link to="/fecha1GrupoA">GrupoA</Link>
                </li>
                

                <li>
                    <Link to="/fecha1GrupoB">GrupoB</Link>
                </li>

                <li>
                    <Link to="/resultadosB">ResultadosB</Link>
                </li>

                <li>
                    <Link to="/fecha1GrupoC">GrupoC</Link>
                </li>

                <li>
                    <Link to="/resultadosC">ResultadosC</Link>
                </li>
                
                
                
            </ul>
        </div>
    )
}

export default Sidebar
