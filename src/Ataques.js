
const useAtaques = ()=>
{
    const dragon = Object.freeze({
        ataque1: 'Ataque Ala',
        ataque2: 'DragoAliento',
        ataque3: 'Hiperrayo',
        ataque4: 'Furia Dragon'
    })

    const fuego = Object.freeze({
        ataque1: 'Ascuas',
        ataque2: 'Lansallamas',
        ataque3: 'Hiper Velocidad',
        ataque4: 'Llamarada'
    })

    const agua = Object.freeze({
        ataque1: 'LansaAgua',
        ataque2: 'Tornado',
        ataque3: 'Surf',
        ataque4: 'HidroBomba'
    })

    const hielo = Object.freeze({
        ataque1: 'Rayo Aurora',
        ataque2: 'Tormenta',
        ataque3: 'Rayo Hielo',
        ataque4: 'Ventisca'
    })

    const roca = Object.freeze({
        ataque1: 'Sismo',
        ataque2: 'MegaTormenta',
        ataque3: 'Hiperrayo',
        ataque4: 'Terremoto'
    })

    const electrico = Object.freeze({
        ataque1: 'Embestida',
        ataque2: 'Trueno',
        ataque3: 'Rayo',
        ataque4: 'Tormenta Electrica'
    })

    const acero = Object.freeze({
        ataque1: 'Placaje',
        ataque2: 'Huracan Metalico',
        ataque3: 'Hiperrayo',
        ataque4: 'Giga Acero'
    })

    const psiquico = Object.freeze({
        ataque1: 'Engaño',
        ataque2: 'Confusion',
        ataque3: 'Hiperrayo',
        ataque4: 'Psiquico'
    })

    const fantasma = Object.freeze({
        ataque1: 'Susto',
        ataque2: 'Pesadilla',
        ataque3: 'Bola Sombra',
        ataque4: 'Tinieblas'
    })

    const Ataques = [dragon, fuego, agua, hielo, roca, electrico, acero, psiquico, fantasma]
    return Ataques
    
}

export default useAtaques;