import React from 'react'
import "./Task.css"
import { TaskType } from '../../types/taskType'

export const Task = (task: TaskType) => {
    const showModal = () => {
        const modal = document.getElementById('taskModalEdit');
        modal?.classList.add('is-active');
    }

    return (
        <div className='task' onClick={showModal}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p className='hide'>{task.assignee}</p>
            <p className='hide'>{task.endDate}</p>
            <p className='hide'>{task.priority}</p>
            <p className='hide'>{task.status}</p>
        </div>
    )
}
