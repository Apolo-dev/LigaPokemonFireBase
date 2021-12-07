import React, {useState, useEffect} from 'react'
import './Styles/PaginaGrupos.css'
import Sidebar from '../Components/Sidebar'
import NavbarDb from '../Components/NavbarDb'
import GruposPresentacion from '../Components/GruposPresentacion'
import { db } from '../Firebase'

import { useAuth } from '../Context/AuthProvider'

const PaginaGrupos2 = () => {

    const {usuario} = useAuth()

    //const [estado, setEstado] = useState([])
    const [grupoE, setGrupoE] = useState([])
    const [grupoF, setGrupoF] = useState([])
    const [grupoG, setGrupoG] = useState([])
    const [grupoH, setGrupoH] = useState([])
    


    const traerPokes1 = async ()=>
    {
        db.collection('GrupoE').where('usuario', '==', usuario.uid).onSnapshot((querySnapshot)=>
        {
            const caja = []
            querySnapshot.forEach((elemento)=>
            {
                caja.push({...elemento.data()})
            })
            setGrupoE(caja)
        })
    }

    useEffect(()=>
    {
        traerPokes1()
    },[])

    const traerPokes2 = async ()=>
    {
        db.collection('GrupoF').where('usuario', '==', usuario.uid).onSnapshot((querySnapshot)=>
        {
            const caja = []
            querySnapshot.forEach((elemento)=>
            {
                caja.push({...elemento.data()})
            })
            setGrupoF(caja)
        })
    }

    useEffect(()=>
    {
        traerPokes2()
    },[])

    const traerPokes3 = async ()=>
    {
        db.collection('GrupoG').where('usuario', '==', usuario.uid).onSnapshot((querySnapshot)=>
        {
            const caja = []
            querySnapshot.forEach((elemento)=>
            {
                caja.push({...elemento.data()})
            })
            setGrupoG(caja)
        })
    }

    useEffect(()=>
    {
        traerPokes3()
    },[])

    const traerPokes4 = async ()=>
    {
        db.collection('GrupoH').where('usuario', '==', usuario.uid).onSnapshot((querySnapshot)=>
        {
            const caja = []
            querySnapshot.forEach((elemento)=>
            {
                caja.push({...elemento.data()})
            })
            setGrupoH(caja)
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
                                <h4>Grupo E</h4>
                            </div>
                            <div className="gridSeparaPokes">
                                <>
                                    <GruposPresentacion
                                    grupo={grupoE}
                                    />
                                </>
                            </div>
                        </div>

                    </div>
                    <div className="gridCasiGeneral">
                        <div className="gridlaaaaaaaaaaaaaaaaa">
                            <div className="tutilarrr">
                                <h4>Grupo F</h4>
                            </div>
                            <div className="gridSeparaPokes">
                                <>
                                    <GruposPresentacion
                                    grupo={grupoF}
                                    />
                                </>
                            </div>
                        </div>
                    </div>
                    <div className="gridCasiGeneral">
                        <div className="gridlaaaaaaaaaaaaaaaaa">
                            <div className="tutilarrr">
                                <h4>Grupo G</h4>
                            </div>
                            <div className="gridSeparaPokes">
                                <>
                                    <GruposPresentacion
                                    grupo={grupoG}
                                    />
                                </>
                            </div>
                        </div>
                    </div>
                    <div className="gridCasiGeneral">
                        <div className="gridlaaaaaaaaaaaaaaaaa">
                            <div className="tutilarrr">
                                <h4>Grupo H</h4>
                            </div>
                            <div className="gridSeparaPokes">
                                <>
                                    <GruposPresentacion
                                    grupo={grupoH}
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

export default PaginaGrupos2