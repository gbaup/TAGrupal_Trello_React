import { configureStore } from '@reduxjs/toolkit';
import taskSlice from "./taskSlice.ts";

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({

    reducer: {
        tasks: taskSlice,
    },
});