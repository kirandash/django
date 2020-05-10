import React from 'react';
import { connect } from 'react-redux';

import LoginForm from '../ui/LoginForm';
import { login, logout } from '../../thunks/login';
import { getUser } from '../../selectors/login';

const LoginFormContainer = ({ user, onLogin, onLogout }) => (
    <LoginForm user={user} login={onLogin} logout={onLogout}/>
);

const mapStateToProps = state => ({
    user: getUser(state), // calling getUser selector
});

const mapDispatchToProps = dispatch => ({
    onLogin: user => dispatch(login(user)),
    onLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);