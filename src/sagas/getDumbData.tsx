

import { 
    call, 
    put, 
    // takeEvery,  
    // takeLatest,
    takeLeading
} from 'redux-saga/effects'

import {   
    getDumbData  
} from "../apis"

import { 
    add_todo_to_list_sagas_type,
    add_todo_to_list_type, 
    ADD_TODO_TO_LIST_SAGAS,
    add_todo_to_list, 
    // add_todo_to_list_type 
} from "../redux/actions"




// // worker Saga: will be fired on USER_FETCH_REQUESTED actions
function * getDumbDataSaga(action: add_todo_to_list_sagas_type){
    //try {
    // console.log("Action received in sagas: ", action)
    const data = yield call(getDumbData, "data passed from sagas: " + action.value.todoContent);
    // console.log("Data received from api: ", data)
    yield put(add_todo_to_list( { todoContent: action.value.todoContent  }));
   
    // // some other redux action that handles the async error
    // } catch (e) {
    //     yield put({type: "USER_FETCH_FAILED", message: e.message});
    // }
}


export function* DumbSataSagaWatcher() {
    yield takeLeading(ADD_TODO_TO_LIST_SAGAS, getDumbDataSaga) //launch 
}


export default DumbSataSagaWatcher