import { createSlice, current } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    currentMusic: null,
    playing: false,
  },
  reducers: {
    setCurrentMusic(state, action) {
      state.currentMusic = action.payload;
    },
    setPlaying(state, action) {
      state.playing = action.payload;
    },
  },
});

export const { setCurrentMusic, setPlaying } = playerSlice.actions;
export default playerSlice.reducer;
