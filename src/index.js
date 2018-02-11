import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

//added secondary dom element div for Unit testing
ReactDOM.render(<App />,
     document.getElementById('root') || document.createElement('div')
 );
registerServiceWorker();
