const setUserType = tipo_usuario =>{
    console.log(tipo_usuario);
    return {
        type: "UPDATE_USER_TYPE",
        payload: tipo_usuario
    }
}

export default setUserType;