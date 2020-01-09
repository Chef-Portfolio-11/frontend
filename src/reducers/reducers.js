import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOG_IN_START,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT_START,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    HANDLE_NAME,
    HANDLE_EMAIL,
    HANDLE_USERNAME,
    HANDLE_PASSWORD,
    HANDLE_PHONE,
    HANDLE_BIZ_EMAIL,
    SUBMIT_RECIPE_START,
    SUBMIT_RECIPE_SUCCESS,
    SUBMIT_RECIPE_FAILURE,
    DELETE_RECIPE_START,
    DELETE_RECIPE_SUCCESS,
    DELETE_RECIPE_FAILURE
} from '../actions/actions';
  
const initialState = {
    isFetching: false,
    isPosting: false,
    isLoggedIn: false,
    isEditing: false,
    isDeleting: false,
    error: '',
    inputValues: {
        id: null,
        full_name: '',
        email: '',
        username: '',
        password: '',
        business_phone: '',
        business_email: '',
    },
    recipeData: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                recipeData: action.payload,
                isFetching: false,
                error: null
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case HANDLE_NAME:
            return {
                ...state,
                inputValues: {
                    ...state.inputValues,
                    full_name: action.payload
                }
            };
        case HANDLE_EMAIL:
            return {
                ...state,
                inputValues: {
                    ...state.inputValues,
                    email: action.payload
                }
            };
        case HANDLE_USERNAME:
            return {
                ...state,
                inputValues: {
                    ...state.inputValues,
                    username: action.payload
                }
            };
        case HANDLE_PASSWORD:
            return {
                ...state,
                inputValues: {
                    ...state.inputValues,
                    password: action.payload
                }
            };
        case HANDLE_PHONE:
            return {
                ...state,
                inputValues: {
                    ...state.inputValues,
                    business_phone: action.payload
                }
            }
        case HANDLE_BIZ_EMAIL:
            return {
                ...state,
                inputValues: {
                    ...state.inputValues,
                    business_email: action.payload
                }
            }
        case REGISTER_START:
            return {
                ...state,
                isPosting: true,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                isPosting: false,
                inputValues: {
                    id: null,
                    full_name: '',
                    email: '',
                    username: '',
                    password: '',
                    business_phone: '',
                    business_email: '',
                },
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
        case LOG_IN_START:
            return {
                ...state,
                isPosting: true,
            }
        case LOG_IN_SUCCESS:
            return {
                ...state,
                isPosting: false,
                isLoggedIn: true,
                inputValues: {
                    username: '',
                    password: '',
                }
            }
        case LOG_IN_FAILURE:
            return {
                ...state,
                error: action.payload,
                isPosting: false
            }
        case LOG_OUT_START:
            return {
                ...state,
                isPosting: true,
            }
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                isPosting: false,
                isLoggedIn: false,
            }
        case LOG_OUT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isPosting: false
            }
        case SUBMIT_RECIPE_START:
            return {
                ...state,
                isPosting: true
            }
        case SUBMIT_RECIPE_SUCCESS:
            return {
                ...state,
                isPosting: false,
                recipeData: null
            }
        case SUBMIT_RECIPE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isPosting: false
            }
        case DELETE_RECIPE_START:
            return {
                ...state,
                isDeleting: true,
            }
        case DELETE_RECIPE_SUCCESS:
            return {
                ...state,
                isDeleting: false,
            }
        case DELETE_RECIPE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isDeleting: false
            }
        default:
            return state;
    }
};

export default reducer;