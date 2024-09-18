import About from "../components/About";
import Events from "../components/Events";
import FollowPointer from "../components/Animations/FollowPointer";
// import FollowPointer from "../components/Animations/FollowPointer";
import FooterTop from "../components/FooterTop";
import { Hero } from "../components/Hero";
import MenuHome from "../components/MenuHome";
import Slider from "../components/Slider";
import image1 from "@/public/1.webp";
import image10 from "@/public/10.webp";
import image11 from "@/public/11.webp";
import image12 from "@/public/12.webp";
import image13 from "@/public/13.webp";
import image14 from "@/public/14.webp";
import image15 from "@/public/15.webp";
import image16 from "@/public/16.webp";
import image17 from "@/public/17.webp";
import image18 from "@/public/18.webp";
import image19 from "@/public/19.webp";
import image2 from "@/public/2.webp";
import image20 from "@/public/20.webp";
import image21 from "@/public/21.webp";
import image22 from "@/public/22.webp";
import image23 from "@/public/23.webp";
import image24 from "@/public/24.webp";
import image25 from "@/public/25.webp";
import image26 from "@/public/26.webp";
import image27 from "@/public/27.webp";
import image28 from "@/public/28.webp";
import image3 from "@/public/3.webp";
import image4 from "@/public/4.webp";
import image5 from "@/public/5.webp";
import image6 from "@/public/6.webp";
import image7 from "@/public/7.webp";
import image8 from "@/public/8.webp";
import image9 from "@/public/9.webp";

const slidesTop = [
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
  { image: image11 },
  { image: image12 },
  { image: image13 },
  { image: image14 },
  { image: image15 },
];

const slidesBottom = [
  { image: image16 },
  { image: image17 },
  { image: image18 },
  { image: image19 },
  { image: image20 },
  { image: image21 },
  { image: image22 },
  { image: image23 },
  { image: image24 },
  { image: image25 },
  { image: image26 },
  { image: image27 },
  { image: image28 },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Slider slides={slidesTop} reverse />
      <Events />
      <FollowPointer />
      <About />
      <MenuHome />
      <Slider slides={slidesBottom} />
      <FooterTop />
    </>
  );
}
