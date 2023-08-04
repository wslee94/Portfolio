import style from './style.module.scss';
import Image from '../../Image';

export default function Gallery() {
  return (
    <div className={`section ${style.section_gallery}`}>
      <div className={style.container_image}>
        <div className={[style.wrapper_image, style.tree_quaters].join(' ')}>
          <p className={style.title_image}>MapleStory Worlds - Event Page</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/msw-event-olin2.png"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.quater].join(' ')}>
          <p className={style.title_image}>MapleStory Worlds - Event Page</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/msw-event-olin2.gif"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.full].join(' ')}>
          <p className={style.title_image}>FACEPLAY</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/faceplay-profile.jpg"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.tree_quaters].join(' ')}>
          <p className={style.title_image}>FACEPLAY</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/faceplay-content.jpg"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.quater].join(' ')}>
          <p className={style.title_image}>FACEPLAY</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/faceplay-content-mobile.jpg"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.full].join(' ')}>
          <p className={style.title_image}>MapleStory Worlds</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/msw-avatar.gif"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.tree_quaters].join(' ')}>
          <p className={style.title_image}>MapleStory Worlds</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/msw-shorts.gif"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.quater].join(' ')}>
          <p className={style.title_image}>MapleStory Worlds</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/msw-shorts-detail.gif"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.full].join(' ')}>
          <p className={style.title_image}>MapleStory Worlds - Event Page</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/enter-invitation.png"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.tree_quaters].join(' ')}>
          <p className={style.title_image}>MapleStory Worlds - Event Page</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/enter-wings-dev.gif"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.quater].join(' ')}>
          <p className={style.title_image}>MapleStory Worlds - Event Page</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/enter-wings-dev-mobile.gif"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.half].join(' ')}>
          <p className={style.title_image}>MapleStory Worlds - Event Page</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/enter-wings-partner.png"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.half].join(' ')}>
          <p className={style.title_image}>MapleStory Worlds - Event Page</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/enter-newsletter.png"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
}
