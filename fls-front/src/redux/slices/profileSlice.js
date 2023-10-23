import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchProfileUpdate = createAsyncThunk(
  "profile/Update",
  async (params) => {
    const { data } = await axios.patch(`/edit/${params.id.id}`, params);
    return data;
  }
);

const initialState = {
  profile: {
    items: [],
  },
  status: "loading",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProfileUpdate.pending]: (state) => {
      state.profile.items = [];
      state.status = "loading";
    },
    [fetchProfileUpdate.fulfilled]: (state, action) => {
      state.profile.items = action.payload;
      state.status = "loaded";
    },
    [fetchProfileUpdate.rejected]: (state) => {
      state.profile.items = [];
      state.status = "error";
    },
  },
});

export const profileReducer = profileSlice.reducer;
export const editStatus = (state) => state.profile.status === "loaded";
