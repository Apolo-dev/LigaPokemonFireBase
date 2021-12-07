import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../Firebase'
import BotonCerrarSesion from './BotonCerrarSesion'
import './CSS/NavbarDb.css'


import {useHistory} from 'react-router-dom'

const NavbarDb = () => {
    const history = useHistory()

    const handleClick = async ()=>
    {
        try
        {
            await auth.signOut()
            history.push('/')

        }catch(error)
        {
            console.log(error);
        }
        
    }


    return (
        <div className="cont ">
            <ul>
                <li>
                    <Link to="/participantes" alt="hdd">Grupos</Link>
                </li>
                <li>
                    <Link to="/resultados" alt="hdd">Estadisticas</Link>
                </li>        
                <div>
                    <BotonCerrarSesion
                    handleClick={handleClick}
                    />
                </div>
            </ul>
        </div>
    )
}

export default NavbarDb
