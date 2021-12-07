import React, {useState} from 'react'
import Azar from '../Components/Azar'
import NavbarDb from '../Components/NavbarDb'
//import Sidebar from '../Components/Sidebar'
import './Styles/PaginaAzar.css'
import {useHistory} from 'react-router-dom'
import imagenLogo from '../Images/Pokémon_Logo.jpg'

import pokemones from '../Pokemones'
import pokemones2 from '../Pokemones2'
import pokemones3 from '../Pokemones3'
import pokemones4 from '../Pokemones4'
import pokemones5 from '../Pokemones5'
import pokemones6 from '../Pokemones6'
import pokemones7 from '../Pokemones7'
import pokemones8 from '../Pokemones8'
import pokemones9 from '../Pokemones9'

import pokemonesPrueba from '../PokemonesPrueba'


import { db } from '../Firebase'
//import { useAuth } from '../Context/AuthProvider'

const PaginaAzar = () => {

   const filtro = pokemonesPrueba().filter((element)=>
   {
        return element.tipo === "fuego"
   })

   

    const history = useHistory() 

    //bombo 1


    const filtroBombo1 = pokemones().filter((elemento)=>
    {
        return elemento.bombo === "1"
    })

    const filtro2Bombo1 = pokemones2().filter((elemento)=>
    {
        return elemento.bombo === "1"
    })

    const filtro3Bombo1 = pokemones3().filter((elemento)=>
    {
        return elemento.bombo === "1"
    })

    const filtro4Bombo1 = pokemones4().filter((elemento)=>
    {
        return elemento.bombo === "1"
    })

    const filtro5Bombo1 = pokemones5().filter((elemento)=>
    {
        return elemento.bombo === "1"
    })

    const filtro6Bombo1 = pokemones6().filter((elemento)=>
    {
        return elemento.bombo === "1"
    })

    const filtro7Bombo1 = pokemones7().filter((elemento)=>
    {
        return elemento.bombo === "1"
    })

    const filtro8Bombo1 = pokemones8().filter((elemento)=>
    {
        return elemento.bombo === "1"
    })

    const filtro9Bombo1 = pokemones9().filter((elemento)=>
    {
        return elemento.bombo === "1"
    })

    

    // bombo 2

    const filtroBombo2 = pokemones().filter((elemento)=>
    {
        return elemento.bombo === "2"
    })

    const filtro2Bombo2 = pokemones2().filter((elemento)=>
    {
        return elemento.bombo === "2"
    })

    const filtro3Bombo2 = pokemones3().filter((elemento)=>
    {
        return elemento.bombo === "2"
    })

    const filtro4Bombo2 = pokemones4().filter((elemento)=>
    {
        return elemento.bombo === "2"
    })

    const filtro5Bombo2 = pokemones5().filter((elemento)=>
    {
        return elemento.bombo === "2"
    })

    const filtro6Bombo2 = pokemones6().filter((elemento)=>
    {
        return elemento.bombo === "2"
    })

    const filtro7Bombo2 = pokemones7().filter((elemento)=>
    {
        return elemento.bombo === "2"
    })

    const filtro8Bombo2 = pokemones8().filter((elemento)=>
    {
        return elemento.bombo === "2"
    })

    const filtro9Bombo2 = pokemones9().filter((elemento)=>
    {
        return elemento.bombo === "2"
    })

    // bombo 3


    const filtroBombo3 = pokemones().filter((elemento)=>
    {
        return elemento.bombo === "3"
    })

    const filtro2Bombo3 = pokemones2().filter((elemento)=>
    {
        return elemento.bombo === "3"
    })

    const filtro3Bombo3 = pokemones3().filter((elemento)=>
    {
        return elemento.bombo === "3"
    })

    const filtro4Bombo3 = pokemones4().filter((elemento)=>
    {
        return elemento.bombo === "3"
    })

    const filtro5Bombo3 = pokemones5().filter((elemento)=>
    {
        return elemento.bombo === "3"
    })

    const filtro6Bombo3 = pokemones6().filter((elemento)=>
    {
        return elemento.bombo === "3"
    })

    const filtro7Bombo3 = pokemones7().filter((elemento)=>
    {
        return elemento.bombo === "3"
    })

    const filtro8Bombo3 = pokemones8().filter((elemento)=>
    {
        return elemento.bombo === "3"
    })

    const filtro9Bombo3 = pokemones9().filter((elemento)=>
    {
        return elemento.bombo === "3"
    })

    // bombo 4


    const filtroBombo4 = pokemones().filter((elemento)=>
    {
        return elemento.bombo === "4"
    })

    const filtro2Bombo4 = pokemones2().filter((elemento)=>
    {
        return elemento.bombo === "4"
    })

    const filtro3Bombo4 = pokemones3().filter((elemento)=>
    {
        return elemento.bombo === "4"
    })

    const filtro4Bombo4 = pokemones4().filter((elemento)=>
    {
        return elemento.bombo === "4"
    })

    const filtro5Bombo4 = pokemones5().filter((elemento)=>
    {
        return elemento.bombo === "4"
    })

    const filtro6Bombo4 = pokemones6().filter((elemento)=>
    {
        return elemento.bombo === "4"
    })

    const filtro7Bombo4 = pokemones7().filter((elemento)=>
    {
        return elemento.bombo === "4"
    })

    const filtro8Bombo4 = pokemones8().filter((elemento)=>
    {
        return elemento.bombo === "4"
    })

    const filtro9Bombo4 = pokemones9().filter((elemento)=>
    {
        return elemento.bombo === "4"
    })

    // contantes azar

    const estado1 = pokemones.bombo === "1"
    const estado2 = pokemones.bombo === "2"
    const estado3 = pokemones.bombo === "3"
    const estado4 = pokemones.bombo === "4"

    const [estado, setEstado] = useState(estado1)

    console.log(estado);

    const [bombo1, setBombo1] = useState(filtroBombo1)
    const [bombo2, setBombo2] = useState(filtroBombo2)
    const [bombo3, setBombo3] = useState(filtroBombo3)
    const [bombo4, setBombo4] = useState(filtroBombo4)


    //const {usuario} = useAuth()


    const handleClickEnviar = ()=>
    {
        history.push('/participantes')
        db.collection('GrupoA').add(bombo1[0])
        db.collection('GrupoA').add(bombo2[0])
        db.collection('GrupoA').add(bombo3[0])
        db.collection('GrupoA').add(bombo4[0])

        db.collection('GrupoB').add(bombo1[1])
        db.collection('GrupoB').add(bombo2[1])
        db.collection('GrupoB').add(bombo3[1])
        db.collection('GrupoB').add(bombo4[1])

        db.collection('GrupoC').add(bombo1[2])
        db.collection('GrupoC').add(bombo2[2])
        db.collection('GrupoC').add(bombo3[2])
        db.collection('GrupoC').add(bombo4[2])

        db.collection('GrupoD').add(bombo1[3])
        db.collection('GrupoD').add(bombo2[3])
        db.collection('GrupoD').add(bombo3[3])
        db.collection('GrupoD').add(bombo4[3])

        db.collection('GrupoE').add(bombo1[4])
        db.collection('GrupoE').add(bombo2[4])
        db.collection('GrupoE').add(bombo3[4])
        db.collection('GrupoE').add(bombo4[4])

        db.collection('GrupoF').add(bombo1[5])
        db.collection('GrupoF').add(bombo2[5])
        db.collection('GrupoF').add(bombo3[5])
        db.collection('GrupoF').add(bombo4[5])

        db.collection('GrupoG').add(bombo1[6])
        db.collection('GrupoG').add(bombo2[6])
        db.collection('GrupoG').add(bombo3[6])
        db.collection('GrupoG').add(bombo4[6])

        db.collection('GrupoH').add(bombo1[7])
        db.collection('GrupoH').add(bombo2[7])
        db.collection('GrupoH').add(bombo3[7])
        db.collection('GrupoH').add(bombo4[7])
    }


    //condicional 

    const azarBombo1 = ()=>
    {
        const azar = Math.floor(Math.random()*(80-1))+1

        if(azar <=10)
        {
            setBombo1(filtro2Bombo1)
        }
        else if(azar<=20 && azar >10)
        {
            setBombo1(filtro3Bombo1)
        }
        else if(azar<=30 && azar>20)
        {
            setBombo1(filtro4Bombo1)
        }
        else if(azar<=40 && azar>30)
        {
            setBombo1(filtro5Bombo1)
        }
        else if(azar<=50 && azar>40)
        {
            setBombo1(filtro6Bombo1)
        }
        else if(azar<=60 && azar>50)
        {
            setBombo1(filtro7Bombo1)
        }
        else if(azar<=70 && azar>60)
        {
            setBombo1(filtro8Bombo1)
        }
        else if(azar<=80 && azar>70)
        {
            setBombo1(filtro9Bombo1)
        }
        else
        {
            console.log('otraa');
        }
    }

    const azarBombo2 = ()=>
    {
        const azar = Math.floor(Math.random()*(80-1))+1

        if(azar <=10)
        {
            setBombo2(filtro2Bombo2)
        }
        else if(azar<=20 && azar >10)
        {
            setBombo2(filtro3Bombo2)
        }
        else if(azar<=30 && azar>20)
        {
            setBombo2(filtro4Bombo2)
        }
        else if(azar<=40 && azar>30)
        {
            setBombo2(filtro5Bombo2)
        }
        else if(azar<=50 && azar>40)
        {
            setBombo2(filtro6Bombo2)
        }
        else if(azar<=60 && azar>50)
        {
            setBombo2(filtro7Bombo2)
        }
        else if(azar<=70 && azar>60)
        {
            setBombo2(filtro8Bombo2)
        }
        else if(azar<=80 && azar>70)
        {
            setBombo2(filtro9Bombo2)
        }
        else
        {
            console.log('otraa');
        }
    }

    const azarBombo3 = ()=>
    {
        const azar = Math.floor(Math.random()*(80-1))+1

        if(azar <=10)
        {
            setBombo3(filtro2Bombo3)
        }
        else if(azar<=20 && azar >10)
        {
            setBombo3(filtro3Bombo3)
        }
        else if(azar<=30 && azar>20)
        {
            setBombo3(filtro4Bombo3)
        }
        else if(azar<=40 && azar>30)
        {
            setBombo3(filtro5Bombo3)
        }
        else if(azar<=50 && azar>40)
        {
            setBombo3(filtro6Bombo3)
        }
        
        else if(azar<=60 && azar>50)
        {
            setBombo3(filtro7Bombo3)
        }
        else if(azar<=70 && azar>60)
        {
            setBombo3(filtro8Bombo3)
        }
        else if(azar<=80 && azar>70)
        {
            setBombo3(filtro9Bombo3)
        }
        else
        {
            console.log('otraa');
        }
    }

    const azarBombo4 = ()=>
    {
        const azar = Math.floor(Math.random()*(80-1))+1

        if(azar <=10)
        {
            setBombo4(filtro2Bombo4)
        }
        else if(azar<=20 && azar >10)
        {
            setBombo4(filtro3Bombo4)
        }
        else if(azar<=30 && azar>20)
        {
            setBombo4(filtro4Bombo4)
        }
        else if(azar<=40 && azar>30)
        {
            setBombo4(filtro5Bombo4)
        }
        else if(azar<=50 && azar>40)
        {
            setBombo4(filtro6Bombo4)
        }
        else if(azar<=60 && azar>50)
        {
            setBombo4(filtro7Bombo4)
        }
        else if(azar<=70 && azar>60)
        {
            setBombo4(filtro8Bombo4)
        }
        else if(azar<=80 && azar>70)
        {
            setBombo4(filtro9Bombo4)
        }
        else
        {
            console.log('otraa');
        }
    }

    // accion del boton

    const handleClick = ()=>
    {
        setBombo1(azarBombo1)
    }

    const handleClick2 = ()=>
    {
        setBombo2(azarBombo2)
    }

    const handleClick3 = ()=>
    {
        setBombo3(azarBombo3)
    }

    const handleClick4 = ()=>
    {
        setBombo4(azarBombo4)
    }

    
    const [prueba, setPrueba] = useState(pokemonesPrueba)
    //const [prueba2, setPrueba2] = useState([])
    
    

    //console.log(prueba);


    const handleClickProbar = async ()=>
    {
        history.push('/prueba')
        db.collection("pruebita6").add(prueba[0])
        db.collection("pruebita6").add(prueba[1])
        db.collection("pruebita6").add(prueba[2])
        db.collection("pruebita6").add(prueba[3])
    }



    //console.log(prueba5);

    


    return (
        <div className="gridAzar">
            <div className="gridNavbarAzar">
                <div>
                    <NavbarDb />
                </div>
                <div>
                    <div className="grisTituloAzar">
                        <div className="tamañoLogoImagen">
                            <img src={imagenLogo} alt="sd" />
                        </div>
                        <div className="botonTituloAzar">
                            <button onClick={handleClickEnviar} className="btn btn-warning botonAvanzar">
                                <h5>Ir a los Grupos!</h5>
                            </button>
                            <button onClick={handleClickProbar} className="btn btn-success botonAvanzar">
                                <h5>probar la wea</h5>
                            </button>
                        </div>
                    </div>
                    <div className="griddivAzar">
                        <div >
                            <div className="titulodelGrupo">
                                <h5>Grupos</h5>
                            </div>
                            <ul className="listatataasf">
                                <li className="letraGrupos2"><strong>A</strong></li>
                                <li className="letraGrupos"><strong>B</strong></li>
                                <li className="letraGrupos"><strong>C</strong></li>
                                <li className="letraGrupos"><strong>D</strong></li>
                                <li className="letraGrupos"><strong>E</strong></li>
                                <li className="letraGrupos"><strong>F</strong></li>
                                <li className="letraGrupos"><strong>G</strong></li>
                                <li className="letraGrupos"><strong>H</strong></li>
                            </ul>
                        </div>
                        <div className="separaBombos">
                            <Azar
                            bombo={bombo1}
                            handleClick={handleClick}
                            
                            />
                        </div>
                        <div className="separaBombos">
                            <Azar
                            bombo={bombo2}
                            handleClick={handleClick2}
                            
                            />
                        </div>
                        <div className="separaBombos">
                            <Azar
                            bombo={bombo3}
                            handleClick={handleClick3}
                            
                            />
                        </div>
                        <div className="separaBombos">
                            <Azar
                            bombo={bombo4}
                            handleClick={handleClick4}
                            
                            />
                        </div>
                        
                    </div> 
                    
            </div>
            
                </div>
        </div>
    )
}

export default PaginaAzar
