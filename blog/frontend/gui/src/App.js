import React from 'react';

import CustomLayout from './containers/Layout';
import ArticleList from './containers/ArticleListView';

import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <ArticleList/>
      </CustomLayout>
    </div>
  );
}

export default App;
