import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskType } from '../../types/taskType';

const initialState: TaskType[] =
    [
        {
            id: 1,
            title: "Task 1",
            description: "Description 1",
            assignee: "Assignee 1",
            endDate: "2021-09-01",
            priority: "1",
            status: "to-do"
        },
        {
            id: 2,
            title: "Task 2",
            description: "Description 2",
            assignee: "Assignee 2",
            endDate: "2021-09-02",
            priority: "2",
            status: "in-progress"
        },
        {
            id: 3,
            title: "Task 3",
            description: "Description 3",
            assignee: "Assignee 3",
            endDate: "2021-09-03",
            priority: "3",
            status: "done"
        },
    ];

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TaskType>) => {
            action.payload.id = state[state.length - 1].id + 1;
            state.push(action.payload);
            console.log("Adding task to store", action.payload);
        },
        removeTask: (state, action: PayloadAction<number>) => {
            state = state.filter(task => task.id !== action.payload);
            console.log("Removing task from store", action.payload);
        },
        editTask: (state, action: PayloadAction<{ oldTask: number, newTask: TaskType }>) => {
            const index = state.findIndex(task => task.id === action.payload.oldTask);
            state[index] = action.payload.newTask;
            console.log("Editing task in store", action.payload.oldTask, action.payload.newTask);
        },
        getTasks: (state) => {
            console.log("Getting tasks from store", state);
        }
    }
});

export const { addTask, removeTask, editTask, getTasks } = taskSlice.actions;
export default taskSlice.reducer;
