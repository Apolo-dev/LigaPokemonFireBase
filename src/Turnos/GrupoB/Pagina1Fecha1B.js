import React, {useState, useEffect} from 'react'
import '../../Pages/Styles/PaginaFecha.css'

import Sidebar from '../../Components/Sidebar'
import NavbarDb from '../../Components/NavbarDb'

//import BadgeFecha1 from './../../Components/BadgeFecha1'

import BadgePeleador1 from '../../Components/BadgePeleador1'
import BadgePeleador2 from '../../Components/BadgePeleador2'
import { db } from '../../Firebase'
//import { Link } from 'react-router-dom'

import { useHistory } from 'react-router'


import { useAuth } from '../../Context/AuthProvider'

//import Ataques from '../../Ataques'




const Pagina1Fecha1B = () => {

    const {usuario} = useAuth()

    const history = useHistory()

    

    const [peleador1, setPeleador1] = useState([])
    const [peleador2, setPeleador2] = useState([])

    

    const [vida1, setVida1] = useState(2000)
    const [vida2, setVida2] = useState(2000)

    const traerDatos = async ()=>
    {
        db.collection('GrupoB').where("usuario", "==", usuario.uid).where("bombo", "==", "1").onSnapshot((querySnapshot=>
            {
                const caja = []
                querySnapshot.forEach((element)=>
                {
                    caja.push({...element.data()})
                    
                })
                setPeleador1(caja)
            }))   
    }


    useEffect(()=>
    {
        traerDatos()
    }, [])


    const traerDatos2 = async ()=>
    {
        db.collection('GrupoB').where("usuario", "==", usuario.uid).where("bombo", "==", "4").onSnapshot((querySnapshot=>
            {
                const caja = []
                querySnapshot.forEach((element)=>
                {
                    caja.push({...element.data()})
                    
                })
                setPeleador2(caja)
            }))   
    }


    useEffect(()=>
    {
        traerDatos2()
    }, [])

   

    const azar1 = Math.floor(Math.random()*(1 + (4-1)))+1
    //console.log(azar1);
    const azar2 = Math.floor(Math.random()*(1 + (4-1)))+1

   
    const ganador1 = 
    {
        nombre:peleador1,
        puntos:3,
        peleas:1,
        usuario:usuario.uid
    }

    const ganador2 = 
    {
        nombre:peleador2,
        puntos:3,
        peleas:1,
        usuario:usuario.uid
    }

    const perdedor1 = 
    {
        nombre:peleador2,
        puntos:0,
        peleas:1,
        usuario:usuario.uid
    }

    const perdedor2 = 
    {
        nombre:peleador1,
        puntos:0,
        peleas:1,
        usuario:usuario.uid
    }



    const handleClick = ()=>
    {
        setVida2(vida2-(azar1*185))
        
        
        
    }

    const handleClick2 = ()=>
    {
        setVida1(vida1-(azar2*190))
        
    }

    

    const handleClickSiguiente = ()=>
    {
        if(vida2 <= 0)
        {
            db.collection('Ganador1GrupoB').add(ganador1)
        }
        else if(vida1 <=0)
        {
            db.collection('Ganador2GrupoB').add(ganador2)
        }
        else
        {
            console.log('siguen');
        }

        if(vida2 <= 0)
        {
            db.collection('Perdedor1GrupoB').add(perdedor1)
        }
        else if(vida1 <=0)
        {
            db.collection('Perdedor2GrupoB').add(perdedor2)
        }
        else
        {
            console.log('siguen');
        }
        history.push('/fecha2GrupoB')
    }

    


    return (
        <div className="gridTotalPelea">
            <div className="gridSegundo">
                <div>
                    <NavbarDb />
                </div>
                
                <div className="gridSeparaTitulos">
                    <div className="tituloYgrupos">
                        <h3>Grupo A</h3>
                        <h4>Batalla 1: Charizard vs Blaziken </h4>
                    </div>
                    <div className="gridPOkemonLista">
                        <div>
                            <BadgePeleador1
                            peleador1={peleador1}
                            handleClick={handleClick}
                            vida1={vida1}
                            
                            
                            />
                        </div>
                        <div className="botonSorteoMover">
                            
                            <button  className="btn btn-primary">
                                Sorteo
                            </button>
                        </div>
                        <div>
                            <BadgePeleador2
                            peleador2={peleador2}
                            handleClick2={handleClick2}
                            vida2={vida2}
                            
                            />
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            <button onClick={handleClickSiguiente} className="btn btn-success moverBotoncito">
                                Siguiente Pelea
                            </button>
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

export default Pagina1Fecha1B
