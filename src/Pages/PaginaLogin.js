import React, {useState} from 'react'
import FormLogin from '../Components/FormLogin'
import NavbarInicio from '../Components/NavbarInicio'
import './Styles/PaginaLogin.css'
import {auth} from '../Firebase'
import {useHistory} from 'react-router-dom'

const PaginaLogin =  () => {

    const history = useHistory()

    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const handleChange =  (e)=>
    {
        if(e.target.name === 'email')
        {
            setCorreo(e.target.value)
        }
        else if(e.target.name === 'password')
        {
            setPassword(e.target.value)
        }
        else if(e.target.name === 'password2')
        {
            setPassword2(e.target.value)
        }
        else
        {
            console.log('sdsd');
        }
    }


    const handleSubmit = async (e)=>
    {
        e.preventDefault()
        console.log(correo, password2, password);

        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if(!expresionRegular.test(correo))
        {
            alert('el correo esta como el pico ctm');
            setCorreo('')
            setPassword('')
            setPassword2('')
            return
        }
        if(correo === ''|| password ==='' || password2 === '')
        {
            alert('te falto alguna wea ctm ');
            setCorreo('')
            setPassword('')
            setPassword2('')
            return
        }
        if(password !== password2)
        {
            alert("no coincide la contraseña papuu");
            setCorreo('')
            setPassword('')
            setPassword2('')
            return
        }


        try
        {
            await auth.createUserWithEmailAndPassword(correo,password)
            history.push('/azar')
        }
        catch(error)
        {
            alert(error);
            setCorreo('')
            setPassword('')
            setPassword2('')
        }


    }
    
    


    return (
        <div className="gridkksasssssssssss">
            <div>
                <NavbarInicio />
            </div>
            <div className="gridknk23">
                <div>
                    
                </div>
                <div>
                    <FormLogin 
                    correo={correo}
                    password={password}
                    password2= {password2}
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

export default PaginaLogin
