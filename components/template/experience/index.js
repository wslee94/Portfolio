import Image from 'next/image';
import style from './style.module.scss';
import { experienceList } from './data';
import TechIcon from '../../tech-icon';
import Link from '/public/assets/icon/project-link.svg';

export default function Experience() {
  return (
    <div className={`section ${style.section_experience}`}>
      {experienceList.map((exp, index) => (
        <div key={index} className={style.wrapper_experience}>
          <div className={style.wrapper_description}>
            <div>
              <p className={style.title_description}>{exp.title}</p>
              <p className={style.subtitle_description}>{exp.period}</p>
              <p className={style.subtitle_description}>{exp.host}</p>
            </div>
            {Array.isArray(exp.content) ? (
              exp.content.map((co, index) => (
                <div className={style.content_description} key={index}>
                  <p>{co.title}</p>
                  <p>{co.description}</p>
                </div>
              ))
            ) : (
              <p className={style.content_description}>{exp.content}</p>
            )}
            <ul className={style.list_link}>
              {exp.link.map((link, index) => (
                <li key={index}>
                  <Link className={style.icon_link} />
                  <a className={style.link_description} href={link.href} target="_blink">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
            <ul className={style.list_tech}>
              {exp.techList.map((n) => (
                <li key={n.icon}>
                  <TechIcon icon={n.icon} tooltip={n.tooltip} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
