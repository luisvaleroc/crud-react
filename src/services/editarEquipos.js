import axios from 'axios';

export const editarEquipos = async ({nombre1, puntaje1, nombre2, puntaje2, id}) => {
    const url = `http://127.0.0.1:8000/api/partidos/${id}`;
    const {data} = await axios.put (url, {
        "equipo1": nombre1,
        "puntaje1": parseInt(puntaje1),
        "equipo2": nombre2,
        "puntaje2": parseInt(puntaje2)
        
});
    return data
};

