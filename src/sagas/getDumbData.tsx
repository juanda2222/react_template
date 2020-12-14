

import { call, put, takeEvery,  takeLatest } from 'redux-saga/effects'
import {   getDumbData  } from "../apis"
import { ADD_TODO_TO_LIST } from "../redux/actions"



// // worker Saga: will be fired on USER_FETCH_REQUESTED actions
function * getDumbDataSaga(action) {
   try {
      const user = yield call(getDumbData, "some data");
      yield put({type: ADD_TODO_TO_LIST, user: user});
   
    // some other redux action that handles the async error
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}