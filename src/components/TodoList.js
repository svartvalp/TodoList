import React from 'react'
import {Todo} from './Todo'
import {EmptyTodoList} from './EmptyTodoList'

export const TodoList = ({todos, setTodos, save}) => {

    const deleteTodo = (todo) => {
        let temp = todos.slice()
        temp.splice(todos.indexOf(todo), 1)
        setTodos(temp)
        save(temp)
    }

    const changeIsDone = (todo) => {
        let temp = todos.slice()
        let updatedTodo = todo
        updatedTodo.done = !updatedTodo.done
        temp[temp.indexOf(todo)] = updatedTodo
        setTodos(temp)
        save(temp)
    }

    return (<div>
        {
        todos.length == 0 ? (<EmptyTodoList />) : todos.map(todo => {
            return (<Todo todo = {todo} changeIsDone = {changeIsDone} onDelete = {deleteTodo} key = {todo.id}>

            </Todo>)
        })}
    </div>)
}