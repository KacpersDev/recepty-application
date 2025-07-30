import { configureStore } from "@reduxjs/toolkit"
import reducer from "./receptSlice";

export const store = configureStore({
    reducer: {
        recept: reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>