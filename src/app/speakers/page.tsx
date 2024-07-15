import { speakers } from "@/data";
import DateAndLocation from "@component/date-and-location";
import SpeakersCard from "@component/speakers-card";

import devfestFrame from "@public/devfest-lanyard.png";
import lanyard from "@public/icon/lanyard-white-bg.svg";
import plus from "@public/plus.png";

import { Button } from "@chakra-ui/react";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

export default function SpeakersPage() {
  return (
    <div className="px-4 lg:px-20 container mx-auto">
      <section className="lg:w-[800px] mx-auto pt-10">
        <h1 className="text-wrap text-center mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-[74px]">
          Our Speakers
        </h1>

        <p className="text-wrap text-center text-[18px] text-primary-gray font-bold">
          Join us at DevFest Ilorin 2024 from October 17 to 19 for 3 days of
          inspiring talks, interactive workshops, and unparalleled networking
          opportunities.{" "}
        </p>

        <DateAndLocation />
      </section>

      <section className="py-10 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-10">
          {speakers.map((speaker, index) => (
            <SpeakersCard {...speaker} key={index} />
          ))}

          <aside className="border-4 border-black rounded-xl relative bg-white">
            <div className="bg-[#57CAFF] p-2 rounded-full w-[70px] text-center absolute border-2 border-black top-2 left-2 text-primary-body">
              and
            </div>

            <div className="flex items-center justify-center py-20">
              <Image src={plus} alt="plus" className="w-[80px]" />
            </div>

            <div className="border-b-4 border-black"></div>

            <div className="p-4 bg-white overflow-hidden rounded-b-xl my-2">
              <div className="flex items-center justify-center">
                <Image src={lanyard} alt="lanyard" className="w-[70%]" />
              </div>

              <h2 className="text-3xl text-center font-bold mt-4 text-black">
                You
              </h2>

              <div className="flex justify-center mt-4">
                <Button
                  borderRadius={50}
                  px={10}
                  py={8}
                  display={{ base: "none", lg: "flex" }}
                  className="!bg-primary-body !text-white hover:opacity-80"
                >
                  Apply to speak <BsArrowUpRight />
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-10 lg:pb-20">
        <Image src={devfestFrame} alt="devfest-frame" />
      </section>
    </div>
  );
}
