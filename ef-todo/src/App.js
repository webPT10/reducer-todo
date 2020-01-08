import React, { useReducer } from 'react';
import {initialState, reducer} from './reducers/reducer';

import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state', state);

  const addTodo = item => {
    dispatch({ type: 'ADD_TODO', payload: item });
  };

  const toggleTodo = id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' })
  }

  return (
    <div className='App'>
      <h1>List of To-Do's</h1>
      <TodoList todoArray={state.todoArray} toggleTodo={toggleTodo} />
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;