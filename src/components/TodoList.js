import React, { useState } from 'react'
import Todo from './Todo';
import TodoForms from './TodoForms';


function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    }

    const updatedTodos = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }

   return (
    <div>
        <h2>What's the plan for Today?</h2>
        <TodoForms onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updatedTodos}/>
    </div>
   )
}

export default TodoList
