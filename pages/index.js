import { BrowserView, MobileView } from 'react-device-detect';

import About from '../components/template/about';
import Career from '../components/template/career';
import Project from '../components/template/project';
import Gallery from '../components/template/gallery';
import Experience from '../components/template/experience';
import useScroll from '../hooks/useScroll';
import FullPage from '../components/full-page';

export default function Home() {
  const [scrollOffset] = useScroll();

  return (
    <>
      <BrowserView>
        <div className="container">
          <FullPage id="about" scrollOffset={scrollOffset}>
            <About />
          </FullPage>
          <FullPage id="career" scrollOffset={scrollOffset}>
            <Career />
          </FullPage>
          <FullPage id="project" scrollOffset={scrollOffset}>
            <Project />
          </FullPage>
          <FullPage id="gallery" scrollOffset={scrollOffset}>
            <Gallery />
          </FullPage>
          <FullPage id="experience" scrollOffset={scrollOffset}>
            <Experience />
          </FullPage>
        </div>
      </BrowserView>
      <MobileView>
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
      </MobileView>
    </>
  );
}
