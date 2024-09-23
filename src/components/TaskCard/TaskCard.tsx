import {Task} from "../../types/task.ts";
import './style.css';

export function TaskCard({task}: { task: Task }) {
    return (
        <>
            <div className="task-card">
                <h2>{task.title}</h2>
                <p>{task.description}</p>
                <p>{task.assignee}</p>
                <p>{task.endDate}</p>
                <p>{task.priority}</p>
                <p>{task.status}</p>
            </div>
        </>
    );
}
