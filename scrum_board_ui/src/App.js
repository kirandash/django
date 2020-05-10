import React from 'react';

import LoginFormContainer from './components/containers/LoginForm';
import ScrumListContainer from './components/containers/ScrumList';
import AddListFormContainer from './components/containers/AddListForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <LoginFormContainer/>
      <AddListFormContainer/>
      <ScrumListContainer/>
    </div>
  );
}

export default App;
