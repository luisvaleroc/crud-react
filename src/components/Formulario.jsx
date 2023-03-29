import React, { useState, useEffect } from 'react';
import { crearEquipos } from '../services/crearEquipos';
import { editarEquipos } from '../services/editarEquipos';

import Error from './Error'
const Formulario = ({equipos, setEquipos, equipo, editarEequipo}) => {

   
     const  [nombre1, setNombre1] =    useState('');
     const  [puntaje1, setPuntaje1] =    useState('');
     const  [nombre2, setNombre2] =    useState('');
     const  [puntaje2, setPuntaje2] =    useState('');

     const [error, setError] = useState(false);
    
    const generarId = () => {
      const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    useEffect(()=> {
      if(Object.keys(equipo).length > 0){
         setNombre1(equipo.nombre1)
         setPuntaje1(equipo.puntaje1)
         setNombre2(equipo.nombre2)
         setPuntaje2(equipo.puntaje2)
      }
    }, [equipo])
  

    
     const handleSubmit = async (e) => {
      e.preventDefault();

      if([nombre1, puntaje1, nombre2, puntaje2].includes('')){
        setError(true);
        return;
      }
      setError(false);

      const objetoEquipo = {
         nombre1,
         puntaje1,
         nombre2,
         puntaje2
      }

      if(equipo.id){
         
         objetoEquipo.id = equipo.id
         editarEequipo(objetoEquipo);
      }else{
         /* objetoEquipo.id = generarId() */
         const pruebaEquipo = await crearEquipos(objetoEquipo);
         objetoEquipo.id = pruebaEquipo.id;
         setEquipos([...equipos, pruebaEquipo]) 
      }
      

      setNombre1('')
      setPuntaje1('')
      setNombre2('')
      setPuntaje2('')

    }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
    <h2 className="text-lg mt-5 text-center block">Seguimiento de partidos {nombre1}</h2>

    <br/>
   <form 
   className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
   onSubmit={handleSubmit}
   >
   { error &&  <Error><p>Todos los campos son obligatorios</p></Error>  }

  <div className="mb-5">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre1">
        Nombre equipo 1
  </label>
     <input 
     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
     id="nombre1" 
     type="text" 
     value={ nombre1}
     placeholder="nombre equipo 1"
     onChange={ (e) => setNombre1(e.target.value) }
     ></input>
  </div>

  <div className="mb-5">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="puntaje1">
        Puntaje equipo 1
  </label>
     <input 
     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
     id="puntaje1" 
     type="text" 
     value={puntaje1}
     placeholder="Puntaje equipo 1"
     onChange={ (e) => setPuntaje1(e.target.value) }
     ></input>
  </div>

  <div className="mb-5">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre2">
        Nombre equipo 2
  </label>
     <input 
     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
     id="nombre2" 
     type="text" 
     value={ nombre2}
     placeholder="nombre equipo 2"
     onChange={ (e) => setNombre2(e.target.value) }
     ></input>
  </div>

  <div className="mb-5">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="puntaje2">
        Puntaje equipo 2
  </label>
     <input 
     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
     id="puntaje2" 
     type="text" 
     value={puntaje2}
     placeholder="Puntaje equipo 2"
     onChange={ (e) => setPuntaje2(e.target.value) }
     ></input>
  </div>
  <button 
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
  type="submit"
  >
  {equipo.id ? 'Editar Equipo' : 'Enviar Marcador' }
</button>
   </form>
   </div>
  )
}

export default Formulario
