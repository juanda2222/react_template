

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
    process.env.PRODUCTION === "true" ? (
        applyMiddleware( sagaMiddleware ) 

    ) : (
        composeWithDevTools( applyMiddleware( sagaMiddleware ) )
    )
);

sagaMiddleware.run(rootSaga)

export default store;