import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchWorks = createAsyncThunk("/works/fetchWorks", async () => {
  const { data } = await axios.get("/works");
  return data;
});

export const fetchWorksCreate = createAsyncThunk(
  "/works/fetchWorksCreate",
  async (params) => {
    const { data } = await axios.post("/new-work", params);
    return data;
  }
);
export const fetchWorksDelete = createAsyncThunk(
  "/works/fetchWorksDelete",
  async (id) => {
    const { data } = await axios.delete(`/works/${id}`);
    return data;
  }
);

const initialState = {
  items: [],
  status: "loading",
  eStatus: "loading",
};

const worksSlice = createSlice({
  name: "works",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchWorks.pending]: (state) => {
      state.items = [];
      state.status = "loading";
    },
    [fetchWorks.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "loaded";
    },
    [fetchWorks.rejected]: (state) => {
      state.items = [];
      state.status = "error";
    },
    [fetchWorksCreate.pending]: (state) => {
      state.items = [];
      state.eStatus = "loading";
    },
    [fetchWorksCreate.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.eStatus = "loaded";
    },
    [fetchWorksCreate.rejected]: (state) => {
      state.items = [];
      state.eStatus = "error";
    },
    [fetchWorksDelete.pending]: (state) => {
      state.items = [];
      state.dstatus = "loading";
    },
    [fetchWorksDelete.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.dstatus = "loaded";
    },
    [fetchWorksDelete.rejected]: (state) => {
      state.items = [];
      state.dstatus = "error";
    },
  },
});

export const worksReducer = worksSlice.reducer;
export const editWorkStatus = (state) => state.works.eStatus === "loaded";
