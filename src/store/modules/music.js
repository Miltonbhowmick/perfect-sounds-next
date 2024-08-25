import { createSlice, current } from "@reduxjs/toolkit";

const musicSlice = createSlice({
  name: "music",
  initialState: {
    currentMusic: null,
    playing: false,
    currentVolume: 1,
    isMuted: false,
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
      state.currentVolume === 0
        ? (state.isMuted = true)
        : (state.isMuted = false);
    },
    setIsMuted(state, action) {
      state.isMuted = action.payload;
    },
  },
});

export const { setCurrentMusic, setPlaying, setCurrentVolume, setIsMuted } =
  musicSlice.actions;
export default musicSlice.reducer;
