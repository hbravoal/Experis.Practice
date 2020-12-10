import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import CovidContext from './Context/CovidContext';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
     <CovidContext>
      <Router>
          <div>hlol</div>
      </Router>
      </CovidContext>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
