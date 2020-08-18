import { SET_PROFILE_PROFESOR } from "./../actionTypes";

// Define la estructura del bindActionCreators, donde en este caso, user, password son los parámetros que recibe la función del action para guardar
// en el payload

export const setProfileProfesor =({profesor}) => {
  return {
    type: SET_PROFILE_PROFESOR,
    payload: profesor,
  };
};
