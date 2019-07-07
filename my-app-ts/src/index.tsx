import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import App from './App';
import Main from './Nav';
//import './declare_modules.d'
//import Test from './test';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Main />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
