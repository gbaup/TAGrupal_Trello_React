import {Task} from "../../types/task.ts";
import './style.css';
import {TaskCard} from "../TaskCard/TaskCard.tsx";

export function TasksContainer({tasks}: { tasks: Task[] }) {
    return (
        <>
            <div className="tasks-container">
                {tasks.map((task: Task) => {
                    return (
                        <TaskCard task={task}/>
                    )
                })}
            </div>
        </>
    );
}
