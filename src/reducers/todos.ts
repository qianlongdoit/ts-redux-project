import * as ActionType from '../action-type'
import {AddTodoAction, DeleteTodoAction, ToggleTodo} from '../actions/addTodo'

export interface AppState {
    text: string;
    finished: boolean
}

export const initialState: AppState = {
    text: 'todoList',
    finished: false
};

type Action = AddTodoAction | DeleteTodoAction | ToggleTodo;

export const lists = (state: AppState[] = [initialState], action: Action) => {
    // console.log(state, action);
    switch (action.type) {
        case ActionType.ADD_TODO: {
            return [
                ...state,
                {
                    text: action.text,
                    finished: action.finished
                }
            ]
        }
        case ActionType.DELETE_TODO: {
            return state.filter((s, i) => i !== action.index);
        }
        case ActionType.TOGGLE_TODO: {
            const {index, finished} = action;
            let nextState = state.slice();
            nextState[index].finished = finished;

            return nextState
        }
        default:
            return state;
    }
};
