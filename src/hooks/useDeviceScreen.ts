import { useState, useEffect } from "react";
import useMedia from "use-media";

const useDeviceScreen = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const isSmall = useMedia({ maxWidth: 576 });
  const isMedium = useMedia({ minWidth: 577, maxWidth: 768 });
  const isLarge = useMedia({ minWidth: 769 });

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    width,
    height,
    isSmall,
    isMedium,
    isLarge,
  };
};

export default useDeviceScreen;
