import React from "react";
import ScheduleCard from "./ScheduleCard";
import SectionTitle from "../section-title";
import { ctaLinks } from "@/data";

const schedule = [
  {
    day: 1,
    type: "Workshop",
    price: "Virtual",
    description: "Tuesday, April 08, 2025 @ 4:30PM WAT",
    button: {
      text: "Set Reminder",
      link: ctaLinks.calendar.link,
    },
    background: "#F8D8D8",
    textColor: "#FF7DAF",
  },
  {
    day: 2,
    type: "Worshop",
    price: "Virtual",
    description: "Thursday, April 10, 2025 @ 4:30PM WAT",
    button: {
      text: "Add to Calendar",
      link: ctaLinks.calendar.link,
    },
    background: "#C3ECF6",
    textColor: "#57CAFF",

  },
  {
    day: 3,
    type: "Conference",
    price: "Virtual",
    description: "Friday, April 11, 2025 @ 4:30PM WAT",
    button: {
      text: "Set Reminder",
      link: ctaLinks.calendar.link,
    },
    background: "#C3ECF6",
    textColor: "#57CAFF",
  },
  {
    day: 4,
    type: "Conference",
    price: "In-person 📍",
    description: "Full day of workshop in web, mobile, cloud, design",
    button: {
      text: "Get Ticket",
      link: ctaLinks.register.link,
    },
    background: "#FFE7A5",
    textColor: "#FFD427",
  },
];

const Schedule: React.FC = () => {
  return (
    <section className="bg-[#F0F0F0] py-10 lg:py-20">
      <div className="px-4 lg:px-20 container mx-auto">
        <SectionTitle title="Schedule" size="lg" />

        <div className="mt-10">
          <div className="grid lg:grid-cols-2 gap-10">
            {schedule.map((item) => (
              <ScheduleCard key={item.day} scheduleItem={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
