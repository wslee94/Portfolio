import style from './style.module.scss';
import Image from 'next/image';

const TechIcon = ({ icon, tooltip }) => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <Image src={`/assets/icon/tech-${icon}.svg`} layout="fill" />
      </div>
      <span className={style.tooltip}>{tooltip}</span>
    </div>
  );
};

export default TechIcon;
