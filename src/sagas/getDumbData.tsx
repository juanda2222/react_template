

import { 
    call, 
    put, 
    // takeEvery,  
    takeLatest 
} from 'redux-saga/effects'

import {   
    getDumbData  
} from "../apis"

import { 
    ADD_TODO_TO_LIST, 
    add_todo_to_list, 
    // add_todo_to_list_type 
} from "../redux/actions"




// // worker Saga: will be fired on USER_FETCH_REQUESTED actions
function * getDumbDataSaga(action: {
    todoContent: string,
    type: string
}){
    //try {
    const data = yield call(getDumbData, "data passed from sagas: " + action.todoContent);
    console.log("Data received from api: ", data)
    yield put(add_todo_to_list(action));
   
    // // some other redux action that handles the async error
    // } catch (e) {
    //     yield put({type: "USER_FETCH_FAILED", message: e.message});
    // }
}


export function* DumbSataSagaWatcher() {
    yield takeLatest(ADD_TODO_TO_LIST, getDumbDataSaga) //launch 
}


export default DumbSataSagaWatcher