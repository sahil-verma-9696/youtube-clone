import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    homeVideos: null,
    nowPlaying : null,
  },
  reducers: {
    addVideos: (state, action) => {
      state.homeVideos = action.payload;
    },
    addNowPlaying : (state,action)=>{
      state.nowPlaying = action.payload;
    }
  },
});

export const { addVideos,addNowPlaying } = videoSlice.actions;
export default videoSlice.reducer;
