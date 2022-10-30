import style from './style.module.scss';
import AbountIcon from '../../assets/icon/lnb-about.svg';
import CareerIcon from '../../assets/icon/lnb-career.svg';
import ExperienceIcon from '../../assets/icon/lnb-experience.svg';
import GalleryIcon from '../../assets/icon/lnb-gallery.svg';
import ProjectIcon from '../../assets/icon/lnb-project.svg';

const LNB = () => {
  return (
    <div className={style.LNBContainer}>
      <div className={style.LNBItem}>
        <button className={style.LNBButton}>
          <AbountIcon />
        </button>
        <span className={style.LNBTooltip}>ABOUT</span>
      </div>
      <div className={style.LNBItem}>
        <button className={style.LNBButton}>
          <CareerIcon />
        </button>
        <span className={style.LNBTooltip}>CAREER</span>
      </div>
      <div className={style.LNBItem}>
        <button className={style.LNBButton}>
          <ProjectIcon />
        </button>
        <span className={style.LNBTooltip}>PROJECT</span>
      </div>
      <div className={style.LNBItem}>
        <button className={style.LNBButton}>
          <GalleryIcon />
        </button>
        <span className={style.LNBTooltip}>GALLERY</span>
      </div>
      <div className={style.LNBItem}>
        <button className={style.LNBButton}>
          <ExperienceIcon />
        </button>
        <span className={style.LNBTooltip}>EXPERIENCE</span>
      </div>
    </div>
  );
};

export default LNB;
