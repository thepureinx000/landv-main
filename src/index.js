import React from 'react';
import ReactDOM from 'react-dom';
import './media/css/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
