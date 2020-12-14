
import {  argType, dataType, getDumbData } from "../../apis/index"

//Action Types
export const CHANGE_TODO_ITEM_STATE = "CHANGE_TODO_ITEM_STATE";

//type
export type change_todo_item_state_type = {
    type: typeof CHANGE_TODO_ITEM_STATE,
    value: {todoId:string, todoState:boolean}
}
//Action Creator
export const change_todo_item_state = (receivedData: {
    todoId: string,
    todoState: boolean
}): change_todo_item_state_type => ({
    
    type: CHANGE_TODO_ITEM_STATE,
    value: receivedData
})


export const ADD_TODO_TO_LIST = "ADD_TODO_TO_LIST";
export type add_todo_to_list_type = {
    type: typeof ADD_TODO_TO_LIST,
    value: {todoContent:string}
}
export const add_todo_to_list = (receivedData: {
    todoContent: string
}): add_todo_to_list_type => ({
    type: ADD_TODO_TO_LIST,
    value: receivedData
})


// Async Actions connected to the sagas
export const ADD_TODO_TO_LIST_SAGAS = "ADD_TODO_TO_LIST_SAGAS";

export type add_todo_to_list_sagas_type = {
    type: typeof ADD_TODO_TO_LIST_SAGAS,
    value: {todoContent:string}
}

export const add_todo_to_list_sagas = (receivedData: {
    todoContent: string
}): add_todo_to_list_sagas_type => ({
    type: ADD_TODO_TO_LIST_SAGAS,
    value: receivedData
})