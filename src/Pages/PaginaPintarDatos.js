import React, {useState, useEffect} from 'react'
import BadgePintarDatos from '../Components/BadgePintarDatos'
import NavbarDb from '../Components/NavbarDb'
import Sidebar from '../Components/Sidebar'
import './Styles/PaginaPintarDatos.css'

//import pokemones from '../Pokemones'

import {db} from '../Firebase'

const PaginaPintarDatos = () => {


    const [estados, setEstados] = useState([])

    
    const traerDatos = async ()=>
    {
        db.collection('inscripcionPokemon').where("tipo", "==", "Agua").onSnapshot((querySnapshot=>
            {
                const caja = []
                querySnapshot.forEach((element)=>
                {
                    caja.push({...element.data()})
                    
                })
                setEstados(caja)
            }))   
    }


    useEffect(()=>
    {
        traerDatos()
    }, [])


    return (
        <div className="gridPintarDatos">
            <div className="gridkssssssssss">
                <div>
                    <NavbarDb />
                </div>
                <div className="griddatirosss">
                    {estados.map((elemento)=>
                    {
                        return <div key={elemento.id} className="cuerpoPintados">
                        <BadgePintarDatos 
                        estado = {estados}
                        elemento = {elemento}
                        
                        
                        />
                    </div> 
                    })} 
                </div>
                
            </div>
            <div>
                <Sidebar />
            </div>
        </div>
    )
}

export default PaginaPintarDatos
