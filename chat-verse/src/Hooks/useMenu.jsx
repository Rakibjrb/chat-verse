import { useEffect } from "react";

/**
 *
 * @param {boolean} stateValue
 * @param {*} stateRef
 * @param {function} stateFunction
 * @returns
 */

const useMenu = (stateValue, stateRef, stateFunction) => {
  const handleClickOutside = () => {
    if (stateRef.current && !stateRef.current.contains(event.target)) {
      stateFunction(!stateValue);
    }
  };

  useEffect(() => {
    if (stateValue) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    () => document.removeEventListener("mousedown", handleClickOutside);
  }, [stateValue]);

  return;
};

export default useMenu;
