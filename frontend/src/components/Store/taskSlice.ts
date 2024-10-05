import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskType } from '../../types/taskType';
import { APIgetTasks } from '../../apiInteractions';
import { Dispatch } from 'redux';

const initialState: TaskType[] = [];


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
            APIgetTasks().then(data => { state = data }).then(() => console.log("Getting tasks from API", state));
        }
    }
});

export const { addTask, removeTask, editTask, getTasks } = taskSlice.actions;
export default taskSlice.reducer;
