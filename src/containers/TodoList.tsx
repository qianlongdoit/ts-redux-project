import React from 'react'
import {connect} from 'react-redux'
import {Dispatch} from "redux";
import {addTodo, deleteTodo, toggleTodo} from '../actions/addTodo'
import {AppState} from '../reducers/todos'

interface Props {
    lists: AppState[];
    addItem: (text: string) => void;
    deleteItem: (text: number) => void;
    toggleItem: (index: number, finished: boolean) => void;
}

type StateProps = Pick<Props, 'lists'>
type DispatchProps = Pick<Props, 'addItem' | 'deleteItem' | 'toggleItem'>

function mapPropsToState(state: StateProps) {
    return {
        lists: state.lists
    }
}

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
    return {
        addItem: (text: string) => {
            dispatch(addTodo(text))
        },
        deleteItem: (index: number) => {
            dispatch(deleteTodo(index))
        },
        toggleItem: (index: number, finished: boolean) => {
            dispatch(toggleTodo(index, finished))
        }
    }
}

class TodoList extends React.Component<Props, any> {
    refInput: React.RefObject<HTMLInputElement>;

    constructor(props: Props) {
        super(props);
        this.refInput = React.createRef();
    }

    render(): React.ReactNode {
        const {lists} = this.props;
        console.log(this.props);
        return (
            <div>
                <input
                    ref={this.refInput}
                    type="text"
                />
                <button onClick={this.handleAddTodo}>添加</button>

                <ul>
                    {lists.map((l, i) => (
                        <li key={i}>
                            <span>{l.text}</span>
                            <span
                                style={{cursor: 'pointer', margin: '0 10px'}}
                                onClick={this.handleDeleteTodo.bind(this, i)}
                            >删除</span>
                            &nbsp;&nbsp;&nbsp;
                            <input
                                type="checkbox"
                                checked={l.finished}
                                onChange={this.handleFinished.bind(this, i)}
                            />已完成
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    handleAddTodo = () => {
        let text = this.refInput.current.value;
        if (!text) return;
        this.props.addItem(text);
        this.refInput.current.value = null;
    }

    handleDeleteTodo = (i) => {
        this.props.deleteItem(i);
    }

    handleFinished = (i, e) => {
        let checked = e.target.checked;
        this.props.toggleItem(i, checked);
    }
}

export default connect(
    mapPropsToState,
    mapDispatchToProps,
)(TodoList)