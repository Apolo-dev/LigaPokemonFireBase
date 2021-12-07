import React, {useState, useEffect} from 'react'
import './CSS/BadgeRegistro.css'

import images from '../Images/charizard.jpg'


const BadgeRegistro = (props) => {

    //console.log(props.tipo);


    return (
        <div className="card">
            <div className="card-body">
                <div className="div-img">
                    <img src={images} alt='raikui'/>
                </div>
                <div >
                    <h5 className="titulopokemonregistro">{props.nombre}</h5>
                    <ul className="listaRegistro">
                        <li>Tipo: {props.tipo}</li>
                        <li>Ataque: {props.ataque}</li>
                        <li>Defensa: {props.defensa}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BadgeRegistro
