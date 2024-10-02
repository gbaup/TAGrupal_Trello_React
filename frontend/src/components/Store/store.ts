import {configureStore} from '@reduxjs/toolkit';
import taskSlice from "./taskSlice.ts";

export const store = configureStore({
    reducer: {
        tasks: taskSlice,
    },
});