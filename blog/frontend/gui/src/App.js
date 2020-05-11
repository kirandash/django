import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import CustomLayout from './containers/Layout';
// import ArticleList from './containers/ArticleListView';

import BaseRouter from './routes';

import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function App() {
  return (
    <div className="App">
      <Router>
        <CustomLayout>
          <BaseRouter/>
        </CustomLayout>
      </Router>
      {/* CustomLayout will be common to all Routes. BaseRouter will load a particular component based on the path in browser. */}
    </div>
  );
}

export default App;
