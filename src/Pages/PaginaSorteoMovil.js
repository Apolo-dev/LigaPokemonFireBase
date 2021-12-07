import React, { FC, useState} from 'react'
import Bombo1 from '../Components/Bombo1'
import GruposSorte from '../Components/GruposSorte'
import NavbarDb from '../Components/NavbarDb'
import Sidebar from '../Components/Sidebar'
import './Styles/PaginaSorteoMovil.css'

import { ReactSortable } from "react-sortablejs";

//importar drag and drop






import pokemones from '../Pokemones'
import TituloSorteo from '../Components/TituloSorteo'




const PaginaSorteoMovil = () => {

    const filtroBombo1 = pokemones.filter((element)=>
    {
        return element.bombo === "1"
    })

    const filtroBombo2 = pokemones.filter((element)=>
    {
        return element.bombo === "2"
    })



    const [bombo1, setBombo1] = useState(filtroBombo1)
    const [bombo2, setBombo2] = useState(filtroBombo2)

    



    return (
        <div className="gridSorteoMOil">
            <div>
                <div>
                    <NavbarDb />
                </div>
                <div className="gridbjajkbadconten">
                        <div>
                            <TituloSorteo />
                        </div>
                        <div className="gridCuerpoSorteoipojss">
                                <div  className="gridBombosPPAPAPI">
                                    <div  className="bomboss">
                                        <Bombo1
                                        bombos={bombo1}
                                        />
                                    </div>
                                </div>
                            <div className="gridGrupitos">
                                        <div className="divGrupillos">
                                            <GruposSorte
                                            bombo={bombo1}
                                            />
                                        </div>
                                        <div className="divGrupillos">
                                            <GruposSorte
                                            bombo={bombo1}
                                            />
                                        </div>
                                        <div className="divGrupillos">
                                            <GruposSorte
                                            bombo={bombo1}
                                            />
                                        </div>
                                        <div className="divGrupillos">
                                            <GruposSorte
                                            bombo={bombo1}
                                            />
                                        </div>
                                        <div className="divGrupillos">
                                            <GruposSorte
                                            bombo={bombo1}
                                            />
                                        </div>
                                        <div className="divGrupillos">
                                            <GruposSorte
                                            bombo={bombo1}
                                            />
                                        </div>
                                        <div className="divGrupillos">
                                            <GruposSorte
                                            bombo={bombo1}
                                            />
                                        </div>
                                        <div className="divGrupillos">
                                            <GruposSorte
                                            bombo={bombo1}
                                            />
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

export default PaginaSorteoMovil
