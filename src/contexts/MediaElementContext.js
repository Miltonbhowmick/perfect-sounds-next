"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useState, useRef, useEffect } from "react";

const MediaElementContext = createContext(null);

export const MediaElementProvider = ({ children }) => {
  const [mediaElement, setMediaElement] = useState(null);

  return (
    <MediaElementContext.Provider
      value={{
        mediaElement,
        setMediaElement,
      }}
    >
      {children}
    </MediaElementContext.Provider>
  );
};

export const useMediaElement = () => {
  return useContext(MediaElementContext);
};
