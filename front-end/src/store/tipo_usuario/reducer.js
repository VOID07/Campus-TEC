const initialState = { tipo_usuario: 0};

export default (state = initialState, action) => {
    if (action.type === "UPDATE_USER_TYPE"){
        return {
            ... state,
            tipo_usuario: action.payload
        }
    }

    return state;
}

export const tipoUsuario = state => state.