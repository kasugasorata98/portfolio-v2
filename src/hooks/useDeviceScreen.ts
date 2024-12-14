import { useState, useEffect } from "react";

/**
 * Custom hook to get the current device screen dimensions and breakpoints.
 *
 * @returns {Object} An object containing the current screen width, height, and breakpoints.
 * @returns {number} return.width - The current width of the screen.
 * @returns {number} return.height - The current height of the screen.
 * @returns {Object} return.currentBreakpoint - An object containing boolean values for different breakpoints.
 * @returns {boolean} return.currentBreakpoint.sm - True if the screen width is less than 576px.
 * @returns {boolean} return.currentBreakpoint.md - True if the screen width is 576px or greater.
 * @returns {boolean} return.currentBreakpoint.lg - True if the screen width is 768px or greater.
 * @returns {boolean} return.currentBreakpoint.xl - True if the screen width is 992px or greater.
 * @returns {boolean} return.currentBreakpoint.xxl - True if the screen width is 1200px or greater.
 *
 * @example
 * const { width, height, currentBreakpoint } = useDeviceScreen();
 * console.log(width); // Current screen width
 * console.log(height); // Current screen height
 * console.log(currentBreakpoint.md); // True if screen width is 576px or greater
 */
const useDeviceScreen = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

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
    currentBreakpoint: {
      sm: width < 576,
      md: width >= 576,
      lg: width >= 768,
      xl: width >= 992,
      xxl: width >= 1200,
    },
  };
};

export default useDeviceScreen;
