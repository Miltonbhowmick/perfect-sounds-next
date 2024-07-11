import { createSlice, current } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    currentMusic: null,
    playing: false,
    mediaElement: null,
  },
  reducers: {
    setCurrentMusic(state, action) {
      state.currentMusic = action.payload;
    },
    setPlaying(state, action) {
      state.playing = action.payload;
    },
    setMediaElement(state, action) {
      state.mediaElement = action.payload;
    },
  },
});

export const { setCurrentMusic, setPlaying } = playerSlice.actions;
export default playerSlice.reducer;
