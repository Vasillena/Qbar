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
    date: "17 May - 21:00",
    day: "friday",
    name: "Milen",
  },
  {
    image: event2,
    date: "17 May - 21:00",
    day: "friday",
    name: "Milen",
  },
  {
    image: event3,
    date: "17 May - 21:00",
    day: "friday",
    name: "Milen",
  },
  {
    image: event4,
    date: "17 May - 21:00",
    day: "friday",
    name: "Milen",
  },
];

export default function Events() {
  return (
    <div id="events" className="max-w-7xl mx-auto py-20 px-16">
      <div>
        <h2 className={`${FesterFont.className} text-6xl`}>
          Предстоящи Събития
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 pt-12">
        <EventCard {...events[0]} />
        <EventCard {...events[1]} />
        <EventCard {...events[2]} />
        <EventCard {...events[3]} />
      </div>
    </div>
  );
}
