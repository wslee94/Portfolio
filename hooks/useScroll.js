import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

export default function useScroll() {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollBottom, setScrollBottom] = useState(0);
  const [direction, setDirection] = useState(0);

  const listener = () => {
    setScrollTop((prev) => {
      if (prev === window.pageYOffset) return window.pageYOffset;
      if (prev > window.pageYOffset) setDirection(-1);
      else setDirection(1);
      return window.pageYOffset;
    });
    setScrollBottom(window.pageYOffset + window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', debounce(listener, 20));
    window.addEventListener('resize', debounce(listener, 20));
    return () => {
      window.removeEventListener('scroll', listener);
      window.removeEventListener('resize', listener);
    };
  }, []);

  return [{ scrollTop: Math.round(scrollTop), scrollBottom: Math.round(scrollBottom), direction }];
}
