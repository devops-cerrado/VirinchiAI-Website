import { useEffect, useState } from "react";

export function useCounterAnimation(end: number, duration = 2000, start = 0, isVisible = true) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start, isVisible]);

  return count;
}
