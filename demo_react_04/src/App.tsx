import React from 'react';
import { createBrowserHistory } from 'history';

import RouterCom from './RouterCom';
import { Router } from 'react-router-dom';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <RouterCom />
    </Router>
  );
}

export default App;
