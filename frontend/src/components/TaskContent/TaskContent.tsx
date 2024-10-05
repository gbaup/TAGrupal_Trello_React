import React, { useState } from 'react'
import { Task } from '../Task/Task'
import { TaskType } from '../../types/taskType'
import { CardType } from '../../types/cardType'
import { store } from '../Store/store'


export const TaskContent = ({ title, id }: CardType) => {
    const [tasks, setTasks] = useState<TaskType[]>([]);
    store.subscribe(() => setTasks(store.getState().tasks))
    return (
        <div className='card-content scroller'>
            {Array.isArray(tasks) && tasks.filter(task => task.status === id).map(task => <Task key={task.id} id={task.id} title={task.title} description={task.description} assignee={task.assignee} endDate={task.endDate} priority={task.priority} status={task.status} />)}
        </div>
    )
}
