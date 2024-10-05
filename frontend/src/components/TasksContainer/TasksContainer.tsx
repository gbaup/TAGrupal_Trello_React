import './TasksContainer.css';
import { TaskCard } from "../TaskCard/TaskCard.tsx";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTasks } from '../Store/taskSlice.ts';

export function TasksContainer() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTasks());
    }, []);

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
