import Formulario from './components/Formulario'
import Header from './components/Header'
import Listado from './components/Listado'
import useEquipos from './hooks/useEquipos'


function App() {


  const {setEquipos, equipos, eliminarEquipo, equipo, editarEequipo, setEquipo} =   useEquipos(); 

  return (
    <div className="container mx-auto mt-20">
    <Header/>
    <div className="mt-12 md:flex">
    <Formulario
    setEquipos={setEquipos}
    equipos={equipos}
    equipo={equipo}
    //setEquipo={setEquipo}
    editarEequipo={editarEequipo}
    />
    <Listado
    equipos={equipos}
    setEquipo={setEquipo}
    //editarEequipo={editarEequipo}
    eliminarEquipo={eliminarEquipo}
    />
    </div>
    </div>
  )

}

export default App
