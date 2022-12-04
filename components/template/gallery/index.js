import Image from 'next/image';
import style from './style.module.scss';

export default function Gallery() {
  return (
    <div className={`section ${style.section_gallery}`}>
      <div className={style.container_image}>
        <div className={[style.wrapper_image, style.full].join(' ')}>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/msw-avatar.gif"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.tree_quaters].join(' ')}>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/msw-shorts.gif"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.quater].join(' ')}>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/msw-shorts-detail.gif"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.full].join(' ')}>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/enter-invitation.png"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.tree_quaters].join(' ')}>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/enter-wings-dev.gif"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.quater].join(' ')}>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/enter-wings-dev-mobile.gif"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.half].join(' ')}>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/enter-wings-partner.png"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.half].join(' ')}>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/enter-newsletter.png"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.tree_quaters].join(' ')}>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/enter-wings-pride.gif"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.quater].join(' ')}>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/enter-wings-pride-mobile.gif"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
