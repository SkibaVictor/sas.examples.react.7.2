import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/store';

function renderAll() {
  ReactDOM.render(
    <App data={store.getState()} 
    orderAsc={store.orderAsc.bind(store)} 
    orderDesc={store.orderDesc.bind(store)}/>,
    document.getElementById('root')
  );
}
store.subscribe(renderAll);
renderAll();

