import { useState, useCallback } from "react";

const useToggle = (initValue) => {
  const [value, setter] = useState(initValue);
  const handler = useCallback(() => {
    setter((prev) => !prev);
  }, []);
  return [value, handler, setter];
};

export default useToggle;
