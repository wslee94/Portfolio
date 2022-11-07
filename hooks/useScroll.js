import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

export default function useScroll() {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollBottom, setScrollBottom] = useState(0);
  const [direction, setDirection] = useState(0);

  const listener = (e) => {
    setScrollTop((prev) => {
      if (prev === e.target.scrollTop) return e.target.scrollTop;
      if (prev > e.target.scrollTop) setDirection(-1);
      else setDirection(1);
      return e.target.scrollTop;
    });
    setScrollBottom(e.target.scrollTop + window.innerHeight);
  };

  useEffect(() => {
    const el = document.querySelector('.container');
    el.addEventListener('scroll', debounce(listener, 20));
    el.addEventListener('resize', debounce(listener, 20));
    return () => {
      el.removeEventListener('scroll', listener);
      el.removeEventListener('resize', listener);
    };
  }, []);

  return [{ scrollTop: Math.round(scrollTop), scrollBottom: Math.round(scrollBottom), direction }];
}
