import React, {useState} from 'react'
import {Task} from '../Task/Task'
import {TaskType} from '../../types/taskType'
import {CardType} from '../../types/cardType'
import {RootState, store} from '../Store/store'
import {useSelector} from "react-redux";


export const TaskContent = ({title, id}: CardType) => {
    // const [tasks, setTasks] = useState<TaskType[]>([]);
    // store.subscribe(() => setTasks(store.getState().tasks));

    // const tasks = useSelector((state: any) => state.tasks);
    const tasks = useSelector((state: RootState) => state.tasks.tasks);


    return (
        <div className='card-content scroller'>
            {Array.isArray(tasks) && tasks.filter(task => task.status === id).map(task => <Task
                key={task.id}
                task={task}
            />)}
        </div>
    )
}
