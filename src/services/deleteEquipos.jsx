import axios from 'axios';

export const deleteEquipos = async (id) => {
    const url = `http://127.0.0.1:8000/api/partidos/${id}`
    const {data} = await axios.delete(url) 
    return data;
}