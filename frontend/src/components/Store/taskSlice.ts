import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import {TaskType} from '../../types/taskType';
import {APIcreateTask, APIgetTasks} from '../../ApiInteractions.ts';


const initialState: {
    tasks: TaskType[];
    selectedTask: TaskType | null;
} = {
    tasks: [],
    selectedTask: null,
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await APIgetTasks();
    return response;
});


export const addTaskAPI = createAsyncThunk('tasks/addTasks', async (task: TaskType) => {
    const response = await APIcreateTask(task);
    return response;
});


const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {

        addTask: (state, action: PayloadAction<TaskType>) => {
            if (state.tasks) {
                state.tasks.push(action.payload);
                console.log("Adding task to store", action.payload);
            } else {
                console.error("Tasks array is undefined");
            }
        },

        removeTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },

        editTask: (state, action: PayloadAction<{ newTask: TaskType }>) => {
            console.log(action.payload.newTask)
            state.tasks = state.tasks.map(task => {
                if (task.id === action.payload.newTask.id) {
                    return action.payload.newTask;
                }
                return task;
            });
        },
        setSelectedTask: (state, action: PayloadAction<TaskType | null>) => {
            state.selectedTask = action.payload;
        },
    },
    extraReducers: (builder) => {

        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            if (Array.isArray(action.payload)) {
                state.tasks = action.payload; // Actualiza solo el array de tasks
            } else {
                console.error('Fetch tasks error: Payload is not an array', action.payload);
            }
        });

        builder.addCase(addTaskAPI.fulfilled, (state, action) => {
            state.tasks.push(action.payload);  // Agregar a tasks, no a state
            console.log("Task added via API", action.payload);
        });
    }
});

export const {addTask, removeTask, editTask, setSelectedTask} = taskSlice.actions;
export default taskSlice.reducer;
