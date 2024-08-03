"use client";

import { useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";

export function Providers({ children }) {
  useEffect(() => {
    console.log("Redux load?");
  });

  return <Provider store={store}>{children}</Provider>;
}
