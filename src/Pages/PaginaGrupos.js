import React, {useState, useEffect} from 'react'
import './Styles/PaginaGrupos.css'
import Sidebar from '../Components/Sidebar'
import NavbarDb from '../Components/NavbarDb'
import GruposPresentacion from '../Components/GruposPresentacion'
import { db } from '../Firebase'

import { useAuth } from '../Context/AuthProvider'

const PaginaGrupos = () => {

    const {usuario} = useAuth()

    //const [estado, setEstado] = useState([])
    const [grupoA, setGrupoA] = useState([])
    const [grupoB, setGrupoB] = useState([])
    const [grupoC, setGrupoC] = useState([])
    const [grupoD, setGrupoD] = useState([])
    


    const traerPokes1 = async ()=>
    {
        db.collection('GrupoA').where('usuario', '==', usuario.uid).onSnapshot((querySnapshot)=>
        {
            const caja = []
            querySnapshot.forEach((elemento)=>
            {
                caja.push({...elemento.data()})
            })
            setGrupoA(caja)
        })
    }

    useEffect(()=>
    {
        traerPokes1()
    },[])

    const traerPokes2 = async ()=>
    {
        db.collection('GrupoB').where('usuario', '==', usuario.uid).onSnapshot((querySnapshot)=>
        {
            const caja = []
            querySnapshot.forEach((elemento)=>
            {
                caja.push({...elemento.data()})
            })
            setGrupoB(caja)
        })
    }

    useEffect(()=>
    {
        traerPokes2()
    },[])

    const traerPokes3 = async ()=>
    {
        db.collection('GrupoC').where('usuario', '==', usuario.uid).onSnapshot((querySnapshot)=>
        {
            const caja = []
            querySnapshot.forEach((elemento)=>
            {
                caja.push({...elemento.data()})
            })
            setGrupoC(caja)
        })
    }

    useEffect(()=>
    {
        traerPokes3()
    },[])

    const traerPokes4 = async ()=>
    {
        db.collection('GrupoD').where('usuario', '==', usuario.uid).onSnapshot((querySnapshot)=>
        {
            const caja = []
            querySnapshot.forEach((elemento)=>
            {
                caja.push({...elemento.data()})
            })
            setGrupoD(caja)
        })
    }

    useEffect(()=>
    {
        traerPokes4()
    },[])

    return (
        <div className="gridGrupos">
            <div className="gridSegundoGrupos">
                <div>
                    <NavbarDb/>
                </div>
                <div className="gridCuarposGripus">
                    <div className="gridCasiGeneral">
                        <div className="gridlaaaaaaaaaaaaaaaaa">
                            <div className="tutilarrr">
                                <h4>Grupo A</h4>
                            </div>
                            <div className="gridSeparaPokes">
                                <>
                                    <GruposPresentacion
                                    grupo={grupoA}
                                    />
                                </>
                            </div>
                        </div>

                    </div>
                    <div className="gridCasiGeneral">
                        <div className="gridlaaaaaaaaaaaaaaaaa">
                            <div className="tutilarrr">
                                <h4>Grupo B</h4>
                            </div>
                            <div className="gridSeparaPokes">
                                <>
                                    <GruposPresentacion
                                    grupo={grupoB}
                                    />
                                </>
                            </div>
                        </div>
                    </div>
                    <div className="gridCasiGeneral">
                        <div className="gridlaaaaaaaaaaaaaaaaa">
                            <div className="tutilarrr">
                                <h4>Grupo C</h4>
                            </div>
                            <div className="gridSeparaPokes">
                                <>
                                    <GruposPresentacion
                                    grupo={grupoC}
                                    />
                                </>
                            </div>
                        </div>
                    </div>
                    <div className="gridCasiGeneral">
                        <div className="gridlaaaaaaaaaaaaaaaaa">
                            <div className="tutilarrr">
                                <h4>Grupo D</h4>
                            </div>
                            <div className="gridSeparaPokes">
                                <>
                                    <GruposPresentacion
                                    grupo={grupoD}
                                    />
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Sidebar />
            </div>
        </div>
    )
}

export default PaginaGrupos
