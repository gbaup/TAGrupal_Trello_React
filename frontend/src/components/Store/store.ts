import {configureStore} from '@reduxjs/toolkit';
import taskSlice from './taskSlice.ts';

export const store = configureStore({
    reducer: {
        tasks: taskSlice,
    },
});

// Definir el tipo de estado general
export type RootState = ReturnType<typeof store.getState>;

// Definir el tipo de dispatch
export type AppDispatch = typeof store.dispatch;
