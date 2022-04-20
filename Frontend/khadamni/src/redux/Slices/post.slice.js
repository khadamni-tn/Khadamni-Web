import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import postService from "../services/post.service"

const post = JSON.parse(localStorage.getItem("post"));

export const createPost = createAsyncThunk(
    "posts/createPost",
    async ({ field, schedule, location }, navigate , thunkAPI) => {
      try {
        console.log(field, schedule, location);
        const response = await postService.createPost({field, schedule, location});
        console.log(response);
        thunkAPI.dispatch(setMessage(response.data.message));
        navigate("/Dashboard/posts")
        return response.data;
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