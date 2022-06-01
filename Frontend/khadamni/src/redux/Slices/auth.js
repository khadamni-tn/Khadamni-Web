import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
//use the actions defined in the services file

import AuthService from "../services/auth.service";

const user = "";
export const register = createAsyncThunk(
    "auth/register",
    async ({ user, pwd }, navigate , thunkAPI) => {
      try {
        console.log(user, pwd);
        const response = await AuthService.register({user, pwd});
        console.log(response);
        console.log("response");
        thunkAPI.dispatch(setMessage(response.data.message));
          
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

  export const login = createAsyncThunk(
    "auth/login",
    async ({ user, pwd }, navigate, thunkAPI) => {
      try {
        console.log(user, pwd);
        const data = await AuthService.login({user, pwd});
        console.log("++++")
        localStorage.setItem('user',user);

        const user = JSON.parse(localStorage.getItem("user"));

        console.log("+++")
        navigate ("/Dashboard")
        return { user: data };
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

  export const logout = createAsyncThunk("auth/logout", async () => {
    await AuthService.logout();
  });

  const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

  //slice provides the actions global states to every components 

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
  