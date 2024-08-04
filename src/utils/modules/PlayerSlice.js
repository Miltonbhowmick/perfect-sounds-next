import { createSlice, current } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    currentMusic: null,
    playing: false,
    currentVolume: 1,
  },
  reducers: {
    setCurrentMusic(state, action) {
      state.currentMusic = action.payload;
    },
    setPlaying(state, action) {
      state.playing = action.payload;
    },
    setCurrentVolume(state, action) {
      state.currentVolume = action.payload;
    },
  },
});

export const { setCurrentMusic, setPlaying, setCurrentVolume } =
  playerSlice.actions;
export default playerSlice.reducer;
