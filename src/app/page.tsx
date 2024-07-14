'use client'

import Image from "next/image";
import Link from "next/link";
import { Button, HStack, } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";

import ConfettiContainer from "./components/confetti/ConfettiContainer";
import NavMenu from "./components/menu/NavMenu";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[500px] bg-devfest-hero w-full pb-20 px-10 lg:px-0">
      <div className="lg:min-w-[1200px] mx-auto flex justify-center">
        <NavMenu currentPath={'home'} />
      </div>

      <div className="lg:mt-[100px] flex flex-col items-center justify-center gap-2 z-10">
        <h1 className="text-wrap text-center mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-[74px]">
          Devfest Ilorin
        </h1>
        <h1 className="text-wrap text-center mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-[74px]">
          2024
        </h1>
        <p className="text-wrap text-center lg:max-w-[912px] text-[18px] text-primary-gray">
          Join us at DevFest Ilorin 2024 from October 17 to 19 for 3 days of inspiring talks, interactive workshops, and unparalleled networking opportunities.
          With over 2,000 attendees, this event is your gateway to the latest in AI, Android, Cloud, and more.
          Don’t miss out on Ilorin&apos;s largest tech celebration of the year!
        </p>

        <div className="flex flex-col lg:flex-row justify-between gap-5 px-10 lg:px-10 mt-5">
          <Button borderRadius={50} px={10} py={8}>
            Register Now <BsArrowUpRight />
          </Button>
          <Button variant={'outline-black'} borderRadius={50} px={10} py={8}>
            Apply to Speak
          </Button>
        </div>
      </div>

      <ConfettiContainer />

      <div className="bg-devfest-markee">
        <div className="lg:max-w-[1200px] mx-auto  min-h-[300px] px-10 py-10">
          <h1 className="font-semibold text-2xl">Previous Devfest Recaps: </h1>
          
        </div>

      </div>

    </div>
  );
}
