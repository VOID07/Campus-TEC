import { SET_PROFILE } from "./../actionTypes";
// Estado inicial con valores por defecto
const initialState = {
    estudiante: {}
};

// Dependiendo del action que se vaya a realizar, asigna los valores al estado
export default function (state = initialState, action) {
  if (action.type === SET_PROFILE){
      return {
        ...state,
        estudiante: action.payload
      };
  }
  return state;
}
