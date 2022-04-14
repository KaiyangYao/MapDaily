import React from "react";
import { render } from "react-dom";
import Main from "./components/Main";
import store from './app/store'
import { Provider } from 'react-redux'

render(
<Provider store={store}>
<Main />, 
</Provider>,
document.getElementById("root")
);
