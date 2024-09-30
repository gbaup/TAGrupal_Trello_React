import { Task } from "../../types/task.ts";
import { TaskContent } from "../TaskContent/TaskContent.tsx";
import './TaskCard.css';

export function TaskCard({ task }: { task: Task }) {
    return (
        <div className="card" id="titulo a poenr">
            <div className="card-title">
                <h2>titulo a poner</h2>
            </div>
            <TaskContent />
        </div>
    );
}
