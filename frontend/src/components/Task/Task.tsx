import React from 'react'
import "./Task.css"
import {TaskType} from '../../types/taskType'
import {useDispatch} from "react-redux";
import {setSelectedTask} from "../Store/taskSlice.ts";

export const Task = ({task}: { task: TaskType }) => {
    const dispatch = useDispatch();

    function showModal(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        dispatch(setSelectedTask(task)); // Guardar la tarea seleccionada en el estado global

        const modal = document.getElementById('taskModalEdit');
        const target = event.currentTarget;

        if (modal) {
            modal.classList.add('is-active');
            const title = modal.querySelector('#titleEdit') as HTMLInputElement;
            if (title) title.value = task.title || '';
            const description = modal.querySelector('#descriptionEdit') as HTMLInputElement;
            if (description) description.value = task.description || '';
            const assignee = modal.querySelector('#assignEdit') as HTMLInputElement;
            if (assignee) assignee.value = task.assignee || '';
            const priority = modal.querySelector('#priorityEdit') as HTMLSelectElement;
            if (priority) priority.value = task.priority || '';
            const state = modal.querySelector('#stateEdit') as HTMLSelectElement;
            if (state) state.value = task.status || '';
            const endDate = modal.querySelector('#dateEdit') as HTMLInputElement;
            if (endDate) endDate.value = task.endDate || '';
        }
    }

    return (
        <div className='task' onClick={showModal}>
            <h3 id="title">{task.title}</h3>
            <p id="description">{task.description}</p>
            <p id="assignee" className='hide'>{task.assignee}</p>
            <p id="endDate" className='hide'>{task.endDate}</p>
            <p id="priority" className='hide'>{task.priority}</p>
            <p id="status" className='hide'>{task.status}</p>
        </div>
    );
}
