import React from 'react';
import { connect } from 'react-redux';

// Form code copied from https://ant.design/components/form/ - Login Form
import { Form, Input, Button, Spin } from 'antd';
import { UserOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Login = (props) => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    let errorMessage = null;
    if (props.error) {
        errorMessage = (
            <p>{props.error.message}</p>
        );
    }

    return (
        <div>
            {errorMessage}
            {
                props.loading ?
                    <Spin indicator={antIcon} />
                    :
                    <Form
                        name="normal_login"
                        className="login-form"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>

                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <NavLink to='/signup'>register now!</NavLink>
                        </Form.Item>
                    </Form>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

export default connect(mapStateToProps)(Login);