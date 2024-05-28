import React from 'react';;
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {store} from './redux/store';
import {Provider} from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
//import {store first } then {provider} then remove react script mode then add provider tag 
//then redux ke andar counterSlice folder yaaad se store me nahi phir counterrslice me index.jsx ya counter.jsx
