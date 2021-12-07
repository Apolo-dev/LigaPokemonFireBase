import React, {useState, useEffect} from 'react'
import BadgeUnico from '../Components/BadgeUnico'
import NavbarDb from '../Components/NavbarDb'
import Sidebar from '../Components/Sidebar'
import { db } from '../Firebase'
import './Styles/PaginaBatalla1.css'

const PaginaUnico = () => {

    const [imagen, setImagen] = useState('')
    const [id, setId] = useState('')
    const [nombre, setNombre] = useState('')
    const [tipo, setTipo] = useState('')
    const [ataque, setAtaque] = useState('')
    const [vida, setVida] = useState('')

    const [imagen2, setImagen2] = useState('')
    const [id2, setId2] = useState('')
    const [nombre2, setNombre2] = useState('')
    const [tipo2, setTipo2] = useState('')
    const [ataque2, setAtaque2] = useState('')
    const [vida2, setVida2] = useState('')

    const [puntos, setPuntos] = useState(0)
    const [peleas, setPeleas] = useState(0)

    const [puntos2, setPuntos2] = useState(0)
    const [peleas2, setPeleas2] = useState(0)







    const hieloDragon = 0.4
    const DragonHielo = 0.6

    const ataqueTipo1 = hieloDragon*(ataque)
    const ataqueTipo2 = DragonHielo*(ataque2)

    const azar = Math.floor(Math.random()*(5-1)+1)
  
    const ataqueAzar1 = azar*(ataque)
    const ataqueAzar2 = azar*(ataque2)

    const ataqueTotal1 = Math.round((ataqueAzar1*0.6)+(ataqueTipo1*0.4))
    const ataqueTotal2 = Math.round((ataqueAzar2*0.6)+(ataqueTipo2*0.4))


    const traerPokemon = ()=>
    {
        const vegeta = db.collection("inscripcionPokemon").doc("mNVLHRPn1ii57Anv1n3M")
        vegeta.get().then((doc) => {
            if (doc.exists) {
                setImagen(doc.data().imagen)
                setNombre(doc.data().nombre)
                setTipo(doc.data().tipo)
                setId(doc.data().id)
                setAtaque(doc.data().ataque)
                setVida(doc.data().vida)
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        }); 
    }

    const traerPokemon2 = ()=>
    {
        const vegeta = db.collection("inscripcionPokemon").doc("DVZ5wxhdUTIiALtQJCM9")
        vegeta.get().then((doc) => {
            if (doc.exists) {
                setImagen2(doc.data().imagen)
                setNombre2(doc.data().nombre)
                setTipo2(doc.data().tipo)
                setId2(doc.data().id)
                setAtaque2(doc.data().ataque)
                setVida2(doc.data().vida)
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        }); 
    }

    useEffect(()=>
    {
        traerPokemon()
    }, [])

    useEffect(()=>
    {
        traerPokemon2()
    }, [])

    
    const handleClick = ()=>
    {
        setVida2(vida2-ataqueTotal1)
    }

    const handleClick2 = ()=>
    {
        setVida(vida-ataqueTotal2)
    }

    const objetoPokemon1 = 
    {
        puntos: {puntos},
        peleas: {peleas}
    }

    const objetoPokemon2 = 
    {
        puntos: {puntos2},
        peleas: {peleas2}
    }

    

    const handleChangeSiguiente = async ()=>
    {
        vida2<=0?setVida2(0):console.log('esta vivo el segundo')
        vida<=0?setVida(0):console.log('sigue vivo el primero')
    }


    return (
        <div className="gridBatalla1">
            <div className="gtidsssssssssssaa">
                
                    <div>
                        <NavbarDb />
                    </div>
                    <div className="griduniccococ">
                        <div>
                            <BadgeUnico
                            imagen={imagen}
                            id={id}
                            nombre={nombre}
                            tipo={tipo}
                            ataque={ataque}
                            vida={vida}
                            handleClick={handleClick}
                            />
                        </div>
                        <div>
                            <button onClick={handleChangeSiguiente} className="btn btn-primary">
                                Siguente
                            </button>
                        </div>
                        <div>
                        <BadgeUnico
                            imagen={imagen2}
                            id={id2}
                            nombre={nombre2}
                            tipo={tipo2}
                            ataque={ataque2}
                            vida={vida2}
                            handleClick={handleClick2}
                            />
                        </div>
                    </div>
                
            </div>
            <div>
                <Sidebar />
            </div>
        </div>
    )
}

export default PaginaUnico
