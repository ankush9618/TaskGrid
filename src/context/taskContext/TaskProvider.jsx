"use client"
import React, { useEffect, useState } from 'react'
import TaskContext from './TaskContext'

function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        let stored = (localStorage.getItem("taskGridTasks") && JSON.parse(localStorage.getItem("taskGridTasks")))||[];
        setTasks(stored);
    }, [])
    useEffect(() => {
        localStorage.setItem("taskGridTasks", JSON.stringify(tasks));
    }, [tasks])
    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;