import Image, { StaticImageData } from "next/image";

import Fester from "next/font/local";
import Trailmade from "next/font/local";

const FesterFont = Fester({ src: "../../public/Fester-bold.otf" });
const TrailmadeFont = Trailmade({ src: "../../public/Trailmade.otf" });

interface EventCardProps {
  image: StaticImageData;
  date: string;
  day: string;
  hour: string;
  name: string;
}

export default function EventCard({
  image,
  date,
  day,
  hour,
  name,
}: EventCardProps) {
  return (
    <div className="flex flex-row md:flex-col justify-center items-center">
      <div className="rounded-3xl drop-shadow-xl">
        <Image
          src={image}
          alt="Event"
          className="max-w-40 sm:max-w-[300px] sm:w-60 md:w-full md:min-w-[270px] h-auto rounded-3xl"
        />
      </div>
      <div className="w-52 sm:w-72 md:w-64 h-36 sm:h-52 md:h-64 border dark:border-[#FFC956] border-[#B96001] mt-0 md:-mt-3 -ml-2 md:ml-0 rounded-r-[30px] md:rounded-tr-none md:rounded-b-3xl text-2xl sm:text-4xl -z-10 flex flex-col justify-center items-center ">
        <p className={`${FesterFont.className} text-center`}>{date}</p>
        <p className="text-base sm:text-2xl text-center">{day}</p>
        <p className="text-base sm:text-2xl text-center">{hour}</p>
        <p
          className={`${TrailmadeFont.className} text-4xl sm:text-6xl pt-4 text-center`}
        >
          {name}
        </p>
      </div>
    </div>
  );
}

// px-10 sm:px-20 md:px-12