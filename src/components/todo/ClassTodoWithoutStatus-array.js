import React from 'react';

class ClassTodo extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            addTodo: ''
        }
        this.handleWriteTodo = this.handleWriteTodo.bind(this)
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this)
        this.handleAddTodo = this.handleAddTodo.bind(this)
    }


    handleWriteTodo(e) {
        this.setState({
            addTodo: e.target.value
        })
    }

    handleAddTodo(e) {
        e.preventDefault();
        this.setState({
            todos: [
                ...this.state.todos,
                this.state.addTodo
            ]
        })
        this.setState({
            addTodo: ''
        })
    }

    handleDeleteTodo(e) {
        var value = e.target.id;
        var newState = this.state.todos.filter(todo => todo !== value);
        this.setState({
            todos: [
                ...newState
            ]
        })
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <form onSubmit={this.handleAddTodo}>
                    <input type="text" placeholder='class todo' onChange={this.handleWriteTodo} value={this.state.addTodo} />
                </form>
                <ul>
                    {this.state.todos && this.state.todos.map(todo => <li key={todo} id={todo} onClick={this.handleDeleteTodo}>{todo}</li>)}
                </ul>
            </div>
        )
    }
}

export default ClassTodo