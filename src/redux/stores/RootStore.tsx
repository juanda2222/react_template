

//redux related
import {createStore } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    rootReducer,
    //other enhancers
    process.env.PRODUCTION === "true" ? undefined : composeWithDevTools() 
);


export default store;