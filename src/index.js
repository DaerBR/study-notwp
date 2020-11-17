import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Root>
        <App />
    </Root>,
    document.querySelector("#app")
);