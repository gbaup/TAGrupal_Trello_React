import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskType } from '../../types/taskType';
import { APIcreateTask, APIgetTasks } from '../../ApiInteractions';
import { Dispatch } from 'redux';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState: TaskType[] = [];

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await APIgetTasks();
    return response;
});

const addTaskAPI = createAsyncThunk('tasks/addTasks', async (task: TaskType) => {
    const response = await APIcreateTask(task);
    return response;
})


const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TaskType>) => {
            action.payload.id = state[state.length - 1].id + 1;
            addTaskAPI(action.payload);
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            return action.payload;
        });
    }
});

export const { addTask, removeTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
