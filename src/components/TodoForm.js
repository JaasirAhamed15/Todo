import React, { useState } from 'react';
import axios from 'axios';
import './TodoForm.css'; // Add this line

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post('https://backend-c1b1.onrender.com/api/todos', { text })
            .then(response => {
                addTodo(response.data);
                setText('');
            })
            .catch(error => console.log(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Add a new todo" 
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;
