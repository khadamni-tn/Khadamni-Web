import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import postService from "../services/post.service"

const post = JSON.parse(localStorage.getItem("post"));

export const createPost = createAsyncThunk(
    "post/createPost",
    async ({ field, location, schedule }, navigate , thunkAPI) => {
      try {
        console.log(field, location, schedule);
        const response = await postService.createPost(field, location, schedule);
        console.log(JSON.stringify(response));
        thunkAPI.dispatch(setMessage(response.data.message));
        
        return JSON.stringify(response);
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
      }
    }
  );

  const initialState = "";

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: {

  },
});

const { reducer } = postSlice;
export default reducer;