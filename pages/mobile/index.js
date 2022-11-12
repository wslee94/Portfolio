import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isDesktop } from 'react-device-detect';
import About from '../../components/template/about';
import Career from '../../components/template/career';
import Project from '../../components/template/project';
import Gallery from '../../components/template/gallery';
import Experience from '../../components/template/experience';
import FullPage from '../../components/full-page';
import useScroll from '../../hooks/useScroll';

const Mobile = () => {
  const [scrollOffset] = useScroll();
  const router = useRouter();

  useEffect(() => {
    if (isDesktop) {
      router.push('/');
    }
  }, []);

  return (
    <div className="container mobile">
      <FullPage id="about" scrollOffset={scrollOffset} isMobile={true}>
        <About />
      </FullPage>
      <FullPage id="career" scrollOffset={scrollOffset} isMobile={true}>
        <Career />
      </FullPage>
      <FullPage id="project" scrollOffset={scrollOffset} isMobile={true}>
        <Project />
      </FullPage>
      <FullPage id="gallery" scrollOffset={scrollOffset} isMobile={true}>
        <Gallery />
      </FullPage>
      <FullPage id="experience" scrollOffset={scrollOffset} isMobile={true}>
        <Experience />
      </FullPage>
    </div>
  );
};

export default Mobile;
