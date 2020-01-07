import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    POST_DATA_START,
    POST_DATA_SUCCESS,
    POST_DATA_FAILURE,
    HANDLE_NAME,
    HANDLE_EMAIL,
    HANDLE_USERNAME,
    HANDLE_PASSWORD,
    HANDLE_PHONE,
    HANDLE_BIZ_EMAIL
} from '../actions/actions';
  
const initialState = {
    isFetching: false,
    isPosting: false,
    isLoggedIn: false,
    error: '',
    inputValues: {
        name: '',
        email: '',
        username: '',
        password: '',
        business_phone: '',
        business_email: '',
    },
    chefData: null,
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
                    name: action.payload
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
        case POST_DATA_START:
            return {
                ...state,
                isPosting: true,
            };
        case POST_DATA_SUCCESS:
            return {
                ...state,
                isPosting: false,
                inputValues: {
                    name: '',
                    email: '',
                    username: '',
                    password: '',
                },
            }
        case POST_DATA_FAILURE:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export default reducer;
