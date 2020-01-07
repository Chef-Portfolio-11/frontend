import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const POST_DATA_START = 'POST_DATA_START';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';
export const HANDLE_NAME = 'HANDLE_NAME';
export const HANDLE_USERNAME = 'HANDLE_USERNAME';
export const HANDLE_EMAIL = 'HANDLE_EMAIL';
export const HANDLE_PASSWORD = 'HANDLE_PASSWORD';
export const HANDLE_CHEF = 'HANDLE_CHEF';
export const HANDLE_SUBMIT_USER = 'HANDLE_SUBMIT_USER';

export const handleName = e => {
    return { type: HANDLE_NAME, payload: e.target.value }
}

export const handleUsername = e => {
    return { type: HANDLE_USERNAME, payload: e.target.value }
}

export const handleEmail = e => {
    return { type: HANDLE_EMAIL, payload: e.target.value }
}

export const handlePassword = e => {
    return { type: HANDLE_PASSWORD, payload: e.target.value }
}

export const handleChef = e => {
    return { type: HANDLE_CHEF, payload: e.target.value }
}

export const handleSubmitUser = data => dispatch => {
    dispatch({ type: POST_DATA_START })
    const newUser = {...data, id: Date.now()}

    axios
        .post(`register api end point`, newUser)
        .then(res => {
            console.log(res)
            dispatch({ type: POST_DATA_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: POST_DATA_FAILURE, payload: err })
        })
}

export const handleLogin = data => dispatch => {
    dispatch({ type: POST_DATA_START })
    const user = {...data}

    axios
        .post(`login api end point`, user)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('userId', res.data.id)
        })
        .catch(err => console.log(`There was a login error; ${err}`))
}

