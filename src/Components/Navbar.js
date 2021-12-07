import React from 'react'
import './CSS/Navbar.css'
//import fondoNavbar from '../Images/navbar.jpg' 

const Navbar = (props) => {
    return (
        <div className='navtotal'>
            <h3>{props.cambiarNombre}</h3>
            <h3>{props.cambiarNombreRegistro}</h3>
            <h3>{props.cambioNombreParticipantes}</h3>
            <h3>{props.cambioNombreGrupos}</h3>
            <h3>{props.cambioNombreFecha1}</h3>
            <h3>{props.cambioNombreFecha2}</h3>
            <h3>{props.cambioNombreBatalla}</h3>
        </div>
    )
}

export default Navbar
