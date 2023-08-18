import Image from '../../Image';
import Hand from '/public/assets/icon/project-hand.svg';
import Link from '/public/assets/icon/project-link.svg';
import Tech from '/public/assets/icon/project-tech.svg';
import TechIcon from '../../tech-icon';
import style from './style.module.scss';
import { projectList } from './data';

export default function Project() {
  return (
    <div className={`section ${style.section_project}`}>
      {projectList.map((project, index) => {
        return (
          <div key={index} className={style.container}>
            <div className={style.wrapper_summary}>
              <p className={style.summary_title}>
                {project.title}
                {project.disabled && <span className={style.summary_end}>(서비스 종료)</span>}
              </p>
              <span className={style.summary_company}>{project.company}</span>
              <span className={style.summary_period}>{project.period}</span>
              <div className={style.summary_image}>
                <Image alt="project image" src={project.image} layout="fill" />
              </div>
              <p className={style.summary_description}>{project.description}</p>
            </div>
            <div className={style.wrapper_part}>
              <div className={style.item_wrapper_title}>
                <Hand className={style.icon} />
                <span className={style.item_title}>Part</span>
              </div>
              <ul>
                {project.part.map((part, index) => (
                  <li key={index}>
                    <span className={style.part_desc}>{part}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.wrapper_link}>
              <div className={style.item_wrapper_title}>
                <Link className={style.icon} />
                <span className={style.item_title}>Link</span>
              </div>
              <ul>
                {project.link.map((link, index) => (
                  <li key={index}>
                    <a
                      className={!project.disabled ? style.link_desc : `${style.link_desc} ${style.link_disabled}`}
                      href={link.href}
                      target="_blink"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.wrapper_tech}>
              <div className={style.item_wrapper_title}>
                <Tech className={style.icon} />
                <span className={style.item_title}>Tech</span>
              </div>
              <ul>
                {project.techList.map((n) => (
                  <li key={n.icon}>
                    <TechIcon icon={n.icon} tooltip={n.tooltip} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
