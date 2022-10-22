import About from "../components/template/about";
import Carreer from "../components/template/carreer";
import Project from "../components/template/project";
import Gallery from "../components/template/gallery";
import Experience from "../components/template/experience";

export default function Home() {
  return (
    <div>
      <main>
        <About />
        <Carreer />
        <Project />
        <Gallery />
        <Experience />
      </main>
    </div>
  );
}
