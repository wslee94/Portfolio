import style from './style.module.scss';
import AbountIcon from '/public/assets/icon/lnb-about.svg';
import CareerIcon from '/public/assets/icon/lnb-career.svg';
import ExperienceIcon from '/public/assets/icon/lnb-experience.svg';
import GalleryIcon from '/public/assets/icon/lnb-gallery.svg';
import ProjectIcon from '/public/assets/icon/lnb-project.svg';
import { CurrentPageContext } from '/context/CurrentPageContext';
import { useContext } from 'react';

const LNB = (props) => {
  const { currentPage } = useContext(CurrentPageContext);

  const movePage = (id) => {
    const el = document.querySelector(`#${id}`);
    el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={style.LNBContainer}>
      <div className={style.LNBItem}>
        <button
          onClick={() => movePage('about')}
          className={[style.LNBButton, currentPage === 'about' ? style.active : ''].join(' ')}
        >
          <AbountIcon />
        </button>
        <span className={style.LNBTooltip}>ABOUT</span>
      </div>
      <div className={style.LNBItem}>
        <button
          onClick={() => movePage('career')}
          className={[style.LNBButton, currentPage === 'career' ? style.active : ''].join(' ')}
        >
          <CareerIcon />
        </button>
        <span className={style.LNBTooltip}>CAREER</span>
      </div>
      <div className={style.LNBItem}>
        <button
          onClick={() => movePage('project')}
          className={[style.LNBButton, currentPage === 'project' ? style.active : ''].join(' ')}
        >
          <ProjectIcon />
        </button>
        <span className={style.LNBTooltip}>PROJECT</span>
      </div>
      <div className={style.LNBItem}>
        <button
          onClick={() => movePage('gallery')}
          className={[style.LNBButton, currentPage === 'gallery' ? style.active : ''].join(' ')}
        >
          <GalleryIcon />
        </button>
        <span className={style.LNBTooltip}>GALLERY</span>
      </div>
      <div className={style.LNBItem}>
        <button
          onClick={() => movePage('experience')}
          className={[style.LNBButton, currentPage === 'experience' ? style.active : ''].join(' ')}
        >
          <ExperienceIcon />
        </button>
        <span className={style.LNBTooltip}>EXPERIENCE</span>
      </div>
    </div>
  );
};

export default LNB;
