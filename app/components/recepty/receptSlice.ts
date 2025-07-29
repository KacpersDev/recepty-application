import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Recept {
    id: string,
    name: string,
    stars: number,
    time: number,
}

interface ReceptState {
    recepty: Recept[];
}

const initialState: ReceptState = {
    recepty: []
}

const receptSlice = createSlice({
    name: 'recepty',
    initialState,
    reducers: {
        addRecept: (state, action: PayloadAction<Recept>) => {
            state.recepty.push(action.payload);
        }
    },
});

export const { addRecept } = receptSlice.actions;
export default receptSlice.reducer;