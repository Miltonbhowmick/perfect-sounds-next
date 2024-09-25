import { createSlice } from "@reduxjs/toolkit";

const musicSlice = createSlice({
  name: "music",
  initialState: {
    currentMusic: null,
    playing: false,
    currentVolume: 1,
    isMuted: false,
    isFavourite: null,
  },
  reducers: {
    setCurrentMusic(state, action) {
      state.currentMusic = action.payload;
      state.isFavourite = action.payload.is_favorite;
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
    setCurrentMusicFavourite(state, action) {
      state.isFavourite = action.payload;
    },
  },
  selectors: {
    getCurrentMusic: (state) => state.currentMusic,
    getPlaying: (state) => state.playing,
    getCurrentVolume: (state) => state.currentVolume,
    getIsMuted: (state) => state.isMuted,
    getIsFavourite: (state) => state.isFavourite,
  },
});

export const {
  setCurrentMusic,
  setPlaying,
  setCurrentVolume,
  setIsMuted,
  setCurrentMusicFavourite,
} = musicSlice.actions;

export const {
  getCurrentMusic,
  getPlaying,
  getCurrentVolume,
  getIsMuted,
  getIsFavourite,
} = musicSlice.selectors;

export default musicSlice.reducer;
