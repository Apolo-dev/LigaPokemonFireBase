import React from 'react'
import './CSS/BadgeFechas.css'

const BadgeFechas = ({participanteFecha}) => {


    console.log(participanteFecha);


    return (
        <div className="card gridCompletoFechas">
            <div className="grisFechaLos2">
                <div className="tamIMagFechasss">
                    imagen
                </div>
                <div>
                    nombre
                </div>
            </div>
            <div>
                vs
            </div>
            <div className="grisFechaLos2">
                <div className="tamIMagFechasss">
                    imagen
                </div>
                <div>
                    nombre1
                </div>
            </div>
        </div>
    )
}

export default BadgeFechas
