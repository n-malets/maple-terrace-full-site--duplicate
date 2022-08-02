import React, { useState, useEffect } from "react";

interface Size {
  width: number;
  height: number;
}

export default function useWindowSize(): Size {
  const isSSR = typeof window === "undefined";
  const [windowSize, setWindowSize] = useState<Size>({
    width: isSSR ? 450 : window.innerWidth,
    height: isSSR ? 400 : window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

