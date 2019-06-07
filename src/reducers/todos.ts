import * as ActionType from '../action-type'
import {AddTodoAction, DeleteTodoAction} from '../actions/addTodo'

export interface AppState {
    text: string;
}

export const initialState: AppState = {
    text: 'todoList',
};

type Action = AddTodoAction | DeleteTodoAction;

export const lists = (state: AppState[] = [initialState], action: Action) => {
    console.log(state, action);
    switch (action.type) {
        case ActionType.ADD_TODO: {
            return [
                ...state,
                {
                    text: action.text,
                }
            ]
        }
        case ActionType.DELETE_TODO: {
            return state.filter((s, i) => i !== action.index);
        }
        default:
            return state;
    }
};
