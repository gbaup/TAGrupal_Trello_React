import {TaskType} from "../../../../types/taskType.ts";

export interface updateTaskDto extends Partial<TaskType> {
    id?: number,
    title?: string,
    description?: string,
    assignee?: string,
    endDate?: string,
    priority?: string,
    status?: string,
}