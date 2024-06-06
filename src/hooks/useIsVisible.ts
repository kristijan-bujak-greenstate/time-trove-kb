import { useEffect, useState } from 'react';

export const useIsVisible = (ref: React.RefObject<HTMLElement>, threshold: number) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.intersectionRatio >= threshold), {
      threshold,
    });

    const currentElement = ref.current;

    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [ref, threshold]);

  return isVisible;
};
