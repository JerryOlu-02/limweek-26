import { useEffect, useRef, useState } from "react";

/**
 * @param {object} options - IntersectionObserver config (root, rootMargin, threshold)
 * @returns [ref, isIntersecting]
 */

export const useElementObserver = (options) => {
  const elementRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update state when intersection status changes
      setIsIntersecting(entry.isIntersecting);
    }, options);

    const currentRef = elementRef.current;
    if (currentRef) observer.observe(currentRef);

    // Cleanup: Stop observing when component unmounts
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [elementRef, isIntersecting];
};
