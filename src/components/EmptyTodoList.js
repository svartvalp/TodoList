import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

export const EmptyTodoList = () => {
    return (<div>
        <Container>
            <Alert severity = 'info'>У вас нет ни одной Todo-шки!</Alert>
        </Container>
    </div>)
}