import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handler = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setWidth(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return <div id="scroll-progress" style={{ width: `${width}%` }} />;
};

export default ScrollProgress;
