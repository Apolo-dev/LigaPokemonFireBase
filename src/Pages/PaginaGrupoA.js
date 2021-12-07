import React, {useState, useEffect} from 'react'
import BadgePintarDatos from '../Components/BadgePintarDatos'
import NavbarDb from '../Components/NavbarDb'
import Sidebar from '../Components/Sidebar'
import { db } from '../Firebase'
import './Styles/PaginaGrupoA.css'

const PaginaGrupoA = () => {


    const [estados, setEstados] = useState([])


    const traerGrupoA = ()=>
    {
        db.collection("inscripcionPokemon").where("grupo", "==", "A").onSnapshot((querySnapshot)=>
        {
            const caja = []
                querySnapshot.forEach((element)=>
                {
                    caja.push({...element.data()})
                    
                })
                setEstados(caja)
        })
    }


    useEffect(()=>
    {
        traerGrupoA()
    }, [])

    return (
        <div className="gridgrupppaaa">
            <div className="jhsbdsdddgrid">
                <div>
                    <NavbarDb />
                </div>
                <div className="grsjssssssssssww">
                    <div className="hsddtitulo">
                        <h3>Pokemones Grupo A</h3>
                    </div>
                    <div className="gridPintarmapa">
                        {estados.map((elemento)=>
                        {
                            return <div key={elemento.id} className="sd">
                                <BadgePintarDatos
                                elemento = {elemento}
                                
                                />
                            </div>
                        })}
                    </div>
                    
                    
                </div>
            </div>
            <div>
                <Sidebar />
            </div>
        </div>
    )
}

export default PaginaGrupoA
