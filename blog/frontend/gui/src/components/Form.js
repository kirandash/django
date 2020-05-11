import React from 'react';
import { Form, Input, Button } from 'antd';

const CustomForm = () => {

    const handleFormSubmit = values => {
        const title = values.title;
        const content = values.content;

        console.log(title, content);
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
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CustomForm;