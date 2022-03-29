import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, componse } from 'redux';
import thunk from 'redux-thunk';

ReactDom.render(<App />, document.getElementById('root'));
