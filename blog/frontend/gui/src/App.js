import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import CustomLayout from './containers/Layout';
// import ArticleList from './containers/ArticleListView';
import * as actions from './store/actions/auth';
import BaseRouter from './routes';

import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function App(props) {

  useEffect(() => {
    props.onTryAutoSingup();
  }); // Alternate to componentDidMount for class based components

  return (
    <div className="App">
      <Router>
        {/* Sending all props to CustomLayout using {...props} */}
        <CustomLayout {...props}>
          <BaseRouter />
        </CustomLayout>
      </Router>
      {/* CustomLayout will be common to all Routes. BaseRouter will load a particular component based on the path in browser. */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSingup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
