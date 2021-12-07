import React from 'react'
import './CSS/NavbarInicio.css'
import {Link} from 'react-router-dom'

const NavbarInicio = () => {
    return (
        <div className="navbarInicio">
            <ul>
                <li>
                    <Link to="/inicioSesion">Iniciar Sesion </Link>
                </li>
                <li>
                    <Link to="/login">Registro</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavbarInicio
