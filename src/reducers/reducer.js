export const initialState = {
    login: {
        username: "",
        password: "",
        chef: false
    }
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOGIN":
            return(
                
            )
        default:
            return state;
    }
}