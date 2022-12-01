import React, { useState } from 'react'
import Error from './Error'
const Formulario = () => {


     const  [nombre1, setNombre1] =    useState('');
     const  [puntaje1, setPuntaje1] =    useState('');
     const  [nombre2, setNombre2] =    useState('');
     const  [puntaje2, setPuntaje2] =    useState('');

     const [error, setError] = useState(false);
    const handleSubmit = (e) => {
      e.preventDefault();

      if([nombre1, puntaje1, nombre2, puntaje2].includes('')){
        setError(true);
        return;
      }
      setError(false);
    }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
    <h2 className="text-lg mt-5 text-center block">Seguimiento de partidos {nombre1}</h2>

    <br/>
   <form 
   className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
   onSubmit={handleSubmit}
   >
   { error &&  <Error/>  }

  <div className="mb-5">
  <label className="block text-gray-700 text-sm font-bold mb-2" for="nombre1">
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
  <label className="block text-gray-700 text-sm font-bold mb-2" for="puntaje1">
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
  <label className="block text-gray-700 text-sm font-bold mb-2" for="nombre2">
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
  Enviar Marcador
</button>
   </form>
   </div>
  )
}

export default Formulario
