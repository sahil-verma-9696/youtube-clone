import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        homeVideos : null
    },
    reducers: {
        addVideo: (state, action) => {

        }
    }
})

export const { addVideo } = videoSlice.actions
export default videoSlice.reducer;