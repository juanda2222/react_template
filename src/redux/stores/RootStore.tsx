

//redux related
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from "redux-devtools-extension";

// middleware related:
const sagaMiddleware = createSagaMiddleware()
import createSagaMiddleware from 'redux-saga'

const store = createStore(
    rootReducer,
    //other enhancers
    applyMiddleware(sagaMiddleware),
    process.env.PRODUCTION === "true" ? undefined : composeWithDevTools() 
);

sagaMiddleware.run(mySaga)

export default store;