import EventCard from "./EventCard";
import Fester from "next/font/local";
import event1 from "@/public/event-1.png";
import event2 from "@/public/event-1.png";
import event3 from "@/public/event-1.png";
import event4 from "@/public/event-1.png";

const FesterFont = Fester({ src: "../../public/Fester-bold.otf" });

const events = [
  {
    image: event1,
    date: "17 May",
    day: "friday",
    hour: "21:00",
    name: "Milen",
  },
  {
    image: event2,
    date: "17 May",
    day: "saturday",
    hour: "21:00",
    name: "Nason",
  },
  {
    image: event3,
    date: "17 May",
    day: "sunday",
    hour: "21:00",
    name: "Jaffar",
  },
  {
    image: event4,
    date: "17 May",
    day: "monday",
    hour: "21:00",
    name: "Dimitar Petrov",
  },
];

export default function Events() {
  return (
    <div id="events" className="max-w-[1440px] mx-auto py-20 px-2 sm:px-16">
      <div>
        <h2
          className={`${FesterFont.className} text-3xl sm:text-5xl xl:text-6xl text-center px-4`}
        >
          Предстоящи Събития
        </h2>
      </div>
      {/* <div className="flex  justify-center items-center gap-10 pt-12"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 pt-12">
        <EventCard {...events[0]} />
        <EventCard {...events[1]} />
        <EventCard {...events[2]} />
        <EventCard {...events[3]} />
      </div>
    </div>
  );
}
