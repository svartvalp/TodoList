import React, { useState } from 'react'
import { Paper, Checkbox, Typography, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

export const Todo = ({todo, onDelete, changeIsDone}) => {
    const [isCompleted, setIsCompleted] = useState(todo.done);
    return (<div style = {{margin : "10px"}}>
        <Paper style = {{
            display : 'flex',
            flexDirection : 'row',
            alignItems : 'center',
            justifyContent : 'space-between',
            paddingTop : '10px',
            paddingBottom : '10px'
             }}>
            <div style = {{
                display : 'flex',
                flexDirection : 'row',
                alignItems : 'center'
            }}>
                <Checkbox color = 'primary' checked = {isCompleted} 
                onChange = {(e)  => {
                    changeIsDone(todo)
                    setIsCompleted(!isCompleted)
                }}
            />
            <Typography style = {{
                textDecoration : isCompleted? 'line-through' : 'none'
                }} color = { isCompleted? 'primary' : 'textPrimary'}>
                 {todo.text}
            </Typography>
            </div>
            <IconButton onClick = {() => {
                onDelete(todo)}}>
                <DeleteIcon />
            </IconButton>
        </Paper>
    </div>)
}