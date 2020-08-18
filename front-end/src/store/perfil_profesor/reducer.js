import { SET_PROFILE_PROFESOR } from "./../actionTypes";
// Estado inicial con valores por defecto
const initialState = {
    profesor: {}
};

// Dependiendo del action que se vaya a realizar, asigna los valores al estado
export default function (state = initialState, action) {
  if (action.type === SET_PROFILE_PROFESOR){
      return {
        ...state,
        profesor: action.payload
      };
  }
  return state;
}
