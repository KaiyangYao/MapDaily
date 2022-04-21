import React from "react";
import App from "./components/App";
import store from './app/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

ReactDOM.render(

<BrowserRouter>

<Provider store={store}>
  <App />, 
 </Provider>
</BrowserRouter>

,

document.getElementById("root")
);
