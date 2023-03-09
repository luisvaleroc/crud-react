import { useState, useEffect } from 'react'
import { axiosEquipos } from '../services/axiosEquipos';
import { deleteEquipos } from '../services/deleteEquipos';




const useEquipos = () => {
 
    const [equipos, setEquipos] = useState([]);

   
   
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
        console.log(equipos2)
      setEquipos(equiposActualizados);
    }
 
 
 
    return {
        eliminarEquipo,
        equipos,
        setEquipos
        
}
}

export default useEquipos;
