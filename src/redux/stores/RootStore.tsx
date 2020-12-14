

//redux related
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from "redux-devtools-extension";

// middleware related:
import rootSaga from "../../sagas"
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    //other enhancers
    applyMiddleware(sagaMiddleware),
    process.env.PRODUCTION === "true" ? undefined : composeWithDevTools() 
);

sagaMiddleware.run(rootSaga)

export default store;