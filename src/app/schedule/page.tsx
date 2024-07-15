import React from "react";
import DateAndLocation from "../components/date-and-location";
import Schedule from "../components/schedule";

export default function SchedulePage() {
  return (
    <>
      <div className="px-4 lg:px-20 container mx-auto">
        <section className="lg:w-[800px] mx-auto pt-10">
          <h1 className="text-wrap text-center mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-[74px]">
            Schedule Coming soon.
          </h1>

          <p className="text-wrap text-center text-[18px] text-primary-gray font-bold">
            Join us at DevFest Ilorin 2024 from October 17 to 19 for 3 days of
            inspiring talks, interactive workshops, and unparalleled networking
            opportunities.{" "}
          </p>

          <DateAndLocation />
        </section>
      </div>
      <Schedule />
    </>
  );
}
