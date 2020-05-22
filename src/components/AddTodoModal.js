import React, { useState } from 'react'
import { Modal, Button, TextareaAutosize, Paper, Dialog } from '@material-ui/core'


export const AddTodoModal = ({addTodo}) => {
    const [isOpened, setOpened] = useState(false)
    const [value, setValue] = useState("")

    const body = (
        <div>
        <Paper className = 'modal-content'>
         <TextareaAutosize 
         placeholder = "Пишите сюда!" 
         rowsMax = {3} 
         rowsMin = {3} 
         style = {{minWidth : '200px'}}
         value = {value}
         onChange = {(e) => {
             setValue(e.target.value)
         }}
         >
                </TextareaAutosize>
                <div style = {{display : 'flex', alignContent : 'center',  justifyContent : 'center'}}>
                <Button 
                style = {{
                    flexGrow : '0'
                }}
                onClick = {() => {
                    if(value !== "") {
                        setOpened(false)
                        addTodo(value)
                        setTimeout(() => {
                            setValue("")
                        }, 100);
                    } else {
                        alert('value is empty')
                    }
                }} color = 'primary' >Добавить</Button>
            </div>
        </Paper>
        </div>
    )

    return (
        <div>
            <Button onClick = {() => setOpened(true)} color = 'primary' >Добавить новую TODO</Button>
            <Dialog open = {isOpened} onClose = {() => setOpened(false)} className = 'modal'  style = {{margin : '0'}}>
               {body}
            </Dialog>
        </div>
    )
}