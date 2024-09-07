import About from "../components/About";
import Events from "../components/Events";
import FooterTop from "../components/FooterTop";
import { Hero } from "../components/Hero";
import MenuHome from "../components/MenuHome";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <Hero />
      <Slider />
      <Events />
      <About />
      <MenuHome />
      <Slider />
      <FooterTop />
    </>
  );
}
