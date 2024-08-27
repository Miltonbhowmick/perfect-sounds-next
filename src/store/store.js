"use client";

import { configureStore } from "@reduxjs/toolkit";
import musicSlice from "@/store/modules/music";
import commonSlice from "@/store/modules/common";
import userSlice from "@/store/modules/user";

const store = configureStore({
  reducer: {
    music: musicSlice,
    common: commonSlice,
    user: userSlice,
  },
});
export default store;
