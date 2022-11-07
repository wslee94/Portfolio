import React, { useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import { scrollMove } from '../../util';
import { CurrentPageContext } from '../../context/CurrentPageContext';
export default function FullPage({ scrollOffset, id, children }) {
  const sectionRef = useRef();
  const { changeCurrentPage } = useContext(CurrentPageContext);

  const { scrollTop, scrollBottom, direction } = scrollOffset;

  const sectionOffsetTop = sectionRef?.current?.offsetTop || 0;
  const sectionOffsetBottom = sectionOffsetTop + sectionRef?.current?.offsetHeight || 0;
  const isAcitve = scrollTop >= sectionOffsetTop && scrollTop < sectionOffsetBottom - 10;

  useEffect(() => {
    if (isAcitve) {
      console.log(id);
      changeCurrentPage(id);
    }
  }, [isAcitve]);

  if (isAcitve && direction > 0 && scrollBottom - 5 > sectionOffsetBottom) {
    scrollMove(sectionOffsetBottom, direction);
  } else if (isAcitve && direction < 0 && scrollTop + 5 < sectionOffsetBottom) {
    scrollMove(sectionOffsetTop, direction);
  }

  return (
    <div id={id} className={style.page} ref={sectionRef}>
      {children}
    </div>
  );
}

FullPage.propTypes = {
  scrollOffset: PropTypes.object,
  id: PropTypes.string,
};
