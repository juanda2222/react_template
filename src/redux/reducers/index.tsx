
import { combineReducers } from 'redux'

//import all the reducers:
import todoDataReducer, { todoReducerStateType} from "./todoReducer"

// define the app state type
export interface appState {
  // dumbDataReducer: dumbReducerStateType<
  todoDataReducer: todoReducerStateType
}

// export the reducers for the store combination
const rootReducer = combineReducers({
  // dumbDataReducer,
  todoDataReducer,
  //more reducers here...
})

export default rootReducer;