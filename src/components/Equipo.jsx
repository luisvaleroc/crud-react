import React from 'react'

const Equipo = ({equipo, setEquipo, eliminarEquipo}) => {
    
    const {nombre1, puntaje1, nombre2, puntaje2, id} = equipo

    const handleEliminar = () => {
        const respuesta = confirm('Seguro Desea eliminar este equipo')

        if(respuesta){
            eliminarEquipo(id)
        }
    }
  
    return (
    <>
       <div className="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mb-5">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Score del Match</h5>
    </div>
    <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700" role="list">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img alt="Neil image" className="w-8 h-8 rounded-full"
                             src="https://cdn-icons-png.flaticon.com/512/197/197560.png"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {nombre1}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {puntaje1}
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img alt="Bonnie image" className="w-8 h-8 rounded-full"
                             src="https://cdn-icons-png.flaticon.com/512/197/197573.png"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {nombre2}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {puntaje2}
                    </div>
                </div>
            </li>
        </ul>
        
    </div>
   <div className="flex justify-between mt-10">
   <button
    type="button"
    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white front-bold uppercase rounded-lg"
    onClick={() => setEquipo(equipo)}
    >
        Editar
    </button>
    <button
    type="button"
    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white front-bold uppercase rounded-lg"
    onClick={handleEliminar}
    >
        Eliminar
    </button>
   </div>
</div> 
    </>
  )
}

export default Equipo
