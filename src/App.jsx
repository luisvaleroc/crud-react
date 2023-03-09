import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Listado from './components/Listado'
import useEquipos from './hooks/useEquipos'


function App() {

  const [equipo, setEquipo] = useState({});

  const {setEquipos, equipos, eliminarEquipo} =   useEquipos(); 

  return (
    <div className="container mx-auto mt-20">
    <Header/>
    <div className="mt-12 md:flex">
    <Formulario
    setEquipos={setEquipos}
    equipos={equipos}
    equipo={equipo}
    setEquipo={setEquipo}
    />
    <Listado
    equipos={equipos}
    setEquipo={setEquipo}
    eliminarEquipo={eliminarEquipo}
    />
    </div>
    </div>
  )

}

export default App
