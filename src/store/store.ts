import { combineReducers, configureStore } from "@reduxjs/toolkit";
import photoReducer from "./reducers/PhotoSlice";

const rootReducer = combineReducers({
  photoReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
