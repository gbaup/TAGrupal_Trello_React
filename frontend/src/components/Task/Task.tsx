import React from 'react'
import "./Task.css"
import { TaskType } from '../../types/taskType'

export const Task = (task: TaskType) => {
    function showModal(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const modal = document.getElementById('taskModalEdit');
        const target = event.currentTarget;

        modal?.classList.add('is-active');

        (modal?.querySelector('#titleEdit') as HTMLInputElement).value = target.querySelector('#title')?.textContent || '';
        (modal?.querySelector('#descriptionEdit') as HTMLInputElement).value = target.querySelector('#description')?.textContent || '';
        (modal?.querySelector('#assignEdit') as HTMLInputElement).value = target.querySelector('#assignee')?.textContent || '';
        (modal?.querySelector('#priorityEdit') as HTMLSelectElement).value = target.querySelector('#priority')?.textContent || '';
        (modal?.querySelector('#stateEdit') as HTMLSelectElement).value = target.querySelector('#status')?.textContent || '';
        (modal?.querySelector('#dateEdit') as HTMLInputElement).value = target.querySelector('#endDate')?.textContent || '';

    }

    console.log(task);

    return (
        <div className='task' onClick={showModal}>
            <h3 id="title">{task.title}</h3>
            <p id="description">{task.description}</p>
            <p id="assignee" className='hide'>{task.assignee}</p>
            <p id="endDate" className='hide'>{task.endDate}</p>
            <p id="priority" className='hide'>{task.priority}</p>
            <p id="status" className='hide'>{task.status}</p>
        </div>
    )
}
