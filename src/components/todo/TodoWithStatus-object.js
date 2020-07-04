import React, { useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState({
        eat: {
            task: 'eat',
            done: false
        },
        finish: {
            task: 'finish',
            done: true
        },
    });
    const [addTodo, setAddTodo] = useState('');


    const handleWriteTodo = e => {
        setAddTodo(e.target.value)
    }

    const handleAddTodo = e => {
        e.preventDefault();
        setTodos({
            ...todos,
            [addTodo]: {
                task: addTodo,
                done: false
            }
        })
        setAddTodo('')
    }

    const handleDeleteTodo = e => {
        const value = e.target.id;
        const newState = { ...todos }
        delete newState[value]
        setTodos(newState)

    }

    const handlesetStatus = (task) => {
        const selected = task
        setTodos({
            ...todos,
            [selected]: {
                ...todos[selected],
                done: !todos[selected].done
            }
        })
    }




    return (
        <div>
            <h1>To do List</h1>
            <form onSubmit={handleAddTodo}>
                <input type='text' placeholder='add todo' onChange={handleWriteTodo} value={addTodo} />
            </form>
            <ul>
                <h2>Not done</h2>
                {todos && Object.values(todos).map(todo => {
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
                {todos && Object.values(todos).map(todo => {
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