import style from './style.module.scss';

const TechIcon = ({ icon, tooltip }) => {
  return (
    <div className={style.container}>
      <img className={style.logo} src={`/assets/icon/tech-${icon}.svg`} />
    </div>
  );
};

export default TechIcon;
