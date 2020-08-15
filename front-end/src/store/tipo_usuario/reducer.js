import { SET_USER_PASSWORD } from "./../actionTypes";
// Estado inicial con valores por defecto
const initialState = {
  tipo_usuario: 1,
  user: "",
  password: "",
};

// Dependiendo del action que se vaya a realizar, asigna los valores al estado
export default function (state = initialState, action) {
  if (action.type === SET_USER_PASSWORD){
      return {
        ...state,
        user: action.payload.user,
        password: action.payload.password,
      };
  }
  return state;
}
