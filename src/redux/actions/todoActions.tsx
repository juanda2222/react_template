
import {  argType, dataType, getDumbData } from "../../apis/index"

//Action Types
export const CHANGE_TODO_ITEM_STATE = "CHANGE_TODO_ITEM_STATE";
export const ADD_TODO_TO_LIST = "ADD_TODO_TO_LIST";

//type
export type change_todo_item_state_type = {
    type: typeof CHANGE_TODO_ITEM_STATE,
    value: {todoId:string, todoState:boolean}
}
export type add_todo_to_list_type = {
    type: typeof ADD_TODO_TO_LIST,
    value: {todoContent:string}
}


//Action Creator
export const change_todo_item_state = (receivedData: {
    todoId: string,
    todoState: boolean
}): change_todo_item_state_type => ({

    type: CHANGE_TODO_ITEM_STATE,
    value: receivedData
})
export const add_todo_to_list = (receivedData: {
    todoContent: string
}): add_todo_to_list_type => ({
    type: ADD_TODO_TO_LIST,
    value: receivedData
})



