import { configureStore } from "@reduxjs/toolkit";
import videoSlice from './videoSlice'
import appSlice from './appStates'
export const appStore = configureStore({
    reducer: {
        video: videoSlice,
        app: appSlice
    }
})