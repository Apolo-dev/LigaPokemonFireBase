import imagenHooh from './Images/ho_oh.jpg'
import imagenMoltres from './Images/moltres.jpg'
import imagenDragonite from './Images/dragonite.jpg'
import imagenMetagros from './Images/metagros.jpg'

import imagenArceus from './Images/arceus.jpg'
import imagenZapdos from './Images/zapdos.jpg'
import imagenFeraligator from './Images/feraligatr.jpg'
import imagenGengar from './Images/Gengar.jpg'

import imagenDialga from './Images/Dialga.jpg'
import imagenKiogre from './Images/Kiogre.jpg'
import imagenSalamance from './Images/salamence.jpg'
import imagenElectivire from './Images/Electivire.jpg'

import imagenMewtwo from './Images/mewtwo.jpg'
import imagenArticuno from './Images/articuno.jpg'
import imagenCharizard from './Images/charizard.jpg'
import imagenSteelix from './Images/steelix.jpg'

import imagenDakrai from './Images/Dakrai.jpg'
import imagenRaikou from './Images/Raikou.jpg'
import imagenMilotic from './Images/Milotic.jpg'
import imagenAlakazam from './Images/Alakazam.jpg'

import imagenDeoxis from './Images/Deoxys.jpg'
import imagenEntei from './Images/entei.jpg'
import imagenBlaziken from './Images/blaziken.jpg'
import imagenAltaria from './Images/Altaria.jpg'

import imagenLugia from './Images/Lugia.jpg'
import imagenGroudon from './Images/grudon.jpg'
import imagenBlastoise from './Images/blastoise.jpg'
import imagenTiranitar from './Images/Tyranitar.jpg'

import imagenRaikuaza from './Images/raykuaza.jpg'
import imagenSuicune from './Images/suicune.jpg'
import imagenAerodactyl from './Images/aerodactyl.jpg'
import imagenArcanine from './Images/Arcanine.jpg'

import { useAuth } from './Context/AuthProvider'

