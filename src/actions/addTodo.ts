import * as ActionType from '../action-type'

export type AddTodoAction = {
    type: ActionType.ADD_TODO,
    text: string,
}
export type DeleteTodoAction = {
    type: ActionType.DELETE_TODO,
    index: number,
}

export type addTodo = typeof addTodo;

export function addTodo(text: string): AddTodoAction {
    return {
        type: ActionType.ADD_TODO,
        text: text,
    }
}

export function deleteTodo(index: number): DeleteTodoAction {
    return {
        type: ActionType.DELETE_TODO,
        index: index,
    }
}