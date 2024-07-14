"use client";

import { createContext, useContext, useState, useRef } from "react";

const MediaElementContext = createContext(null);

export const MediaElementProvider = ({ children }) => {
  const [mediaElement, setMediaElement] = useState(null);
  const mediaElementRef = useRef();

  const setMediaElementRef = (element) => {
    mediaElementRef.current = element;
  };

  return (
    <MediaElementContext.Provider
      value={{
        mediaElement,
        setMediaElement,
        mediaElementRef,
        setMediaElementRef,
      }}
    >
      {children}
    </MediaElementContext.Provider>
  );
};

export const useMediaElement = () => {
  return useContext(MediaElementContext);
};
