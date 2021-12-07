import React from 'react'
import { useAuth } from '../Context/AuthProvider'
import {Route, Redirect} from 'react-router-dom'

const RutaPrivada = ({children, ...restoPropiedades}) => {
     const {usuario}= useAuth()

     if(usuario)
     {
          return <Route {...restoPropiedades}>{children}</Route>
     }else
     {
          return <Redirect to="/" />
     }
}

export default RutaPrivada
