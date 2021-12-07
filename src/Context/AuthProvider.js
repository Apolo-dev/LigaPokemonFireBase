import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../Firebase'

const AuthContext = React.createContext()

// creo el hook
const useAuth = ()=>
{
    return useContext(AuthContext)
}


const AuthProvider = ({children}) => {

    const [usuario, setUsuario] = useState()
    const [cargando, setCargando] = useState(true)

    useEffect(()=>
    {
        const cancelarSuscripcion = auth.onAuthStateChanged((element)=>
        {
            setUsuario(element)
            setCargando(false)
        })

        return cancelarSuscripcion
    }, [])

    return (
        <AuthContext.Provider value={{usuario: usuario}}>
            {!cargando && children}
        </AuthContext.Provider>
    )
}

export {AuthProvider, AuthContext, useAuth}