const useUsuario4 = ()=>
{
    const {usuario} = useAuth()

    const pokemon1 = Object.freeze({
        id: 1,
        bombo:"1",
        nombre: 'Ho-oh',
        tipo: 'fuego',
        ataque: 210,
        vida: 2000,
        imagen: imagenHooh,
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
    
    const pokemon5 = Object.freeze({
        id:5,
        bombo:"1",
        nombre: 'Arceus',
        tipo: 'roca',
        ataque: 220,
        vida: 2000,
        imagen:imagenArceus,
        usuario:usuario.uid
    })
    
    const pokemon6 = Object.freeze({
        id: 6,
        bombo:"2",
        nombre: 'Zapdos',
        tipo: 'electrico',
        ataque: 200,
        vida: 2000,
        imagen:imagenZapdos,
        usuario:usuario.uid
    })
    
    const pokemon7 = Object.freeze({
        id: 7,
        bombo:"3",
        nombre: 'Feraligator',
        tipo: 'agua',
        ataque: 200,
        vida: 2000,
        imagen:imagenFeraligator,
        usuario:usuario.uid
    })
    
    const pokemon8 = Object.freeze({
        id: 8,
        bombo:"4",
        nombre: 'Gengar',
        tipo: 'fantasma',
        ataque: 180,
        vida: 2000,
        imagen:imagenGengar,
        usuario:usuario.uid
    })
    
    const pokemon9 = Object.freeze({
        id:9,
        bombo:"1",
        nombre: 'Dialga',
        tipo: 'dragon',
        ataque: 210,
        vida: 2000,
        imagen:imagenDialga,
        usuario:usuario.uid
    })
    
    const pokemon10 = Object.freeze({
        id:10,
        bombo:"2",
        nombre: 'Kiogre',
        tipo: 'agua',
        ataque: 210,
        vida: 2000,
        imagen:imagenKiogre,
        usuario:usuario.uid
    })
    
    const pokemon11 = Object.freeze({
        id: 11,
        bombo:"3",
        nombre: 'Salamance',
        tipo: 'dragon',
        ataque: 200,
        vida: 2000,
        imagen:imagenSalamance,
        usuario:usuario.uid
    })
    
    const pokemon12 = Object.freeze({
        id: 12,
        bombo:"4",
        nombre: 'Electivire',
        tipo: 'electrico',
        ataque: 180,
        vida: 2000,
        imagen:imagenElectivire,
        usuario:usuario.uid
    })
    
    const pokemon13 = Object.freeze({
        id: 13,
        bombo:"1",
        nombre: 'Mewtwo',
        tipo: 'psiquico',
        ataque: 220,
        vida: 2000,
        imagen:imagenMewtwo,
        usuario:usuario.uid
    })
    
    const pokemon14 = Object.freeze({
        id: 14,
        bombo:"2",
        nombre: 'Articuno',
        tipo: 'hielo',
        ataque: 200,
        vida: 2000,
        imagen:imagenArticuno,
        usuario:usuario.uid
    })
    
    const pokemon15 = Object.freeze({
        id: 15,
        bombo:"3",
        nombre: 'Charizard',
        tipo: 'fuego',
        ataque: 200,
        vida: 2000,
        imagen:imagenCharizard,
        usuario:usuario.uid
    })
    
    const pokemon16 = Object.freeze({
        id: 16,
        bombo:"4",
        nombre: 'Steelix',
        tipo: 'roca',
        ataque: 190,
        vida: 2000,
        imagen:imagenSteelix,
        usuario:usuario.uid
    })
    
    const pokemon17 = Object.freeze({
        id: 17,
        bombo:"1",
        nombre: 'Darkrai',
        tipo: 'fantasma',
        ataque: 210,
        vida: 2000,
        imagen:imagenDakrai,
        usuario:usuario.uid
    })
    
    const pokemon18 = Object.freeze({
        id: 18,
        bombo:"2",
        nombre: 'Raikou',
        tipo: 'electrico',
        ataque: 210,
        vida: 2000,
        imagen:imagenRaikou,
        usuario:usuario.uid
    })
    
    const pokemon19 = Object.freeze({
        id: 19,
        bombo:"3",
        nombre: 'Milotic',
        tipo: 'hielo',
        ataque: 190,
        vida: 2000,
        imagen:imagenMilotic,
        usuario:usuario.uid
    })
    
    const pokemon20 = Object.freeze({
        id: 20,
        bombo:"4",
        nombre: 'Alakazam',
        tipo: 'psiquico',
        ataque: 190,
        vida: 2000,
        imagen:imagenAlakazam,
        usuario:usuario.uid
    })
    
    const pokemon21 = Object.freeze({
        id: 21,
        bombo:"1",
        nombre: 'Deoxis',
        tipo: 'psiquico',
        ataque: 220,
        vida: 2000,
        imagen:imagenDeoxis,
        usuario:usuario.uid
    })
    
    const pokemon22 = Object.freeze({
        id: 22,
        bombo:"2",
        nombre: 'Entei',
        tipo: 'fuego',
        ataque: 210,
        vida: 2000,
        imagen:imagenEntei,
        usuario:usuario.uid
    })
    
    const pokemon23 = Object.freeze({
        id: 23,
        bombo:"3",
        nombre: 'Blaziken',
        tipo: 'fuego',
        ataque: 200,
        vida: 2000,
        imagen:imagenBlaziken,
        usuario:usuario.uid
    })
    
    const pokemon24 = Object.freeze({
        id: 24,
        bombo:"4",
        nombre: 'Altaria',
        tipo: 'dragon',
        ataque: 190,
        vida: 2000,
        imagen:imagenAltaria,
        usuario:usuario.uid
    })
    
    const pokemon25 = Object.freeze({
        id: 25,
        bombo:"1",
        nombre: 'Lugia',
        tipo: 'agua',
        ataque: 210,
        vida: 2000,
        imagen:imagenLugia,
        usuario:usuario.uid
    })
    
    const pokemon26 = Object.freeze({
        id: 26,
        bombo:"2",
        nombre: 'Groudon',
        tipo: 'roca',
        ataque: 210,
        vida: 2000,
        imagen:imagenGroudon,
        usuario:usuario.uid
    })
    
    const pokemon27 = Object.freeze({
        id: 27,
        bombo:"3",
        nombre: 'Blastoise',
        tipo: 'agua',
        ataque: 190,
        vida: 2000,
        imagen:imagenBlastoise,
        usuario:usuario.uid
    })
    
    const pokemon28 = Object.freeze({
        id: 28,
        bombo:"4",
        nombre: 'Tiranitar',
        tipo: 'roca',
        ataque: 190,
        vida: 2000,
        imagen:imagenTiranitar,
        usuario:usuario.uid
    })
    
    const pokemon29 = Object.freeze({
        id: 29,
        bombo:"1",
        nombre: 'Raikuaza',
        tipo: 'dragon',
        ataque: 220,
        vida: 2000,
        imagen:imagenRaikuaza,
        usuario:usuario.uid
    })
    
    const pokemon30 = Object.freeze({
        id: 30,
        bombo:"2",
        nombre: 'Suicune',
        tipo: 'hielo',
        ataque: 200,
        vida: 2000,
        imagen:imagenSuicune,
        usuario:usuario.uid
    })
    
    const pokemon31 = Object.freeze({
        id: 31,
        bombo:"3",
        nombre: 'Aerodactyl',
        tipo: 'dragon',
        ataque: 190,
        vida: 2000,
        imagen:imagenAerodactyl,
        usuario:usuario.uid
    })
    
    const pokemon32 = Object.freeze({
        id: 32,
        bombo:"4",
        nombre: 'Arcanine',
        tipo: 'fuego',
        ataque: 180,
        vida: 2000,
        imagen:imagenArcanine,
        usuario:usuario.uid
    })
    
    
    const pokemones4 = [pokemon8, pokemon3, pokemon6,pokemon12,pokemon26, pokemon27,pokemon20, pokemon21, pokemon22,pokemon23,pokemon11,pokemon31,pokemon32,pokemon13, pokemon14,pokemon17,pokemon9,pokemon2,pokemon25,pokemon1,pokemon10,pokemon7, pokemon18,pokemon24,pokemon16,pokemon28, pokemon29,pokemon15,pokemon19, pokemon30,pokemon4,pokemon5]
    return pokemones4


}



export default useUsuario4;