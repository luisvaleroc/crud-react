import React from 'react'
import Equipo from './Equipo'

const Listado = ({equipos, setEquipo, eliminarEquipo}) => {
  return (
    
    <div class="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {
      (equipos.length > 0)  ? <h2 className="font-black text-3xl text-center mb-5">Listado de puntajes</h2> 
       : <h2 className="font-black text-3xl text-center mb-5">comience a llenar el listado de puntajes</h2>
      }
    {
     
     
       equipos.map(equipo=>(
        <Equipo
        key={equipo.id}
        equipo={equipo}
        setEquipo= {setEquipo}
        eliminarEquipo={eliminarEquipo}
        />
       ) )
    }
    
    
  
    </div>
 
    
  )
}

export default Listado
