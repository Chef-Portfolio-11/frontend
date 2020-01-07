export const login = (username, passoword, chef) => {
    return ({
        type: "LOGIN",
        username: username,
        password: password,
        chef: chef
    })
}