import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";
import { profileReducer } from "./slices/profileSlice";
import { worksReducer } from "./slices/worksSlice";
import { flsReducer } from "./slices/flsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    works: worksReducer,
    fls: flsReducer
  },
});

export default store;
