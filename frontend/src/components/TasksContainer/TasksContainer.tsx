import './TasksContainer.css';
import { TaskCard } from "../TaskCard/TaskCard.tsx";
import { useEffect } from 'react';
import { AppDispatch } from '../Store/store.ts';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../Store/taskSlice.ts';

export function TasksContainer() {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchTasks());
    },);

    return (
        <div className="container">
            <TaskCard title="Backlog" id="backlog" />
            <TaskCard title="To Do" id="to-do" />
            <TaskCard title="In Progress" id="in-progress" />
            <TaskCard title="Blocked" id="blocked" />
            <TaskCard title="Done" id="done" />

        </div>
    );
}
