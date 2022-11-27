import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import style from './style.module.scss';
import { CurrentPageContext } from '../../../context/CurrentPageContext';
import { careerList } from './data.js';

export default function Career() {
  const [isActive, setIsActive] = useState(false);
  const { currentPage } = useContext(CurrentPageContext);

  useEffect(() => {
    if (currentPage === 'career') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [currentPage]);

  return (
    <ul className={`section ${style.section_career}`}>
      {careerList.map((career, index) => {
        const isLast = careerList.length === index + 1;

        if (career.id === 'arrow') {
          return (
            <li
              key={`${career.id}-${index}`}
              className={[style.wrapper_item, style.arrow, isActive ? style.active : ''].join(' ')}
            >
              <Image src="/portfolio/assets/img/career/arrow.svg" layout="fill" />
            </li>
          );
        }

        return (
          <li
            key={career.id}
            className={[style.wrapper_item, isLast ? style.white : '', isActive ? style.active : ''].join(' ')}
          >
            <div className={style.wrapper_logo}>
              <span className={style.text_duration}>{career.period}</span>
              <div className={style.logo}>
                <Image src={career.logo} layout="fill" />
              </div>
            </div>
            <div>
              {career.desc.map((desc, idx) => (
                <p className={style.text_desc} key={`${career.id}_${idx}`}>
                  {desc}
                </p>
              ))}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
