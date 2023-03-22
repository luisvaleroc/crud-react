import axios from 'axios';

export const crearEquipos = async (param) => {
    const url = "http://127.0.0.1:8000/api/partidos";
    const {data} = await axios.post (url, {
        equipo1: param.nombre1,
        puntaje1: param.puntaje1,
        equipo2: param.nombre2,
        puntaje2: param.puntaje2
    });
    return data
};
