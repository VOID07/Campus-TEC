import { createStore, combineReducers } from "redux";
import login from "./tipo_usuario/reducer";

// Combina los diferentes reducers en uno solo para accederlos desde el store
const reducers = combineReducers({
  login,
});

// Store de todos los reducers
const store = createStore(reducers);

export default store;
