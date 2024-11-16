import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    homeVideos: null,
    
  },
  reducers: {
    addVideos: (state, action) => {
      state.homeVideos = action.payload;
    },
    
  },
});

export const { addVideos } = videoSlice.actions;
export default videoSlice.reducer;
