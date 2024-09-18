import EventCard from "./EventCard";
import { FesterBold } from "../utils/fonts";
import Reveal from "./Animations/Reveal";
import event1 from "@/public/event-1.jpg";
import event2 from "@/public/event-2.jpg";
import event3 from "@/public/event-3.jpg";
import event4 from "@/public/event-4.png";
import event5 from "@/public/event-5.jpg";
import { getI18n } from "@/locales/server";

export default async function Events() {
  const t = await getI18n();

  const events = [
    {
      image: event1,
      date: `20 ${t("events.month")}`,
      day: t("events.day-3"),
      hour: "21:00",
      name: "DONZ",
    },
    {
      image: event2,
      date: `20 ${t("events.month")}`,
      day: t("events.day-3"),
      hour: "21:00",
      name: "DZHAKOV",
    },
    {
      image: event3,
      date: `21 ${t("events.month")}`,
      day: t("events.day-4"),
      hour: "21:00",
      name: "SPRITE",
    },
    // {
    //   image: event4,
    //   date: `17 ${t("events.month")}`,
    //   day: t("events.day-4"),
    //   hour: "21:00",
    //   name: "Dimitar Petrov",
    // },
    {
      image: event5,
      date: t("events.no-event-1"),
      day: t("events.no-event-2"),
      // hour: "21:00",
      name: t("events.no-event-3"),
    },
  ];

  return (
    <div id="events" className="max-w-[1440px] mx-auto py-20 px-2 sm:px-16">
      <div className="flex flex-col items-center">
        <Reveal initial={{ y: "-20%" }} animate={{ y: "0%" }}>
          <h2
            className={`${FesterBold.className} inline-block text-3xl sm:text-5xl xl:text-6xl text-center px-4 hover-target`}
          >
            {t("events.title")}
          </h2>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 pt-12">
        <EventCard {...events[0]} />
        <EventCard {...events[1]} />
        <EventCard {...events[2]} />
        <EventCard {...events[3]} />
      </div>
      <div id="about" />
    </div>
  );
}
