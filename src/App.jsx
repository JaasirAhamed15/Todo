import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css'

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://backend-c1b1.onrender.com/api/todos')
            .then(response => setTodos(response.data))
            .catch(error => console.log(error));
    }, []);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const updateTodo = (updatedTodo) => {
        setTodos(todos.map(todo => (todo._id === updatedTodo._id ? updatedTodo : todo)));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo._id !== id));
    };

    return (
        <div className="App">
            <h1 className='todo-text'>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </div>
    );
}

export default App;
