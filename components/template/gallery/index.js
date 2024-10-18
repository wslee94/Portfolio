import style from './style.module.scss';
import Image from '../../Image';

export default function Gallery() {
  return (
    <div className={`section ${style.section_gallery}`}>
      <div className={style.container_image}>
        <div className={[style.wrapper_image, style.full].join(' ')}>
          <p className={style.title_image}>MapleStory Worlds - 신규 월드 이벤트</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/msw-event-new-worlds.gif"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.full].join(' ')}>
          <p className={style.title_image}>MapleStory Worlds - 공지사항</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/msw-community.png"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.half].join(' ')}>
          <p className={style.title_image}>MapleStory Worlds - 설정</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/msw-parental-control-1.png"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.half].join(' ')}>
          <p className={style.title_image}>MapleStory Worlds - 설정</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/msw-parental-control-2.png"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.tree_quaters].join(' ')}>
          <p className={style.title_image}>MapleStory Worlds - 어린이날 이벤트</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/msw-event-olin2.png"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.quater].join(' ')}>
          <p className={style.title_image}>MapleStory Worlds - 어린이날 이벤트</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/msw-event-olin2.gif"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.tree_quaters].join(' ')}>
          <p className={style.title_image}>MapleStory Worlds - 쇼츠</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/msw-shorts.gif"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.quater].join(' ')}>
          <p className={style.title_image}>MapleStory Worlds - 쇼츠</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/msw-shorts-detail.gif"
            layout="fill"
          />
        </div>
        {/* <div className={[style.wrapper_image, style.tree_quaters].join(' ')}>
          <p className={style.title_image}>Event Page - 크리에이터</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/enter-wings-dev.gif"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.quater].join(' ')}>
          <p className={style.title_image}>Event Page - 크리에이터</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/enter-wings-dev-mobile.gif"
            layout="fill"
          />
        </div> */}
        <div className={[style.wrapper_image, style.full].join(' ')}>
          <p className={style.title_image}>MapleStory Worlds - 홈</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/msw-avatar.gif"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.tree_quaters].join(' ')}>
          <p className={style.title_image}>FACEPLAY - 콘텐츠</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/faceplay-content.jpg"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.quater].join(' ')}>
          <p className={style.title_image}>FACEPLAY - 콘텐츠</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/faceplay-content-mobile.jpg"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.full].join(' ')}>
          <p className={style.title_image}>FACEPLAY - 프로필</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/faceplay-profile.jpg"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.full].join(' ')}>
          <p className={style.title_image}>MapleStory Worlds - 친구 초대 이벤트</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/enter-invitation.png"
            layout="fill"
          />
        </div>
        {/* <div className={[style.wrapper_image, style.half].join(' ')}>
          <p className={style.title_image}>Event Page</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/enter-wings-partner.png"
            layout="fill"
          />
        </div>
        <div className={[style.wrapper_image, style.half].join(' ')}>
          <p className={style.title_image}>Event Page</p>
          <Image
            alt="project image"
            className={style.image}
            src="/portfolio/assets/img/gallery/enter-newsletter.png"
            layout="fill"
          />
        </div> */}
      </div>
    </div>
  );
}
