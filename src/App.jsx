import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Listado from './components/Listado'
function App() {

  const [equipos, setEquipos] = useState([]);
  const [equipo, setEquipo] = useState({});


  useEffect(() => {
    const obtenerLS = () => {
      const equiposLS = JSON.parse(localStorage.getItem('equipos')) ?? [];
      setEquipos(equiposLS)
    }
    obtenerLS();
  }, []);

useEffect(() => {
  setTimeout(() => {
    localStorage.setItem('equipos', JSON.stringify( equipos ));
  }, 1000);
}, [equipos])


  const eliminarEquipo = id =>{
    const equiposActualizados = equipos.filter(equipo => equipo.id !== id)
    setEquipos(equiposActualizados);
  }

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
