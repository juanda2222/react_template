

import { all } from 'redux-saga/effects'


//import sagas
import getDumbDataSaga from "./getDumbData"




// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    getDumbDataSaga()
  ])
}