"use client";

import { setCategories } from "@/store/modules/common";
import store from "../store/store";

export const PopulateStore = ({ populatedData, children }) => {
  // store.dispatch(setCategories(populatedData.results));

  // console.log(store.getState());

  return <>{children}</>;
};
