import axiosWithAuth from '../utils/axiosWithAuth';

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

export const SUBMIT_RECIPE_START = 'SUBMIT_RECIPE_START';
export const SUBMIT_RECIPE_SUCCESS = 'SUBMIT_RECIPE_SUCCESS';
export const SUBMIT_RECIPE_FAILURE = 'SUBMIT_RECIPE_FAILURE';

export const UPDATE_RECIPE_START = 'UPDATE_RECIPE_START';
export const UPDATE_RECIPE_SUCCESS = 'UPDATE_RECIPE_SUCCESS';
export const UPDATE_RECIPE_FAILURE = 'UPDATE_RECIPE_FAILURE';

export const DELETE_RECIPE_START = 'DELETE_RECIPE_START';
export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS';
export const DELETE_RECIPE_FAILURE = 'DELETE_RECIPE_FAILURE';

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

export const handleLogin = (username, password) => dispatch => {
    dispatch({ type: LOG_IN_START })
    const user = {
        username: username,
        password: password
    }
    console.log(user)
    
    axiosWithAuth()
    .post(`/auth/login`, user)
    .then(res => {
        console.log(res.data)
        dispatch({ type: LOG_IN_SUCCESS, payload: res.data})
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('userId', res.data[0].id)
        
    })
    .catch(err => {
        dispatch({ type: LOG_IN_FAILURE, payload: err})
    })
}

export const handleLogOut = () => dispatch => {
    dispatch({ type: LOG_OUT_START })
    axiosWithAuth()
        .post('/auth/logout')
        .then(res => {
            dispatch({ type: LOG_OUT_SUCCESS })
            localStorage.removeItem('token')
            localStorage.removeItem('userId', res.data[0].id)
            console.log(res, 'Logged out!')
            
        })
        .catch(err => {
            dispatch({ type: LOG_OUT_FAILURE, payload: err.response })
            console.log('error logging out;', err)
        })
}

export const submitRecipe = data => dispatch => {
    dispatch({ type: SUBMIT_RECIPE_START })
    console.log('submitting recipe')
    const newRecipe = {...data}

    axiosWithAuth()
        .post(`/auth/recipes/${newRecipe.user_id}`, newRecipe)
        .then(res => {
            dispatch({ type: SUBMIT_RECIPE_SUCCESS, payload: res.data })
            console.log('submitted!')
        })
        .catch(err => {
            dispatch({ type: SUBMIT_RECIPE_FAILURE, payload: err })
            console.log('recipe was not submitted')
        })
}

export const updateRecipe = data => dispatch => {
    dispatch({ type: UPDATE_RECIPE_START })
    console.log('updating...')
    const recipeToUpdate = {...data}

    axiosWithAuth()
        .post(`/auth/recipes/${recipeToUpdate.id}/`, recipeToUpdate)
        .then(res => {
            dispatch({ type: UPDATE_RECIPE_SUCCESS, payload: res.data })
            console.log('updated!')
        })
        .catch(err => {
            dispatch({ type: UPDATE_RECIPE_FAILURE, payload: err })
            console.log('recipe was not updated')
        })
}

export const deleteRecipe = data => dispatch => {
    dispatch({ DELETE_RECIPE_START })
    console.log('deleting...')
    const recipe = {...data}

    axiosWithAuth()
        .delete(`/auth/recipes/${recipe.id}`)
        .then(res => {
            dispatch({ type: DELETE_RECIPE_SUCCESS, payload: res.data })
            console.log('deleted!')
        })
        .catch(err => {
            dispatch({ type: DELETE_RECIPE_FAILURE, payload: err })
            console.log('recipe was not deleted')
        })
}