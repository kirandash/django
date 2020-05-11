import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const CustomForm = (props) => {

    const handleFormSubmit = (values) => {
        const title = values.title;
        const content = values.content;

        // console.log(title, content);
        switch (props.requestType) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/articles/', {
                    title: title,
                    content: content
                })
                    .then(res => {
                        console.log(res);
                        window.location.reload(); // not recommended, better update using state
                    })
                    .catch(err => console.log(err));
            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/articles/${props.articleID}/`, {
                    title: title,
                    content: content
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
            default:
            // Do nothing
        }
    }

    return (
        <div>
            <Form onFinish={handleFormSubmit}>
                <Form.Item label="Title" name="title">
                    <Input placeholder="Enter the title" />
                </Form.Item>
                <Form.Item label="Content" name="content">
                    <Input placeholder="Enter some content" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">{props.btnText}</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CustomForm;