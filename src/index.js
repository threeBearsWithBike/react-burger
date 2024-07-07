import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './services/store';



require('./index.module.css');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>


);
reportWebVitals();
