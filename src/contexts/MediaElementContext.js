"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useState, useRef, useEffect } from "react";

const MediaElementContext = createContext(null);

export const MediaElementProvider = ({ children }) => {
  const [mediaElement, setMediaElement] = useState(null);
  const mediaElementRef = useRef();
  const mediaElementCanvaRef = useRef();
  const path = usePathname();
  useEffect(() => {
    console.log(
      "context api....",

      mediaElementCanvaRef.current
    );
  }, [mediaElementCanvaRef.current]);

  const setMediaElementRef = (element) => {
    mediaElementRef.current = element;
  };
  const setMediaElementCanvaRef = (element) => {
    mediaElementCanvaRef.current = element;
  };

  return (
    <MediaElementContext.Provider
      value={{
        mediaElement,
        setMediaElement,
        mediaElementRef,
        setMediaElementRef,
        mediaElementCanvaRef,
        setMediaElementCanvaRef,
      }}
    >
      {children}
    </MediaElementContext.Provider>
  );
};

export const useMediaElement = () => {
  return useContext(MediaElementContext);
};
