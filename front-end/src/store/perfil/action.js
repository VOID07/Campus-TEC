import { SET_PROFILE } from "./../actionTypes";

// Define la estructura del bindActionCreators, donde en este caso, user, password son los parámetros que recibe la función del action para guardar
// en el payload
export const setProfileEstudiante =({estudiante}) => {
  return {
    type: SET_PROFILE,
    payload: estudiante,
  };
};
