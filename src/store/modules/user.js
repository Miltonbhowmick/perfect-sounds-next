import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      token: null,
      profile: null,
    },
  },
  reducers: {
    setProfile(state, action) {
      state.user.profile = action.payload;
    },
    setAuthToken(state, action) {
      state.user.token = action.payload;
    },
  },
  selectors: {
    getAuthToken: (state) => state.user.token,
    getProfile: (state) => state.user.profile,
  },
});

// export actions
export const { setProfile, setAuthToken } = userSlice.actions;

// export selectors
export const { getProfile, getAuthToken } = userSlice.selectors;
// export reducer
export default userSlice.reducer;
