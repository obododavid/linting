import React, { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([
        {
            task: 'eat',
            done: false
        },
        {
            task: 'finish',
            done: true
        },
    ]);
    const [addTodo, setAddTodo] = useState('');


    const handleWriteTodo = e => {
        setAddTodo(e.target.value)
    }

    const handleAddTodo = e => {
        e.preventDefault();

        const newTodo = {
            task: addTodo,
            done: false
        }
        setTodos([...todos, newTodo])
        setAddTodo('')
    }

    const handleDeleteTodo = e => {
        const value = e.target.id
        setTodos(todos.filter(todo => todo.task !== value))
    }

    const handlesetStatus = (task) => {
        const newTodos = todos.map(todo => {
            if (todo.task === task) {
                const updatedTodo = {
                    task,
                    done: !todo.done
                }
                return updatedTodo
            }
            return todo
        })
        setTodos(newTodos)
    }

    return (
        <div>
            <h1>To do List</h1>
            <form onSubmit={handleAddTodo}>
                <input type='text' placeholder='add todo' onChange={handleWriteTodo} value={addTodo} />
            </form>
            <ul>
                <h2>Not done</h2>
                {todos && todos.map(todo => {
                    const { task, done } = todo;
                    return done === false ? <li key={task} id={task}>
                        <div style={{
                            width: '300px',
                            border: '1px solid black',
                            marginBottom: '20px',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <input type="checkbox" onClick={() => handlesetStatus(task)} checked={done} />
                            {task}
                            <span onClick={handleDeleteTodo} id={task}>del</span>
                        </div>
                    </li>
                        : null
                })}
            </ul>
            <ul>
                <h2>Done</h2>
                {todos && todos.map(todo => {
                    const { task, done } = todo;
                    return done === true
                        ? <li key={task} id={task}>
                            <div style={{
                                width: '300px',
                                border: '1px solid black',
                                marginBottom: '20px',
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}>
                                <input type="checkbox" onClick={() => handlesetStatus(task)} checked={done} />
                                {task}
                                <span onClick={handleDeleteTodo} id={task}>del</span>
                            </div>
                        </li>
                        : null
                })}
            </ul>

        </div>
    )
}

export default Todo