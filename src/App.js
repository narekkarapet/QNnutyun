import {useState} from 'react'

import AddTodo from './components/addTodo';
import Footer from './components/todoFooter';
import TodoList from './components/todoList';

import { initialState } from './initialState';


export default function App() {

  const [todos, setTodos] = useState(initialState)
  const [title, setTitle] = useState('')

  
  const addTodo = () => {
    setTodos([
      ...todos,
      { 
        id: Math.random(),
        isCompleted: false,  
        title: title, 
      }
    ]);
    setTitle('')
  }

  const changeTitle = (evt) => {
    setTitle(evt)
 }


  const onDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const onChange = (newTodo) => {
    setTodos(todos.map(todo => {
      if (todo.id === newTodo.id) return newTodo
      return todo
    }))
  }
  

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.isCompleted))
  }


   return (
       <div className="app todo-app">
           <div className="search-panel d-flex">
           <AddTodo addTodo={addTodo} changeTitle={changeTitle} title={title} />
           </div>
           <TodoList todos={todos} onDelete={onDelete} onChange={onChange} changeTitle={changeTitle} />
           <Footer clearCompleted={clearCompleted} todos={todos}  />
       </div>
   )

};