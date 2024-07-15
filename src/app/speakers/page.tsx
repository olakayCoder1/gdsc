import NavMenu from "../components/menu/NavMenu";

import DateAndLocation from "../components/date-and-location/DateAndLocation";
import SpeakersCard from "../components/speakers-card";

import devfestFrame from "../../../public/icon/devfest-frame.svg";
import lanyard from "../../../public/icon/lanyard-white-bg.svg";
import plus from "../../../public/plus.png";

import { Button } from "@chakra-ui/react";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import ayotomide from "../../../public/speakers/ayotomide.png";
import elizabeth from "../../../public/speakers/elizabeth.png";
import goodness from "../../../public/speakers/goodness.png";
import idris from "../../../public/speakers/idris.png";
import jamiu from "../../../public/speakers/jamiu.png";
import john from "../../../public/speakers/john.png";
import kamaldeen from "../../../public/speakers/kamaldeen.png";
import kolapo from "../../../public/speakers/kolapo.png";
import samson from "../../../public/speakers/samson.png";
import stephen from "../../../public/speakers/stephen.png";
import temi from "../../../public/speakers/temi.png";
import victoria from "../../../public/speakers/victoria.png";

const speakers = [
  {
    image: samson,
    name: "Samson Goddy",
    role: "Co-Founder OSCA",
    speakingType: "speaker",
    day: "conference",
  },
  {
    image: elizabeth,
    name: "Elizabeth Ali",
    role: "Founder DesignJet.io",
    speakingType: "speaker",
    day: "conference",
  },
  {
    image: kamaldeen,
    name: "Kamaldeen Yusuf",
    role: "Managing Director Mubhub",
    speakingType: "speaker",
    day: "workshop",
  },
  {
    image: idris,
    name: "Idris Ayoola",
    role: "Founder Web3Afrika",
    speakingType: "speaker",
    day: "conference",
  },
  {
    image: victoria,
    name: "Victoria Abiodun",
    role: "Web3 IRL SuperTeam",
    speakingType: "speaker",
    day: "conference",
  },
  {
    image: jamiu,
    name: "Jamiu Okanlawon",
    role: "Flutter Engineer Creatflor",
    speakingType: "speaker",
    day: "conference",
  },
  {
    image: john,
    name: "John Oba",
    role: "Co-founder Startup list, Technical lead Ngcampus",
    speakingType: "speaker",
    day: "conference",
  },
  {
    image: temi,
    name: "Temi Kolawole",
    role: "Managing Director Innovation Hub",
    speakingType: "panelist",
    day: "conference",
  },
  {
    image: kolapo,
    name: "Kolapo Imam",
    role: "Product Evangelist",
    speakingType: "speaker",
    day: "conference",
  },
  {
    image: ayotomide,
    name: "Ayotomide (Czar)",
    role: "Flutter Developer GDE",
    speakingType: "speaker",
    day: "conference",
  },
  {
    image: goodness,
    name: "Goodness Adebayo",
    role: "UX Designer/UX Designer Ahavaelijah",
    speakingType: "panelist",
    day: "conference",
  },
  {
    image: stephen,
    name: "Stephen Paul",
    role: "Seasonal Director Startup Grind",
    speakingType: "speaker",
    day: "conference",
  },
];

export default function SpeakersPage() {
  return (
    <>
      <div className="flex flex-col w-full px-10 lg:px-0">
        <div className="lg:min-w-[1200px] mx-auto flex justify-center">
          <NavMenu currentPath={"speakers"} />
        </div>

        <div className="lg:px-16 lg:min-w-[1200px] mx-auto space-y-20 pb-20">
          <section className="lg:w-[800px] mx-auto">
            <h1 className="text-wrap text-center mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-[74px]">
              Our Speakers
            </h1>

            <p className="text-wrap text-center text-[18px] text-primary-gray font-bold">
              Join us at DevFest Ilorin 2024 from October 17 to 19 for 3 days of
              inspiring talks, interactive workshops, and unparalleled
              networking opportunities.{" "}
            </p>

            <DateAndLocation />
          </section>

          <section>
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

          <section>
            <Image src={devfestFrame} alt="devfest-frame" />
          </section>
        </div>
      </div>
    </>
  );
}
