import React, { useEffect, useRef, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { scrollMove } from '../../util';
import { CurrentPageContext } from '../../context/CurrentPageContext';

export default function FullPage({ scrollOffset, id, children, isMobile, scrollBodyRef }) {
  const sectionRef = useRef();
  const { changeCurrentPage } = useContext(CurrentPageContext);
  const [scorllBody, setScrollBody] = useState(null);
  const { scrollTop, scrollBottom, direction } = scrollOffset;

  const sectionOffsetTop = sectionRef?.current?.offsetTop || 0;
  const sectionOffsetBottom = sectionOffsetTop + sectionRef?.current?.offsetHeight || 0;
  const isAcitve = scrollTop >= sectionOffsetTop && scrollTop < sectionOffsetBottom - 10;

  useEffect(() => {
    const el = document.querySelector('.container');
    setScrollBody(el);
  }, []);

  useEffect(() => {
    if (isAcitve) {
      changeCurrentPage(id);
    }
  }, [isAcitve]);

  if (!isMobile) {
    if (isAcitve && direction > 0 && scrollBottom - 5 > sectionOffsetBottom) {
      scrollMove(sectionOffsetBottom, direction, scorllBody);
    } else if (isAcitve && direction < 0 && scrollTop + 5 < sectionOffsetBottom) {
      scrollMove(sectionOffsetTop, direction, scorllBody);
    }
  }

  return (
    <div id={id} className="page" ref={sectionRef}>
      {children}
    </div>
  );
}

FullPage.propTypes = {
  scrollOffset: PropTypes.object,
  id: PropTypes.string,
};
