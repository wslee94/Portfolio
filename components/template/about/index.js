import Link from 'next/link';
import style from './style.module.scss';
import Profile from '/public/assets/img/profile/profile.svg';
import Velog from '/public/assets/icon/about-velog.svg';
import Github from '/public/assets/icon/about-github.svg';
import Mail from '/public/assets/icon/about-mail.svg';
import Phone from '/public/assets/icon/about-phone.svg';
import Address from '/public/assets/icon/about-address.svg';
import { techList } from './data.js';
import TechIcon from '../../tech-icon';

export default function About({ isAcitve }) {
  const getWorkYear = () => {
    const currentYear = new Date().getFullYear();
    const workStartYear = 2019;

    return currentYear - workStartYear + 1;
  };

  return (
    <section className={`section ${style.section_about}`}>
      <div className={style.wrapper_title}>
        <span className={style.text_year}>{getWorkYear()}⁺</span>
        <div>
          <p className={style.text_title}>
            안녕하세요! <br /> 프론트엔드 개발자 이원섭 입니다.
          </p>
        </div>
      </div>
      <div className={style.wrapper_description}>
        <div>
          <Profile className={style.img_profile} />
        </div>
        <div>
          <p className={style.text_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
            tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
            sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
          </p>
          <div className={style.wrapper_button}>
            <a className={style.button_icon} href="https://velog.io/@wslee94" target="_blank">
              <Velog className={style.icon_link} />
            </a>
            <a className={style.button_icon} href="https://github.com/wslee94" target="_blank">
              <Github className={style.icon_link} />
            </a>
          </div>
        </div>
      </div>
      <div className={style.wrapper_info}>
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
          <span className={style.text_info}>Bundang-gu, Seongnam-si, Gyeonggi-do, Korea</span>
        </div>
      </div>
      <div className={style.wrapper_tech}>
        {techList.map((n) => (
          <TechIcon key={n.icon} icon={n.icon} tooltip={n.tooltip} />
        ))}
      </div>
    </section>
  );
}
