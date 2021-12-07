import React, {useState, useEffect} from 'react'
import './Styles/PaginaResultados.css'

import Sidebar from '../Components/Sidebar'
import NavbarDb from '../Components/NavbarDb'
import { db } from '../Firebase'
import { useAuth } from '../Context/AuthProvider'
import BadgeGanador1 from '../Components/BadgeGanador1'
import BadgeGanador2 from '../Components/BadgeGanador2'
import BadgePerdedor1 from '../Components/BadgePerdedor1'
import BadgePerdedor2 from '../Components/BadgePerdedor2'
import BadgeGanador1Puntos from '../Components/BadgeGanador1Puntos'
import BadgeGanador1Peleas from '../Components/BadgeGanador1Peleas'
import BadgeGanador2Peleas from '../Components/BadgeGanador2Peleas'
import BadgeGanador2Puntos from '../Components/BadgeGanador2Puntos'

import BadgePerdedor1Puntos from '../Components/BadgePerdedor1Puntos'
import BadgePerdedor1Peleas from '../Components/BadgePerdedor1Peleas'
import BadgePerdedor2Puntos from '../Components/BadgePerdedor2Puntos'
import BadgePerdedor2Peleas from '../Components/BadgePerdedor2Peleas'


const PaginaResultados = () => {

    const {usuario} = useAuth()


    const [nombre, setNombre] = useState([])
    const [nombre1, setNombre1] = useState([])

    const [perdedor1, setPerdedor1] = useState([])
    const [perdedor2, setPerdedor2] = useState([])

    const traerDatos = async ()=>
    {
        db.collection('Ganador1GrupoA').where("usuario", "==", usuario.uid).onSnapshot((querySnapshot=>
            {
                const caja = []
                querySnapshot.forEach((element)=>
                {
                    caja.push({...element.data()})
                    
                })
                setNombre(caja)
            }))   
    }

    const traerDatos2 = async ()=>
    {
        db.collection('Ganador2GrupoA').where("usuario", "==", usuario.uid).onSnapshot((querySnapshot=>
            {
                const caja = []
                querySnapshot.forEach((element)=>
                {
                    caja.push({...element.data()})
                    
                })
                setNombre1(caja)
            }))   
    }

    useEffect(()=>
    {
        traerDatos()
    }, [])

    useEffect(()=>
    {
        traerDatos2()
    }, [])

    const traerDatosPerdedor1 = async ()=>
    {
        db.collection('Perdedor1GrupoA').where("usuario", "==", usuario.uid).onSnapshot((querySnapshot=>
            {
                const caja = []
                querySnapshot.forEach((element)=>
                {
                    caja.push({...element.data()})
                    
                })
                setPerdedor1(caja)
            }))   
    }

    const traerDatosPerdedor2 = async ()=>
    {
        db.collection('Perdedor2GrupoA').where("usuario", "==", usuario.uid).onSnapshot((querySnapshot=>
            {
                const caja = []
                querySnapshot.forEach((element)=>
                {
                    caja.push({...element.data()})
                    
                })
                setPerdedor2(caja)
            }))   
    }

    useEffect(()=>
    {
        traerDatosPerdedor1()
    }, [])

    useEffect(()=>
    {
        traerDatosPerdedor2()
    }, [])




    return (
        <div className="gridResultados">
            <div className="gridNavbResult">
                <div>
                    <NavbarDb/>
                </div>
                <div className="moverTABLICHI">
                    <table>
                        <div className="tituloGrupillo">
                            <h4>Grupo A</h4>
                        </div>
                        <tr>
                            <th>
                                Nombre
                            </th>
                            <th>
                                Puntos
                            </th>
                            <th>
                                Peleas
                            </th>
                        </tr>  

                        <tr>
                            <td>
                                <div className="ganador1">
                                    <BadgeGanador1
                                    nombre={nombre}
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="ganador1">
                                    <BadgeGanador1Puntos
                                    nombre={nombre}
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="ganador1">
                                    <BadgeGanador1Peleas
                                    nombre={nombre}
                                    />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="ganador1">
                                    <BadgeGanador2
                                    nombre1={nombre1}
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="ganador1">
                                    <BadgeGanador2Puntos
                                    nombre1={nombre1}
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="ganador1">
                                    <BadgeGanador2Peleas
                                    nombre1={nombre1}
                                    />
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="ganador1">
                                    <BadgePerdedor1
                                    perdedor1={perdedor1}
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="ganador1">
                                    <BadgePerdedor1Puntos
                                    perdedor1={perdedor1}
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="ganador1">
                                    <BadgePerdedor1Peleas
                                    perdedor1={perdedor1}
                                    />
                                </div>
                            </td>
                        </tr>

                        <tr className="pintarlacosita">
                            <td>
                                <div className="ganador1">
                                    <BadgePerdedor2
                                    perdedor2={perdedor2}
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="ganador1">
                                    <BadgePerdedor2Puntos
                                    perdedor2={perdedor2}
                                    />
                                </div>
                            </td>
                            <td>
                                <div className="ganador1">
                                    <BadgePerdedor2Peleas
                                    perdedor2={perdedor2}
                                    />
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div>
                <Sidebar />
            </div>
        </div>
    )
}

export default PaginaResultados
