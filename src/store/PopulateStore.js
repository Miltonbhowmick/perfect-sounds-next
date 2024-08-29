"use client";

import { setProfile } from "./modules/user";
import store from "../store/store";
import { useDispatch } from "react-redux";

export const PopulateStore = ({ userProfile, children }) => {
  const dispatch = useDispatch();
  dispatch(setProfile(userProfile));
  return <>{children}</>;
};
