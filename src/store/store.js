"use client";

import { configureStore } from "@reduxjs/toolkit";
import PlayerSlice from "@/store/modules/PlayerSlice";
import commonSlice from "@/store/modules/common";

const store = configureStore({
  reducer: {
    player: PlayerSlice,
    common: commonSlice,
  },
});
export default store;
