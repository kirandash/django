import React from 'react';
import axios from 'axios';

import { Card } from 'antd'; // https://ant.design/components/card/

class ArticleDetail extends React.Component{

    state = {
        article: []
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID; // To get articleID from Routes
        // Called every time the component is mounted
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res => {
                this.setState({
                    article: res.data
                })
                // console.log(res.data);
            })
    }

    render() {
        return (
            <Card title={this.state.article.title}>
                <p>{this.state.article.content}</p>
            </Card>
        )
    }
}

export default ArticleDetail; 