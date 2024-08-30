import Image, { StaticImageData } from "next/image";

import Fester from "next/font/local";
import Trailmade from "next/font/local";
import event1 from "@/public/event-1.png";

const FesterFont = Fester({ src: "../../public/Fester-bold.otf" });
const TrailmadeFont = Fester({ src: "../../public/Trailmade.otf" });

interface EventCardProps {
  image: StaticImageData;
  date: string;
  day: string;
  name: string;
}

export default function EventCard({ image, date, day, name }: EventCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-3xl">
        <Image
          src={image}
          alt="Event"
          style={{ width: "260px", height: "auto" }}
        />
      </div>
      <div className="w-56 h-56 border border-[#FFC956] -mt-1 rounded-b-3xl text-3xl -z-10 flex flex-col justify-center items-center">
        <p className={`${FesterFont.className}`}>{date}</p>
        <p className="text-2xl">{day}</p>
        <p className={`${TrailmadeFont.className} text-5xl pt-4`}>{name}</p>
      </div>
    </div>
  );
}
