import React from 'react'
import { Task } from '../Task/Task'
import { useSelector } from 'react-redux'
import { TaskType } from '../../types/taskType'
import { CardType } from '../../types/cardType'

export const TaskContent = ({ title, id }: CardType) => {
    const tasks: TaskType[] = useSelector((state: { tasks: TaskType[] }) => state.tasks);
    console.log(tasks);
    return (
        <div className='card-content scroller'>
            {Array.isArray(tasks) && tasks.filter(task => task.status === id).map(task => <Task key={task.id} id={task.id} title={task.title} description={task.description} assignee={task.assignee} endDate={task.endDate} priority={task.priority} status={task.status} />)}
        </div>
    )
}
