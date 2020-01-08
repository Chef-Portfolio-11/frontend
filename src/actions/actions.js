import axiosWithAuth from '../utils/axiosWithAuth';
import { push } from 'react-router-redux';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOG_IN_START = 'LOG_IN_START';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT_START = 'LOG_OUT_START';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
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

export const getRecipes = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    console.log(`Getting recipes!`)

    axiosWithAuth()
        .get(`/recipes`)
        .then(res => {
            console.log(res.data)
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
        });
};

export const handleLogOut = () => dispatch => {
    dispatch({ type: LOG_OUT_START })
    axiosWithAuth()
        .post('/auth/logout')
        .then(res => {
            localStorage.removeItem('token')
            dispatch({ type: LOG_OUT_SUCCESS })
            console.log(res, 'Logged out!')
            
        })
        .catch(err => {
            dispatch({ type: LOG_OUT_FAILURE, payload: err.response })
            console.log('error logging out;', err)
        })
}

export const handleSubmitUser = data => dispatch => {
    dispatch({ type: REGISTER_START })
    const newUser = {...data}

    axiosWithAuth()
        .post(`/auth/register`, newUser)
        .then(res => {
            console.log(res)
            dispatch({ type: REGISTER_SUCCESS, payload: res.data })

        })
        .catch(err => {
            dispatch({ type: REGISTER_FAILURE, payload: err })
        })
}

export const handleLogin = data => dispatch => {
    dispatch({ type: LOG_IN_START })
    const user = {...data}

    axiosWithAuth()
        .post(`/auth/login`, user)
        .then(res => {
            dispatch({ type: LOG_IN_SUCCESS, payload: res})
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('userId', res.data[0].id)
            
        })
        .catch(err => {
            dispatch({ type: LOG_IN_FAILURE, payload: err})
        })
}