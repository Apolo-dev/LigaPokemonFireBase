
import {BrowserRouter, Switch, Route} from 'react-router-dom'

// import pages

import PaginaSorteoMovil from './Pages/PaginaSorteoMovil'
import PaginaSorteoBombo2 from './Pages/PaginaSorteBombo2'
import PaginaIngreso from './Pages/PaginaIngreso'
import PaginaInicio from './Pages/PaginaInicio'
import PaginaInicioSesion from './Pages/PaginaInicioSesion'
import PaginaLogin from './Pages/PaginaLogin'
import PaginaPintarDatos from './Pages/PaginaPintarDatos'

import PaginaGrupoA from './Pages/PaginaGrupoA'
import PaginaUnico from './Pages/PaginaUnico'
import {AuthProvider} from './Context/AuthProvider'
import RutaPrivada from './Components/RutaPrivada'
import PaginBatalla2 from './Pages/PaginaBatalla2'

import PaginaAzar from './Pages/PaginaAzar'
import PaginaGrupos from './Pages/PaginaGrupos'
import PaginaGrupos2 from './Pages/PaginaGrupos2'
import PaginaPrueba from './Pages/PaginaPrueba'

import PaginaParticipantes from './Pages/PaginaParticipantes'
import PaginaParticipantesB from './Pages/PaginaParticipantesB'
import PaginaParticipantesC from './Pages/PaginaParticipantesC'
import PaginaParticipantesD from './Pages/PaginaParticipantesD'
import PaginaParticipantesE from './Pages/PaginaParticipantesE'
import PaginaParticipantesF from './Pages/PaginaParticipantesF'
import PaginaParticipantesG from './Pages/PaginaParticipantesG'
import PaginaParticipantesH from './Pages/PaginaParticipantesH'


import Pagina1Fecha1 from './Turnos/GrupoA/Pagina1Fecha1'
import Pagina2Fecha1 from './Turnos/GrupoA/Pagina2Fecha1'
import Pagina1Fecha1B from './Turnos/GrupoB/Pagina1Fecha1B'
import Pagina2Fecha1B from './Turnos/GrupoB/Pagina2Fecha1B'

import PaginaResultados from './Pages/PaginaResultados'
import PaginaResultadosB from './Pages/PaginaResultadosB'
import Pagina1Fecha1C from './Turnos/GrupoC/Pagina1Fecha1C'
import Pagina2Fecha1C from './Turnos/GrupoC/Pagina2Fecha1C'
import PaginaResultadosC from './Pages/PaginaResultadosC'




function App() {


return (
    
    <AuthProvider>
        <BrowserRouter>
        <Switch>

        <RutaPrivada path="/sorteoMovil">
            <PaginaSorteoMovil />
        </RutaPrivada>
        <RutaPrivada path="/sorteoBombo2">
            <PaginaSorteoBombo2 />
        </RutaPrivada>

        <RutaPrivada path="/azar">
            <PaginaAzar />
        </RutaPrivada>

        <RutaPrivada path="/grupos">
            <PaginaGrupos />
        </RutaPrivada>

        <RutaPrivada path="/grupos2">
            <PaginaGrupos2 />
        </RutaPrivada>

        <RutaPrivada path="/participantes">
            <PaginaParticipantes />
        </RutaPrivada>

        <RutaPrivada path="/participantesB">
            <PaginaParticipantesB />
        </RutaPrivada>

        <RutaPrivada path="/participantesC">
            <PaginaParticipantesC />
        </RutaPrivada>

        <RutaPrivada path="/participantesD">
            <PaginaParticipantesD />
        </RutaPrivada>

        <RutaPrivada path="/participantesE">
            <PaginaParticipantesE />
        </RutaPrivada>

        <RutaPrivada path="/participantesF">
            <PaginaParticipantesF />
        </RutaPrivada>

        <RutaPrivada path="/participantesG">
            <PaginaParticipantesG />
        </RutaPrivada>

        <RutaPrivada path="/participantesH">
            <PaginaParticipantesH />
        </RutaPrivada>

        <RutaPrivada path="/fecha1GrupoA">
            <Pagina1Fecha1 />
        </RutaPrivada>

        <RutaPrivada path="/fecha2GrupoA">
            <Pagina2Fecha1 />
        </RutaPrivada>

        <RutaPrivada path="/fecha1GrupoB">
            <Pagina1Fecha1B />
        </RutaPrivada>

        <RutaPrivada path="/fecha2GrupoB">
            <Pagina2Fecha1B />
        </RutaPrivada>

        <RutaPrivada path="/fecha1GrupoC">
            <Pagina1Fecha1C />
        </RutaPrivada>

        <RutaPrivada path="/fecha2GrupoC">
            <Pagina2Fecha1C />
        </RutaPrivada>



        <RutaPrivada path="/resultados">
            <PaginaResultados />
        </RutaPrivada>

        <RutaPrivada path="/resultadosB">
            <PaginaResultadosB />
        </RutaPrivada>

        <RutaPrivada path="/resultadosC">
            <PaginaResultadosC />
        </RutaPrivada>

        <RutaPrivada path="/prueba">
            <PaginaPrueba />
        </RutaPrivada>

       

            

        <RutaPrivada path="/ingreso">
            <PaginaIngreso />
        </RutaPrivada>

        <RutaPrivada path="/pintarDatos">
            <PaginaPintarDatos />
        </RutaPrivada>
        <RutaPrivada path="/grupoA">
            <PaginaGrupoA />
        </RutaPrivada>
        <RutaPrivada path="/unico">
            <PaginaUnico />
        </RutaPrivada>
        <RutaPrivada path="/batalla2">
            <PaginBatalla2/>
        </RutaPrivada>
       
       

        
        <Route exact path="/" component={PaginaInicio}/>
        <Route exact path="/inicioSesion" component={PaginaInicioSesion}/>
        <Route exact path="/login" component={PaginaLogin}/>
        </Switch>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
