import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/store';

function renderAll() {
  ReactDOM.render(
    <App data={store.getState()} 
    dispatch={store.dispatch.bind(store)} />,
    document.getElementById('root')
  );
}
store.subscribe(renderAll);
renderAll();

