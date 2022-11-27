import React, { useEffect, useRef, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { scrollMove } from '../../util';
import { CurrentPageContext } from '../../context/CurrentPageContext';

export default function FullPage({ scrollOffset, id, children, isMobile, isNoScrollMove }) {
  const sectionRef = useRef();
  const { changeCurrentPage } = useContext(CurrentPageContext);
  const [scrollBody, setScrollBody] = useState(null);
  const { scrollTop, scrollBottom, direction } = scrollOffset;

  const sectionOffsetTop = sectionRef?.current?.offsetTop || 0;
  const sectionOffsetBottom = sectionOffsetTop + sectionRef?.current?.offsetHeight || 0;
  const isActive = scrollTop >= sectionOffsetTop - 10 && scrollTop < sectionOffsetBottom - 10;

  useEffect(() => {
    const el = document.querySelector('.container');
    setScrollBody(el);
  }, []);

  useEffect(() => {
    if (isActive) {
      changeCurrentPage(id);
    }
  }, [isActive]);

  if (!isMobile && !isNoScrollMove) {
    if (isActive && direction > 0 && scrollBottom - 5 > sectionOffsetBottom) {
      scrollMove(sectionOffsetBottom, direction, scrollBody);
    } else if (isActive && direction < 0 && scrollTop + 5 < sectionOffsetBottom) {
      scrollMove(sectionOffsetTop, direction, scrollBody);
    }
  }

  return (
    <div id={id} className={['page', !isNoScrollMove ? 'full' : ''].join(' ')} ref={sectionRef}>
      {children}
    </div>
  );
}

FullPage.propTypes = {
  scrollOffset: PropTypes.object,
  id: PropTypes.string,
};
