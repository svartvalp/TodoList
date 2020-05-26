import React, {useCallback, useEffect} from 'react';
import './App.css';
import { Container, AppBar, Toolbar, Typography, TextField, Button, Modal } from '@material-ui/core'
import {useState} from 'react'
import {TodoList} from './components/TodoList'
import {AddTodoModal} from './components/AddTodoModal'
import {useStorage} from './hooks/store'

function App() {
  const {load, save} = useStorage();
  const [todos, setTodos] = useState([])

  const loadTodos = useCallback(
    async () => {
      setTodos(await load())
    },
    []
  )

  useEffect(() => {
    loadTodos()
  }, [])

  useEffect(() => {
    save(todos)
  }, [todos, setTodos]) 

  return (
   <div className = "main-container">
     <AppBar position = 'static' color = 'secondary'>
       <Toolbar>
         <Typography variant = 'h4' color = 'primary'>
           Todo list
          </Typography>
       </Toolbar>
     </AppBar>
     <Container color = 'primary'>
      <AddTodoModal addTodo = {(value) => {
        const newTodo = {
          id : todos.length,
          text : value,
          done : false
        }
        let temp = todos.slice()
        temp.push(newTodo)
        setTodos(temp)
        save(temp)
      }} />
       <TodoList todos = {todos} setTodos = {setTodos} save = {save} />
     </Container>
   </div>
  );
}

export default App;
