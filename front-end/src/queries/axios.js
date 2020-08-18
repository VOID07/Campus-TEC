const axios_ = require("axios");
const apiUrl = require("./../constants/constants").apiUrl;

const postUserPassEstudiante = (user, pass) => {
  let query = `query {
        estudiante(carne: ${user}, pin: ${pass}) {
          iD
          nombre_estudiante
          apellido_estudiante
        }
      }`;
  return new Promise((resolve) => {
    axios_
      .post(apiUrl, {
        query: query,
      })
      .then((res) => {
        resolve(res.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

const infoPerfilEstudiante = (user,pass) => {
  let query =  `query {
    estudiante(carne: ${user}, pin: ${pass}) {
      apellido_estudiante
      cantidad_TEColones
      carne
      email_1
      email_2
      foto
      matriculas {
        curso{
          nombreCurso
          codigoCurso
          cursoId

        }
        matriculaId
      }
      nombre_estudiante
      nombre_Sede
      nombre_Universidad
      telefono
    }`;
  return new Promise((resolve) => {
    axios_
        .post(apiUrl, {
          query: query,
        })
        .then((res) => {
          resolve(res.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
  });
};

export default postUserPassEstudiante;
