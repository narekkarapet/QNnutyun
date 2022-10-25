import './App.css';
import React, { useState } from 'react';

import TodoList from './components/ToDoList';
import TodoForm from './components/TodoForm';
import TodoFooter from './components/TodoFooter';


export default function() {


 const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: 'learn JS',
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: 'React JS',
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: 'Node JS',
      isCompleted: false,
    },
 ])

 

 const onAdd = (text) => {
      setTodos([
        ...todos,
        {
          id: Math.random(),
          text: text,
          isCompleted: false
        }
    ])
 }


  const clearIscompleted = () => {
    setTodos(todos.filter(todo => !todo.isCompleted))
  }

  
  const onChange = (newTodo) => {
    setTodos(todos.map(todo => {
      if (todo.id === newTodo.id) return newTodo
      return todo
    }))
  }

    return(
        <div>
          
          <div>
              <TodoForm onAdd={onAdd} />
              <TodoList todos={todos}  onChange={onChange}/>
              <TodoFooter clearIscompleted={clearIscompleted} todos={todos}/>
          </div>
        </div>
    )


};