import React from 'react'
import './Styles/PaginaInicio.css'


import NavbarInicio from '../Components/NavbarInicio'
import CuerpoInicio from '../Components/CuerpoInicio'

const PaginaInicio = () => {
    return (
        <div className="grid-navbar">
            <>
                <NavbarInicio />
            </>
            <div className="ghasas">
                <CuerpoInicio />
            </div>
        </div>
    )
}

export default PaginaInicio
