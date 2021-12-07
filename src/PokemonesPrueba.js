import imagenHooh from './Images/ho_oh.jpg'
import imagenMoltres from './Images/moltres.jpg'
import imagenDragonite from './Images/dragonite.jpg'
import imagenMetagros from './Images/metagros.jpg'

import { useAuth } from './Context/AuthProvider'

const useUsuario = ()=>
{
    const {usuario} = useAuth()

    const pokemon1 = Object.freeze({
        id: 1,
        bombo:"1",
        nombre: 'Ho-oh',
        tipo: 'fuego',
        ataque: 210,
        vida: 2000,
        imagen:imagenHooh,
        usuario:usuario.uid
    })
    
    const pokemon2 = Object.freeze({
        id: 2,
        bombo:"2",
        nombre: 'Moltres',
        tipo: 'fuego',
        ataque: 200,
        vida: 2000,
        imagen:imagenMoltres,
        usuario:usuario.uid
        
        
    })
    
    const pokemon3 = Object.freeze({
        id:3,
        bombo:"3",
        nombre: 'Dragonite',
        tipo: 'dragon',
        ataque: 200,
        vida: 2000,
        imagen:imagenDragonite,
        usuario:usuario.uid
    
    })
    
    const pokemon4 = Object.freeze({
        id:4,
        bombo:"4",
        nombre: 'Metagros',
        tipo: 'psiquico',
        ataque: 180,
        vida: 2000,
        imagen:imagenMetagros,
        usuario:usuario.uid
        
    })

    const pokemonesPrueba = [pokemon1,pokemon2,pokemon3,pokemon4]
    return pokemonesPrueba

}


export default useUsuario;