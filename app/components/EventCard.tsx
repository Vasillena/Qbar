import Image, { StaticImageData } from "next/image";

import { Trailmade } from "../utils/fonts";
import { oswald } from "../utils/fonts";

interface EventCardProps {
  image: StaticImageData;
  date: string;
  day: string;
  hour?: string;
  name: string;
}

export default function EventCard({
  image,
  date,
  day,
  hour,
  name,
}: EventCardProps): JSX.Element {
  return (
    <div className="flex flex-row md:flex-col justify-center items-center group">
      <div className="rounded-3xl drop-shadow-xl">
        <Image
          src={image}
          alt="Event"
          className="max-w-40 sm:max-w-[300px] sm:w-60 md:w-full md:min-w-[270px] h-auto rounded-3xl"
        />
      </div>
      <div className="w-52 sm:w-72 md:w-64 h-36 sm:h-52 md:h-64 border dark:border-[#FFC956] border-[#B96001] mt-0 md:-mt-3 -ml-2 md:ml-0 rounded-r-[30px] md:rounded-tr-none md:rounded-b-3xl text-2xl sm:text-4xl -z-10 flex flex-col justify-center items-center ">
        <p className={`${oswald.className} text-center font-bold`}>{date}</p>
        <p className="text-base sm:text-2xl text-center">{day}</p>
        {hour && <p className="text-base sm:text-2xl text-center">{hour}</p>}
        <p
          className={`${Trailmade.className} text-4xl sm:text-4xl pt-4 pb-2 px-2 text-center transition-all duration-300 ease-in-out group-hover:bg-gradient-to-r dark:group-hover:from-[#FFC956] group-hover:from-[#B96001] dark:group-hover:via-[#FFD700] group-hover:via-[#C05438] dark:group-hover:to-[#FF6347] group-hover:to-[#711513] group-hover:bg-clip-text group-hover:text-transparent`}
        >
          {name}
        </p>
      </div>
    </div>
  );
}
