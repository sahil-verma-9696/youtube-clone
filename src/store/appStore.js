import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createFilter } from "redux-persist-transform-filter";
import videoSlice from "./videoSlice";
import appSlice from "./appStates";
import noteSlice from "./noteStlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist/es/constants";

// Create a filter for the object to persist inside videoSlice
const videoFilter = createFilter("videos", ["nowPlaying"]); // Replace 'specificObject' with the property name you want to persist

// Configure persist for the entire store
const persistConfig = {
  key: "root",
  storage,
  transforms: [videoFilter], // Apply the filter to selectively persist
  blacklist: ["app","notes"], 
};

const rootReducer = combineReducers({
  videos: videoSlice, // Apply the filter to this slice
  app: appSlice,
  notes: noteSlice,
});

// Wrap the root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store
// Configure store with middleware
export const appStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist action types
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(appStore);
