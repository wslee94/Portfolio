import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isDesktop } from 'react-device-detect';
import About from '../components/template/about';
import Career from '../components/template/career';
import Project from '../components/template/project';
import Gallery from '../components/template/gallery';
import Experience from '../components/template/experience';
import useScroll from '../hooks/useScroll';
import FullPage from '../components/full-page';

export default function Home() {
  const [scrollOffset] = useScroll();
  const router = useRouter();
  useEffect(() => {
    if (!isDesktop) {
      router.push('/mobile');
    }
  }, []);

  return (
    <div className="container">
      <FullPage id="about" scrollOffset={scrollOffset}>
        <About />
      </FullPage>
      <FullPage id="career" scrollOffset={scrollOffset}>
        <Career />
      </FullPage>
      <FullPage id="project" scrollOffset={scrollOffset} isNoScrollMove={true}>
        <Project />
      </FullPage>
      <FullPage id="gallery" scrollOffset={scrollOffset} isNoScrollMove={true}>
        <Gallery />
      </FullPage>
      <FullPage id="experience" scrollOffset={scrollOffset} isNoScrollMove={true}>
        <Experience />
      </FullPage>
    </div>
  );
}
