import React, {useState, useEffect} from 'react'
import './Styles/PaginaParticipantes.css'
import BadgeParticipantes from '../Components/BadgeParticipantes'

import Sidebar from '../Components/Sidebar'
import NavbarDb from '../Components/NavbarDb'
import { db } from '../Firebase'
//import BadgeFechas from '../Components/BadgeFechas'
import BadgeFecha1 from '../Components/BadgeFecha1'
import BadgeFecha2 from '../Components/BadgeFecha2'
import BadgeFecha3 from '../Components/BadgeFecha3'
import BadgeFecha4 from '../Components/BadgeFecha4'

import { useAuth } from '../Context/AuthProvider'

import { Link } from 'react-router-dom'

const PaginaParticipantesH = () => {

    const {usuario} = useAuth()

    const [participante, setParticipante] = useState([])
    const [participanteFecha1, setParticipanteFecha1] = useState([])
    const [participanteFecha2, setParticipanteFecha2] = useState([])
    const [participanteFecha3, setParticipanteFecha3] = useState([])
    const [participanteFecha4, setParticipanteFecha4] = useState([])

    const traerDatos = async ()=>
    {
        db.collection('GrupoH').where("usuario", "==", usuario.uid).onSnapshot((querySnapshot=>
            {
                const caja = []
                querySnapshot.forEach((element)=>
                {
                    caja.push({...element.data()})
                    
                })
                setParticipante(caja)
            }))   
    }


    useEffect(()=>
    {
        traerDatos()
    }, [])

    // para traer las fechas

    const traerDatosFecha1 = async ()=>
    {
        db.collection('GrupoH').where("usuario", "==", usuario.uid).where("bombo", "==", "1").onSnapshot((querySnapshot=>
            {
                const caja = []
                querySnapshot.forEach((element)=>
                {
                    caja.push({...element.data()})
                    
                })
                setParticipanteFecha1(caja)
            }))   
    }


    useEffect(()=>
    {
        traerDatosFecha1()
    }, [])

    const traerDatosFecha2= async ()=>
    {
        db.collection('GrupoH').where("usuario", "==", usuario.uid).where("bombo", "==", "2").onSnapshot((querySnapshot=>
            {
                const caja = []
                querySnapshot.forEach((element)=>
                {
                    caja.push({...element.data()})
                    
                })
                setParticipanteFecha2(caja)
            }))   
    }


    useEffect(()=>
    {
        traerDatosFecha2()
    }, [])

    const traerDatosFecha3 = async ()=>
    {
        db.collection('GrupoH').where("usuario", "==", usuario.uid).where("bombo", "==", "3").onSnapshot((querySnapshot=>
            {
                const caja = []
                querySnapshot.forEach((element)=>
                {
                    caja.push({...element.data()})
                    
                })
                setParticipanteFecha3(caja)
            }))   
    }


    useEffect(()=>
    {
        traerDatosFecha3()
    }, [])

    const traerDatosFecha4 = async ()=>
    {
        db.collection('GrupoH').where("usuario", "==", usuario.uid).where("bombo", "==", "4").onSnapshot((querySnapshot=>
            {
                const caja = []
                querySnapshot.forEach((element)=>
                {
                    caja.push({...element.data()})
                    
                })
                setParticipanteFecha4(caja)
            }))   
    }


    useEffect(()=>
    {
        traerDatosFecha4()
    }, [])




    return (
        <div className="gridParticipantes">
            <div className="gridNavbPartici">
                <div>
                    <NavbarDb/>
                </div>
                <div className="gridSeparCosas">
                <div className="divTitulos">
                        <div>
                            <h3>Grupo H</h3>
                        </div>
                        <div className="paginacionPaginas">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination">
                                    <li class="page-item"><Link className="page-link" to="dd">Anterior</Link></li>
                                    <li class="page-item"><Link className="page-link" to="/participantes">A</Link></li>
                                    <li class="page-item"><Link className="page-link" to="/participantesB">B</Link></li>
                                    <li class="page-item"><Link className="page-link" to="/participantesC">C</Link></li>
                                    <li class="page-item"><Link className="page-link" to="/participantesD">D</Link></li>
                                    <li class="page-item"><Link className="page-link" to="/participantesE">E</Link></li>
                                    <li class="page-item"><Link className="page-link" to="/participantesF">F</Link></li>
                                    <li class="page-item"><Link className="page-link" to="/participantesG">G</Link></li>
                                    <li class="page-item"><Link className="page-link" to="/participantesH">H</Link></li>
                                    <li class="page-item"><Link className="page-link" to="/participantesB">Siguiente</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="gridPrataPartici">
                        <div className="gridCajitas">
                                <BadgeParticipantes
                                participante = {participante} 
                                />
                        </div>
                        <div className="gridDificil">
                            <div>
                                <h5>Fecha 1</h5>
                            </div>
                            
                            <div className="gridDisplayreal">
                                <div className="separMargen">
                                    <BadgeFecha1
                                    participanteFecha={participanteFecha1}
                                    />
                                </div>
                                <div className="vsreall">
                                    <h5>VS</h5>
                                </div>
                                <div>
                                    <BadgeFecha4
                                    participanteFecha={participanteFecha4}
                                    />
                                </div>
                            </div>
                            
                            <div className="gridDisplayreal">
                                <div className="separMargen">
                                    <BadgeFecha2
                                    participanteFecha={participanteFecha2}
                                    />
                                </div>
                                <div className="vsreall"> 
                                    <h5>VS</h5>
                                </div>
                                <div>
                                    <BadgeFecha3
                                    participanteFecha={participanteFecha3}
                                    />
                                </div>
                            </div>

                            <div>
                                <h5>Fecha 2</h5>
                            </div>

                            <div className="gridDisplayreal">
                                <div className="separMargen">
                                    <BadgeFecha1
                                    participanteFecha={participanteFecha1}
                                    />
                                </div>
                                <div className="vsreall">
                                    <h5>VS</h5>
                                </div>
                                <div>
                                    <BadgeFecha2
                                    participanteFecha={participanteFecha2}
                                    />
                                </div>
                            </div>

                            <div className="gridDisplayreal">
                                <div className="separMargen">
                                    <BadgeFecha3
                                    participanteFecha={participanteFecha3}
                                    />
                                </div>
                                <div className="vsreall"> 
                                    <h5>VS</h5>
                                </div>
                                <div>
                                    <BadgeFecha4
                                    participanteFecha={participanteFecha4}
                                    />
                                </div>
                            </div>

                            <div>
                                <h5>Fecha 3</h5>
                            </div>

                            <div className="gridDisplayreal">
                                <div className="separMargen">
                                    <BadgeFecha1
                                    participanteFecha={participanteFecha1}
                                    />
                                </div>
                                <div className="vsreall">
                                    <h5>VS</h5>
                                </div>
                                <div>
                                    <BadgeFecha3
                                    participanteFecha={participanteFecha3}
                                    />
                                </div>
                            </div>

                            <div className="gridDisplayreal">
                                <div className="separMargen">
                                    <BadgeFecha2
                                    participanteFecha={participanteFecha2}
                                    />
                                </div>
                                <div className="vsreall"> 
                                    <h5>VS</h5>
                                </div>
                                <div>
                                    <BadgeFecha4
                                    participanteFecha={participanteFecha4}
                                    />
                                </div>
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

export default PaginaParticipantesH