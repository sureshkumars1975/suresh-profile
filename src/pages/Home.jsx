import usePageTitle from "../hooks/usePageTitle";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import { CertificatesPreview, GalleryPreview, ResearchPreview } from "../components/HomeSections";

export default function Home() {
  usePageTitle();
  return (
    <>
      <Hero />
      <About />
      <ResearchPreview />
      <CertificatesPreview />
      <GalleryPreview />
      <Contact />
    </>
  );
}
