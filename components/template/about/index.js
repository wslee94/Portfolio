import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import style from './style.module.scss';
import Velog from '/public/assets/icon/about-velog.svg';
import Github from '/public/assets/icon/about-github.svg';
import Mail from '/public/assets/icon/about-mail.svg';
import Phone from '/public/assets/icon/about-phone.svg';
import Address from '/public/assets/icon/about-address.svg';
import { techList } from './data.js';
import TechIcon from '../../tech-icon';
import { CurrentPageContext } from '../../../context/CurrentPageContext';

export default function About() {
  const [isActive, setIsActive] = useState(false);
  const { currentPage } = useContext(CurrentPageContext);

  const getWorkYear = () => {
    const currentYear = new Date().getFullYear();
    const workStartYear = 2019;

    return currentYear - workStartYear + 1;
  };

  useEffect(() => {
    if (currentPage === 'about') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [currentPage]);

  return (
    <section className={`section ${style.section_about}`}>
      <div className={[style.wrapper_title, isActive ? style.active : ''].join(' ')}>
        <span className={style.text_year}>{getWorkYear()}⁺</span>
        <div>
          <p className={style.text_title}>
            안녕하세요! <br /> 프론트엔드 개발자 이원섭 입니다.
          </p>
        </div>
      </div>
      <div className={[style.wrapper_description, isActive ? style.active : ''].join(' ')}>
        <div className={style.img_profile}>
          <Image alt="profile" src="/portfolio/assets/img/profile/profile.png" layout="fill" />
        </div>
        <div>
          <p className={style.text_description}>
            <span className={style.text_italic}>&ldquo;Vires acquirit eundo&rdquo;</span>,&nbsp;
            <span className={style.text_italic}>&ldquo;정진&rdquo;</span>
            <br />
            더디더라도 멈추지 않는, 단단해지기 위해 끊임없이 담금질하는 개발자입니다.
          </p>
          <div className={style.wrapper_button}>
            <a className={style.button_icon} href="https://velog.io/@wslee94" target="_blank" rel="noreferrer">
              <Velog className={style.icon_link} />
            </a>
            <a className={style.button_icon} href="https://github.com/wslee94" target="_blank" rel="noreferrer">
              <Github className={style.icon_link} />
            </a>
          </div>
        </div>
      </div>
      <div className={[style.wrapper_info, isActive ? style.active : ''].join(' ')}>
        <div className={style.line_info}>
          <Mail className={style.icon_info} />
          <span className={style.text_info}>leemuo123@gmail.com</span>
        </div>
        <div className={style.line_info}>
          <Phone className={style.icon_info} />
          <span className={style.text_info}>010-2264-3735</span>
        </div>
        <div className={style.line_info}>
          <Address className={style.icon_info} />
          <span className={style.text_info}>Bundang-gu, Seongnam-si</span>
        </div>
      </div>
      <div className={[style.wrapper_tech, isActive ? style.active : ''].join(' ')}>
        <ul>
          {techList.map((n) => (
            <li key={n.icon}>
              <TechIcon icon={n.icon} tooltip={n.tooltip} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
