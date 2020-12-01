

// TODO: this specific reducer should be in other file
import {
    ADD_TODO_TO_LIST,
    CHANGE_TODO_ITEM_STATE,    
    add_todo_to_list_type,
    change_todo_item_state_type,

} from '../actions/todoActions';


    interface todoType {
        text: string,
        id: string,
        checked: boolean
    }

export interface todoReducerStateType {
    todoList: todoType[]
}
  

const todoDataReducer = (
    state:todoReducerStateType = {
        todoList: [
            {
                text: "todo 1",
                id: "todo 1",
                checked: false
            },
            {
                text: "todo 2",
                id: "todo 2",
                checked: true
            },
            {
                text: "todo 3",
                id: "todo 2",
                checked: true
            } 
        ],
    }, 
    action: add_todo_to_list_type | change_todo_item_state_type
    ) => {
    switch (action.type) {
        case ADD_TODO_TO_LIST:
            console.debug("Add todo...")
            let newState = {
                ...state,
                todoList: [...state.todoList, {
                    id: action.value.todoContent,
                    checked: false,
                    text: action.value.todoContent
                }],
            };
            console.debug(newState)
            return newState

        case CHANGE_TODO_ITEM_STATE:

            console.debug("Change todo...")
            return {
                ...state,
                todoList: state.todoList.forEach(function ( todoElement:todoType ) {
                    if (todoElement.id === action.value.todoId) {
                        return {...todoElement, checked: true }
                    } else {
                        return todoElement
                    }
                }),
            };
        default:
            return {...state};
    }
};



export default todoDataReducer