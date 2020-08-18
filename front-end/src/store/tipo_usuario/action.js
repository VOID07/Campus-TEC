import { SET_USER_PASSWORD } from "./../actionTypes";

// Define la estructura del bindActionCreators, donde en este caso, user, password son los parámetros que recibe la función del action para guardar
// en el payload
export const setUserPass = (user, password) => {
  return {
    type: SET_USER_PASSWORD,
    payload: {user, password},
  };
};
