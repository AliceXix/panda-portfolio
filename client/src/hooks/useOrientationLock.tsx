import { useEffect, useState } from "react";

export default function useOrientationLock(): boolean {
  const [isLandscape, setIsLandscape] = useState(false);

  const checkOrientation = () => {
    const isMobile =
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
      window.innerWidth < 767;
    const isLandscapeNow = window.innerHeight < window.innerWidth;

    if (isMobile && isLandscapeNow) {
      setIsLandscape(true);
    } else {
      setIsLandscape(false);
    }
  };

  useEffect(() => {
    checkOrientation();

    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  return isLandscape;
}
