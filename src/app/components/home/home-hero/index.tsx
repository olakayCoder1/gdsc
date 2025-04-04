import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import ConfettiContainer from "@component/confetti/ConfettiContainer";
import { ctaLinks } from "@/data";
import NewHomeHeroNew from "../hero-new";
// import Image from "next/image";

const HomeHero = () => { // eslint-disable-line
  return (
    <section className="px-4 lg:px-20 bg-devfest-hero pt-10">
      {/* <div className="container mx-auto flex flex-col items-center justify-center gap-2 relative z-10">
        <h1 className="text-wrap text-center mb-4 text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-gray-900">
          Build With AI <br /> 2025!
        </h1>

        <p className="text-wrap text-center lg:max-w-[912px] text-[18px] text-primary-gray">
          Join us at Build With AI Unilorin from April 08 to 12 for 4 days of
          inspiring talks, interactive workshops, and unparalleled networking
          opportunities. With over 1,000 attendees, this event is your gateway
          to the latest in AI, Android, Cloud, and more. Don’t miss out on
          Ilorin&apos;s largest tech celebration of the year!
        </p>

        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:px-10 mt-5 w-full lg:w-fit">
          <Button
            as={Link}
            href={ctaLinks.register.link}
            target="_blank"
            borderRadius={50}
            py={8}
            className="flex items-center gap-2 !font-bold w-full"
          >
            Register Now! <BsArrowUpRight />
          </Button>

          <Button
            as={Link}
            href="/get-dp"
            target="_blank"
            borderRadius={50}
            py={8}
            className="!bg-[#33A852] !text-white hover:opacity-80 flex items-center gap-2 !font-bold w-full"
          >
            Generate DP! <BsArrowUpRight />
          </Button>
        </div>
      </div> */}
      <NewHomeHeroNew /> 
      <ConfettiContainer />
    </section>
  );
};

export default HomeHero;
