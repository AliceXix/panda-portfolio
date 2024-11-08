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

  //   const handleOrientationChange = () => {
  //     let isMobile = window.innerWidth < 767;
  //     isMobile = true;
  //     if (isMobile && window.screen.orientation) {
  //       const isLandscapeNow =
  //         window.screen.orientation.type.startsWith("landscape");
  //       setIsLandscape(isLandscapeNow);
  //     } else {
  //       setIsLandscape(false);
  //     }
  //   };

  //   useEffect(() => {
  //     handleOrientationChange(); // Check initial orientation

  //     // Add event listener for orientation change using screen.orientation
  //     if (window.screen.orientation) {
  //       window.screen.orientation.addEventListener(
  //         "change",
  //         handleOrientationChange
  //       );
  //     }
  //     window.addEventListener("resize", handleOrientationChange);

  //     // Cleanup listener on component unmount
  //     return () => {
  //       if (window.screen.orientation) {
  //         window.screen.orientation.removeEventListener(
  //           "change",
  //           handleOrientationChange
  //         );
  //       }
  //       window.removeEventListener("resize", handleOrientationChange);
  //     };
  //   }, []);

  return isLandscape;
}
