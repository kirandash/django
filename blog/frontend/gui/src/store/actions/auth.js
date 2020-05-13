import axios from 'axios';
import * as actionTypes from './actionTypes';

// Action Creators
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token // payload
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error // payload
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

// Methods
export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000) // setTimeout delay in ms
    }
}

// Thunks to make API Calls
export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/rest-auth/login/', {
            username: username,
            password: password
        })
            .then(res => {
                const token = res.data.key; // CSRF Token returned by Django after logging in. We need to store that and pass with header for other APIs for a proper authentication.
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000); // One hour in future
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate); // Can't store token and exp date in store because store will be erased on reloading
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600)); // dispatch checkAuthTimeout every 1 hour = 3600 sec
            })
            .catch(error => {
                dispatch(authFail(error))
            });
    }
}

export const authSignup = (username, email, password1, password2) => { // By default Django requires 4 params for sign up. Can be changed to make email optional in Django.
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/rest-auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2,
        })
            .then(res => {
                const token = res.data.key; // CSRF Token returned by Django after logging in. We need to store that and pass with header for other APIs for a proper authentication.
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000); // One hour in future
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate); // Can't store token and exp date in store because store will be erased on reloading
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600)); // dispatch checkAuthTimeout every 1 hour = 3600 sec
            })
            .catch(error => {
                dispatch(authFail(error))
            });
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) { // If expirationDate is before today
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}