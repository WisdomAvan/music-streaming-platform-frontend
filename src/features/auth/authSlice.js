import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  user: null,
  isRestoringSession: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSucceeded(state, action) {
      const { userId, accessToken } = action.payload;
      state.accessToken = accessToken;
      state.user = { id: userId };
    },
    sessionRestoreFinished(state, action) {
      state.accessToken = action.payload ?? null;
      state.isRestoringSession = false;
    },
    loggedOut(state) {
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const { loginSucceeded, sessionRestoreFinished, loggedOut } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuthenticated = (state) => Boolean(state.auth.accessToken);
export const selectAccessToken = (state) => state.auth.accessToken;
export const selectIsRestoringSession = (state) => state.auth.isRestoringSession;
export const selectUser = (state) => state.auth.user;
