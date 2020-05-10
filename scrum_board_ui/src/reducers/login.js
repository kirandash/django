import { 
    LOGIN_IN_PROGRESS, 
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_IN_PROGRESS, 
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
} from "../actions/login";

// login reducer to handle login related events
export const login = (initialState = { isLoading: false, data: [] }, action) => { // A reducer is called, every time an action happens in our App. It accepts 2 args: initial state and action that is triggered.
    const { type, payload } = action;
    switch(type){
        case LOGIN_IN_PROGRESS: {
            return {
                ...initialState, // rest of the state untouched
                isLoading: true // API still loading
            }
        }
        case LOGIN_SUCCESS: {
            return {
                isLoading: false,
                data: payload // payload from API will have user data in JSON format { username, password }
            }
        }
        case LOGIN_FAILURE: {
            return {
                ...initialState, // rest of the state untouched
                isLoading: false // API finished loading
            }
        }
        case LOGOUT_IN_PROGRESS: {
            return {
                ...initialState, // rest of the state untouched
                isLoading: true // API still loading
            }
        }
        case LOGOUT_SUCCESS: {
            return {
                isLoading: false,
                data: [] // payload from API will have user data in JSON format { username, password }
            }
        }
        case LOGOUT_FAILURE: {
            return {
                ...initialState, // rest of the state untouched
                isLoading: false // API finished loading
            }
        }
        default: {
            return initialState;
        }
    }
};