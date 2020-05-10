import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Wrapper = styled.div`
    margin: 1rem;
    display: flex;
    justify-content: center;
`;

const Input = styled.input`
    margin: 0 1rem 0 0;
    flex 0 0 150px;
`;

const Button = styled.button`
    background: green;
    color: white;
`;

const LogoutButton = styled.button`
    background: red;
    color: white;
`;

const LoginForm = () => {
    const [userDetails, setUserDetails] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;

        setUserDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const { username, password } = userDetails;

    return (
        <div>
            <Wrapper>
                <Input type="text" name="username" placeholder="Username" onChange={handleChange} value={username} />
                <Input type="password" name="password" placeholder="Password" onChange={handleChange} value={password} />
                <Button>Login</Button>
            </Wrapper>
            <Wrapper>
                <LogoutButton>Logout</LogoutButton>
            </Wrapper>
        </div>
    )
};

export default LoginForm;