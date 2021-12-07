import React, {useState} from 'react'
import FormInicioSesion from '../Components/FormInicioSesion'
import NavbarInicio from '../Components/NavbarInicio'
import './Styles/PaginaInicioSesion.css'
import {auth} from '../Firebase'
import {useHistory} from 'react-router-dom'

const PaginaInicioSesion = () => {

    const history = useHistory()

    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e)=>
    {
        if(e.target.name === 'email')
        {
            setCorreo(e.target.value)
        }
        else if(e.target.name === 'password')
        {
            setPassword(e.target.value)
        }
        else
        {
            console.log('mala la wea');
        }
    }

    const handleSubmit = async (e)=>
    {
        e.preventDefault()
        console.log(correo,password);

        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if(!expresionRegular.test(correo))
        {
            alert('el correo esta como el pico ctm');
            return
        }
        if(correo === ''|| password ==='')
        {
            alert('te falto alguna wea ctm ');
            return
        }

        try
        {
            await auth.signInWithEmailAndPassword(correo,password)
            history.push('/azar')

        }
        catch(error)
        {
            alert(error)
            setPassword('')
            setCorreo('')
        }
    }







    return (
        <div className="gridInicicc">
            <div>
                <NavbarInicio />
            </div>
            <div className="gridknknk">
                <div>
                    
                </div>
                <div>
                    <FormInicioSesion 
                    correo={correo}
                    password={password}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    />
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default PaginaInicioSesion
