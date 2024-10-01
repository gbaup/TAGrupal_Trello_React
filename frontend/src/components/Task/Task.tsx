import React from 'react'
import "./Task.css"
import { TaskType } from '../../types/taskType'

export const Task = (task: TaskType) => {
    return (
        <div className='task'>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p className='hide'>{task.assignee}</p>
            <p className='hide'>{task.endDate}</p>
            <p className='hide'>{task.priority}</p>
            <p className='hide'>{task.status}</p>
        </div>
    )
}
