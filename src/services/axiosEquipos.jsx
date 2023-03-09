import axios from 'axios';

export const axiosEquipos = async () => {
    const url = `http://127.0.0.1:8000/api/partidos`
    const {data} = await axios.get(url) 

    return data;
}