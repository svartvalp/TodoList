import React, { useState, useCallback } from 'react'

const storageName = 'todos'

export const useStorage = () => {
    const load = useCallback(async () => {
        let data = JSON.parse(localStorage.getItem(storageName))
        if(data == null) data = []
        return data
    }, [])

    const save = useCallback(async (todos) => {
        localStorage.setItem(storageName, JSON.stringify(todos))
    }, [])

    return {load, save}
}