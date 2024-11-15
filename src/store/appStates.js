import { createSlice } from "@reduxjs/toolkit";

const appStates = createSlice({
    name: "app",
    initialState: {
        toggleSideBar: false
    },
    reducers: {
        toggleSlideBar: (state, action) => {
            state.toggleSideBar = !state.toggleSideBar;
        }
    }
});

export const { toggleSlideBar } = appStates.actions;
export default appStates.reducer;