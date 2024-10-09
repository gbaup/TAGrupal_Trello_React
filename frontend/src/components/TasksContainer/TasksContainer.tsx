import { TaskType } from "../../types/taskType.ts";
import './TasksContainer.css';
import { TaskCard } from "../TaskCard/TaskCard.tsx";

export function TasksContainer() {
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
