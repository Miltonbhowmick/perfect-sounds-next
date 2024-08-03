"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useState, useRef, useEffect } from "react";

const MediaElementContext = createContext(null);

export const MediaElementProvider = ({ children }) => {
  const intactMediaElementRef = useRef(new Audio());

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
  const setIntactMediaElementRef = (element) => {
    // intactMediaElementRef.current.src = element;
    // console.log("asce?????");
    // intactMediaElementRef.current.play();
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
        intactMediaElementRef,
        setIntactMediaElementRef,
      }}
    >
      {children}
    </MediaElementContext.Provider>
  );
};

export const useMediaElement = () => {
  return useContext(MediaElementContext);
};
