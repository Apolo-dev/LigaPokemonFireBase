import React from 'react'
import './Styles/PaginaIngreso.css'
import {db} from '../Firebase'
import Sidebar from '../Components/Sidebar'
import FormularioIngreso from '../Components/FormularioIngreso'
import NavbarDb from '../Components/NavbarDb'







const PaginaIngreso = () => {



    const cambioNavbar = 'Inscripcion Liga Pokemon'
    


    const guardarFirebase = async (element)=>
    {
        await db.collection('inscripcionPokemon').doc('pokemon1').set(element)
    }


    


    return (
        <div className="gridIngreso">
            <div>
                <div>
                    <NavbarDb cambiarNombre = {cambioNavbar} />
                </div>
                <div className="gridcccc">
                    <div>
                        <FormularioIngreso 
                        gardarDB = {guardarFirebase} />
                    </div>
                    
                </div>
            </div>
            <div>
                <Sidebar />
            </div>
        </div>
    )
}

export default PaginaIngreso
