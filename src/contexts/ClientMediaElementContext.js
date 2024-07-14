"use client";

import { MediaElementProvider } from "./MediaElementContext";

export const ClientMediaElementProviders = ({ children }) => {
  return <MediaElementProvider>{children}</MediaElementProvider>;
};
