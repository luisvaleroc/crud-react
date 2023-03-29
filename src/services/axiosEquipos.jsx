import axios from "axios";

export const axiosEquipos = async () => {
  const url = `http://127.0.0.1:8000/api/partidos`;
  const { data } = await axios.get(url);
  const data2 = data.map((data) => {
    return  {
      "nombre1": data.equipo1,
      "puntaje1": data.puntaje1,
      "id": data.id,
      "nombre2": data.equipo2,
      "puntaje2": data.puntaje2
    }
  });
  return data2;
};
