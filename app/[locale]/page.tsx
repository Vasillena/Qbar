import About from "../components/About";
import Events from "../components/Events";
import FooterTop from "../components/FooterTop";
import { Hero } from "../components/Hero";
import MenuHome from "../components/MenuHome";
import Slider from "../components/Slider";
import image1 from "@/public/1.png";
import image10 from "@/public/10.png";
import image11 from "@/public/11.png";
import image12 from "@/public/12.png";
import image13 from "@/public/13.png";
import image14 from "@/public/14.png";
import image15 from "@/public/15.png";
import image16 from "@/public/16.png";
import image17 from "@/public/17.png";
import image18 from "@/public/18.png";
import image19 from "@/public/19.png";
import image2 from "@/public/2.png";
import image20 from "@/public/20.png";
import image3 from "@/public/3.png";
import image4 from "@/public/4.png";
import image5 from "@/public/5.png";
import image6 from "@/public/6.png";
import image7 from "@/public/7.png";
import image8 from "@/public/8.png";
import image9 from "@/public/9.png";

const slidesBottom = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image5 },
  { image: image6 },
  { image: image7 },
  { image: image8 },
  { image: image9 },
  { image: image10 },
];

const slidesTop = [
  { image: image11 },
  { image: image12 },
  { image: image13 },
  { image: image14 },
  { image: image15 },
  { image: image16 },
  { image: image17 },
  { image: image18 },
  { image: image19 },
  { image: image20 },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Slider slides={slidesTop} />
      <Events />
      <About />
      <MenuHome />
      <Slider slides={slidesBottom} />
      <FooterTop />
    </>
  );
}
