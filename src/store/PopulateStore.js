"use client";

import { setAuthToken, setProfile } from "./modules/user";
import store from "../store/store";
import { useDispatch } from "react-redux";

export const PopulateStore = ({ userProfile, authToken, children }) => {
  const dispatch = useDispatch();
  dispatch(setProfile(userProfile));
  dispatch(setAuthToken(authToken));
  return <>{children}</>;
};
