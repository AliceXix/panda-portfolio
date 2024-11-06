import { useEffect, useState } from "react";

export default function useOrientationLock(): boolean {
  const [isLandscape, setIsLandscape] = useState(false);

  const handleOrientationChange = () => {
    if (window.screen.orientation) {
      const isLandscapeNow =
        window.screen.orientation.type.startsWith("landscape");
      setIsLandscape(isLandscapeNow);
    }
  };

  useEffect(() => {
    handleOrientationChange(); // Check initial orientation

    // Add event listener for orientation change using screen.orientation
    if (window.screen.orientation) {
      window.screen.orientation.addEventListener(
        "change",
        handleOrientationChange
      );
    }

    // Cleanup listener on component unmount
    return () => {
      if (window.screen.orientation) {
        window.screen.orientation.removeEventListener(
          "change",
          handleOrientationChange
        );
      }
    };
  }, []);

  return isLandscape;
}
