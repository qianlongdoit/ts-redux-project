import * as ActionType from '../action-type'
import {AppState} from '../reducers/todos';
import {bool} from "prop-types";

export interface AddTodoAction extends AppState {
    type: ActionType.ADD_TODO,
}
export interface DeleteTodoAction {
    type: ActionType.DELETE_TODO,
    index: number,
}

export interface ToggleTodo {
    type: ActionType.TOGGLE_TODO,
    index: number,
    finished: boolean
}

export type addTodo = typeof addTodo;

export function addTodo(text: string): AddTodoAction {
    return {
        type: ActionType.ADD_TODO,
        text: text,
        finished: false,
    }
}

export function deleteTodo(index: number): DeleteTodoAction {
    return {
        type: ActionType.DELETE_TODO,
        index: index,
    }
}

export function toggleTodo(index: number, finished: boolean): ToggleTodo {
    return {
        type: ActionType.TOGGLE_TODO,
        index: index,
        finished: finished,
    }
}