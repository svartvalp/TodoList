import React from 'react'
import {Todo} from './Todo'
import {EmptyTodoList} from './EmptyTodoList'

export const TodoList = ({todos, setTodos}) => {

    const deleteTodo = (todo) => {
        let temp = todos.slice()
        temp.splice(todos.indexOf(todo), 1)
        setTodos(temp)
    }

    const changeIsDone = (todo) => {
        let temp = todos.slice()
        let updatedTodo = todo
        updatedTodo.done = !updatedTodo.done
        temp[temp.indexOf(todo)] = updatedTodo
        setTodos(temp)
    }

    return (<div>
        {
        todos.length == 0 ? (<EmptyTodoList />) : todos.map(todo => {
            return (<Todo todo = {todo} changeIsDone = {changeIsDone} onDelete = {deleteTodo} key = {todo.id}>

            </Todo>)
        })}
    </div>)
}