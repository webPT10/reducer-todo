import React from 'react';

const TodoList = ({ todoArray, toggleTodo }) => {
    return (
        <div>
            {todoArray.map(todo => (
                <div key={todo.id}
                    onClick={() => toggleTodo(todo.id)}
                    className={todo.completed ? "completed" : ""}>
                    {todo.item}
                </div>
            ))}
        </div>
    );
};

export default TodoList;