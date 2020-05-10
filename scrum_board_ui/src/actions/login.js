// Action Type Constants
export const LOGIN_IN_PROGRESS = 'LOGIN_IN_PROGRESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_IN_PROGRESS = 'LOGOUT_IN_PROGRESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

// Action Creator Functions - Login API
export const loginInProgress = () => ({
    type: LOGIN_IN_PROGRESS
});

export const loginSuccess = user => ({
    type: LOGIN_SUCCESS,
    payload: user
});

export const loginFailure = () => ({
    type: LOGIN_FAILURE
});

// Action Creator Functions - Logout API
export const logoutInProgress = () => ({
    type: LOGOUT_IN_PROGRESS
});

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS // No payload from logout API
});

export const logoutFailure = () => ({
    type: LOGOUT_FAILURE
});