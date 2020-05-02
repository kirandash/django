import React from 'react';

import ScrumListContainer from './components/containers/ScrumList';
import AddListFormContainer from './components/containers/AddListForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <AddListFormContainer/>
      <ScrumListContainer/>
    </div>
  );
}

export default App;
