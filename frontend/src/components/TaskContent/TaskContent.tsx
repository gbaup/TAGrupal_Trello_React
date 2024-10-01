import React from 'react'
import { Task } from '../Task/Task'

export const TaskContent = () => {
    return (
        <div className='card-content scroller'>
            <Task title='Task 1' description='Description 1' assignee='Assignee 1' endDate='End Date 1' priority='Priority 1' status='Status 1' />
        </div>
    )
}
