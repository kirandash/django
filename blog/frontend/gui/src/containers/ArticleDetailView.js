import React from 'react';
import axios from 'axios';
import { Form, Button, Card } from 'antd'; // https://ant.design/components/card/

import CustomForm from '../components/Form';

class ArticleDetail extends React.Component {

    state = {
        article: []
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID; // To get articleID from Routes
        // Called every time the component is mounted
        axios.get(`http://127.0.0.1:8000/api/articles/${articleID}`)
            .then(res => {
                this.setState({
                    article: res.data
                })
                // console.log(res.data);
            })
    }

    handleDelete = event => {
        const articleID = this.props.match.params.articleID; // To get articleID from Routes
        axios.delete(`http://127.0.0.1:8000/api/articles/${articleID}`).then(() => {
            this.props.history.push('/'); // Navigate to root
            this.forceUpdate(); // Force update of component to rerender ArticleListView.js and API calls will happen again. Not recommened. Use state instead or better redux store.
            // Force update is only available for class based components
        });
    }

    render() {
        return (
            <div>
                <Card title={this.state.article.title}>
                    <p>{this.state.article.content}</p>
                </Card>
                <br />
                <CustomForm
                    requestType='put'
                    articleID={this.props.match.params.articleID}
                    btnText='Update' />
                <Form onFinish={this.handleDelete}>
                    <Button type="danger" htmlType="submit">Delete</Button>
                </Form>
            </div>
        )
    }
}

export default ArticleDetail; 