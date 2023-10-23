import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchUsersData = createAsyncThunk(
  "freelancers/fetchUsersData",
  async () => {
    const { data } = await axios.get("/freelancers");
    return data;
  }
);

const initialState = {
  fls: [],
  status: "loading",
};

const flsSlice = createSlice({
  name: "fls",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsersData.pending]: (state) => {
      state.fls = [];
      state.status = "loading";
    },
    [fetchUsersData.fulfilled]: (state, action) => {
      state.fls = action.payload;
      state.status = "loaded";
    },
    [fetchUsersData.rejected]: (state) => {
      state.fls = [];
      state.status = "error";
    },
  },
});

export const flsReducer = flsSlice.reducer;
