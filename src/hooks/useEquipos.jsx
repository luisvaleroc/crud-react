import { useState, useEffect } from 'react'
import { axiosEquipos } from '../services/axiosEquipos';
import { deleteEquipos } from '../services/deleteEquipos';
import { editarEquipos } from '../services/editarEquipos';




const useEquipos = () => {
 
    const [equipos, setEquipos] = useState([]);
    const [equipo, setEquipo] = useState({});
   
   
    const obtenerLS = async() => {

        const equipoLS = await axiosEquipos();
        setEquipos(equipoLS)
      }

   
    useEffect(() => {
      obtenerLS();
    }, []);
  
  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('equipos', JSON.stringify( equipos ));
    }, 1000);
  }, [equipos])
  
  
    const eliminarEquipo = async (id) =>{

       await  deleteEquipos(id);
        const equiposActualizados = equipos.filter(equipo => equipo.id !== id)
      setEquipos(equiposActualizados);
    }
 
    const editarEequipo = (objetoEquipo) => {
      const equiposActualizados = equipos.map(equipoState => equipoState.id === equipo.id ? objetoEquipo : equipoState )
      editarEquipos(objetoEquipo)
      setEquipos(equiposActualizados)
      setEquipo({})
    }
 
    return {
        eliminarEquipo,
        equipos,
        setEquipos,
        editarEequipo,
        equipo,
        setEquipo
        
}
}

export default useEquipos;
