import React from 'react';
import './App.css';
import TodoList from './containers/TodoList'

class App extends React.Component {

    render(): React.ReactNode {
        return (
            <div className="App">
                <TodoList />
            </div>
        );
    }
}

export default App;
