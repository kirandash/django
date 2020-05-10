import { 
    loginInProgress, 
    loginSuccess, 
    loginFailure,
    logoutInProgress,
    logoutSuccess,
    logoutFailure,
} from '../actions/login';

export const login = userDetails => async(dispatch, getState) => {
    try {
        dispatch(loginInProgress());
        const response = await fetch('http://127.0.0.1:8000/auth_api/login/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        });
        const user = await response.json();
        if(response.ok)
        dispatch(loginSuccess(user));
    } catch(e) {
        dispatch(loginFailure());
    }
};

export const logout = () => async(dispatch, getState) => {
    try {
        dispatch(logoutInProgress());
        const response = await fetch('http://127.0.0.1:8000/auth_api/logout/');
        if(response.ok)
        dispatch(logoutSuccess());
    } catch(e) {
        dispatch(logoutFailure());
    }
}