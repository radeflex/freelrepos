import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params) => {
    const { data } = await axios.post("/register", params);
    return data;
  }
);

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async (params) => {
    const { data } = await axios.post("/login", params);
    return data;
  }
);

const initialState = localStorage.getItem("user") === "undefined"
  ? { data: null, status: "loading" }
  : {
      data: JSON.parse(localStorage.getItem("user")),
      status: "loaded",
    };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      state.status = "loaded";
      localStorage.clear();
    },
  },
  extraReducers: {
    [fetchRegister.pending]: (state) => {
      state.data = null;
      state.status = "loading";
    },
    [fetchRegister.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    },
    [fetchRegister.rejected]: (state) => {
      state.data = null;
      state.status = "regError";
    },
    [fetchLogin.pending]: (state) => {
      state.data = null;
      state.status = "loading";
    },
    [fetchLogin.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    },
    [fetchLogin.rejected]: (state) => {
      state.data = null;
      state.status = "logError";
    },
  },
});

export const logged = (state) => Boolean(state.auth.data);
export const logError = (state) => Boolean(state.auth.status === "logError");
export const duplicateError = (state) =>
  Boolean(state.auth.status === "regError");
export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
