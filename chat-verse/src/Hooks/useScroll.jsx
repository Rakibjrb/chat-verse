import { useEffect } from "react";

const useScroll = (id) => {
  useEffect(() => {
    const container = document.getElementById(id);
    container.scrollIntoView({ block: "end" });
  }, [id]);

  return;
};

export default useScroll;
