"use client";

import { configureStore } from "@reduxjs/toolkit";
import musicSlice from "@/store/modules/music";
import commonSlice from "@/store/modules/common";

const store = configureStore({
  reducer: {
    music: musicSlice,
    common: commonSlice,
  },
});
export default store;
