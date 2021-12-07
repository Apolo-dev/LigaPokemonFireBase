import React,{useState, useEffect} from 'react'
import './Styles/PaginaPrueba.css'

import Sidebar from '../Components/Sidebar'
import NavbarDb from '../Components/NavbarDb'
import PintarPrueba from '../Components/PintarPrueba'
import { db } from '../Firebase'

const PaginaPrueba = () => {

    const [prueba, setPrueba] = useState([])

    const traerPrueba1 = async ()=>
    {
        db.collection('pruebita6').orderBy("ataque", "desc").onSnapshot((element)=>
        {
            const caja = []
            element.forEach((elemento)=>
            {
                caja.push({...elemento.data()})
            })
            setPrueba(caja)
        })
    }

    useEffect(()=>
    {
        traerPrueba1()
    }, [])



    return (
        <div className="dridPaginaPrueba">
            <div className="gridNavPrueba">
                <div>
                    <NavbarDb/>
                </div>
                <div>
                    <PintarPrueba
                    prueba={prueba}
                    />
                </div>
            </div>
            <div>
                <Sidebar />
            </div>
        </div>
    )
}

export default PaginaPrueba
