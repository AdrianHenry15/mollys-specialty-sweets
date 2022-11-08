import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
    name: "Molly's Speciality Cakes",
    initialState: {
        currentState: false,
    },
    reducers: {
        updateCurrentState: (state, action) => {
            state.currentState = action.payload;
        }
    }
});

export const {
    updateCurrentState
} = storeSlice.actions;

export default storeSlice.reducer;