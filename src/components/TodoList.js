import React from 'react';
import axios from 'axios';
import './TodoList.css'; // Add this line

const TodoList = ({ todos, updateTodo, deleteTodo }) => {
    const toggleComplete = async(todo) => {
        await axios.put(`####`, {
            completed: !todo.completed,
        })
        .then(response => updateTodo(response.data))
        .catch(error => console.log(error));
    };

    const handleDelete = async(id) => {
        await axios.delete(`https://backend-c1b1.onrender.com/api/todos/${id}`)
        .then(() => deleteTodo(id))
        .catch(error => console.log(error));
    };

    return (
        <ul>
            {todos.map(todo => (
                <li key={todo._id} className={todo.completed ? 'completed' : ''}>
                    <input 
                        type="checkbox" 
                        checked={todo.completed} 
                        onChange={() => toggleComplete(todo)} 
                    />
                    {todo.text}
                    <button onClick={() => handleDelete(todo._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
