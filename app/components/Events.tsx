import EventCard from "./EventCard";
import Reveal from "./Animations/Reveal";
import event1 from "@/public/event-1.webp";
import event2 from "@/public/event-2.webp";
import event3 from "@/public/event-3.webp";
import event4 from "@/public/event-4.webp";
import event5 from "@/public/event-5.webp";
import { getI18n } from "@/locales/server";
import { oswald } from "../utils/fonts";

export default async function Events(): Promise<JSX.Element> {
  const t = await getI18n();

  const events = [
    {
      image: event1,
      date: `12 ${t("events.month-2")}`,
      day: t("events.day-1"),
      hour: "21:00",
      name: "DZHAKOV",
    },
    {
      image: event2,
      date: `14 ${t("events.month-2")}`,
      day: t("events.day-2"),
      hour: "21:00",
      name: "HOT JAM",
    },
    {
      image: event3,
      date: `15 ${t("events.month-2")}`,
      day: t("events.day-3"),
      hour: "21:00",
      name: "5PRITE",
    },
    // {
    //   image: event4,
    //   date: `16 ${t("events.month-2")}`,
    //   day: t("events.day-4"),
    //   hour: "21:00",
    //   name: "ANATOLKIN",
    // },
    {
      image: event5,
      date: t("events.no-event-1"),
      day: t("events.no-event-2"),
      // hour: "21:00",
      name: t("events.no-event-3"),
    },
    // {
    //   image: event5,
    //   date: t("events.no-event-1"),
    //   day: t("events.no-event-2"),
    //   // hour: "21:00",
    //   name: t("events.no-event-3"),
    // },
    // {
    //   image: event5,
    //   date: t("events.no-event-1"),
    //   day: t("events.no-event-2"),
    //   // hour: "21:00",
    //   name: t("events.no-event-3"),
    // },
    // {
    //   image: event5,
    //   date: t("events.no-event-1"),
    //   day: t("events.no-event-2"),
    //   // hour: "21:00",
    //   name: t("events.no-event-3"),
    // },
  ];

  return (
    <div id="events" className="max-w-[1440px] mx-auto py-20 px-2 sm:px-16">
      <div className="flex flex-col items-center">
        <Reveal initial={{ y: "-20%" }} animate={{ y: "0%" }}>
          <h2
            className={`${oswald.className} inline-block text-3xl font-bold sm:text-5xl xl:text-6xl text-center px-4 hover-target`}
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
