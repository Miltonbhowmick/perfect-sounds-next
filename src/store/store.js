"use client";

import { configureStore } from "@reduxjs/toolkit";
import PlayerSlice from "@/utils/modules/PlayerSlice";

const store = configureStore({
  reducer: {
    player: PlayerSlice,
  },
});

export default store;
