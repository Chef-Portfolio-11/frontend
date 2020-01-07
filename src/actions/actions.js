import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'

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
export const HANDLE_PHONE = 'HANDLE_PHONE';
export const HANDLE_BIZ_EMAIL = 'HANDLE_BIZ_EMAIL';
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

export const handlePhone = e => {
    return { type: HANDLE_PHONE, payload: e.target.value }
}

export const handleBizEmail = e => {
    return { type: HANDLE_BIZ_EMAIL, payload: e.target.value }
}

export default getRecipes = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    console.log(`Getting recipes!`)

    axios
        .get(`/`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
        });
};


export const handleSubmitUser = data => dispatch => {
    dispatch({ type: POST_DATA_START })
    const newUser = {...data, id: Date.now()}

    axiosWithAuth()
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

    axiosWithAuth()
        .post(`login api end point`, user)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('userId', res.data.id)
        })
        .catch(err => console.log(`There was a login error; ${err}`))
}