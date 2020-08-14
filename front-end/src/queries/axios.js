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
        resolve(res.data.data.estudiante);
      })
      .catch((error) => {
        console.error(error);
      });
  });
};
export default postUserPassEstudiante;
