import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import ConfettiContainer from "@component/confetti/ConfettiContainer";

const HomeHero = () => {
  return (
    <section className="px-10 lg:px-20 bg-devfest-hero pt-10">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2 z-10">
        <h1 className="text-wrap text-center mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-[74px]">
          Devfest Ilorin
        </h1>
        <h1 className="text-wrap text-center mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-[74px]">
          2024
        </h1>
        <p className="text-wrap text-center lg:max-w-[912px] text-[18px] text-primary-gray">
          Join us at DevFest Ilorin 2024 from October 17 to 19 for 3 days of
          inspiring talks, interactive workshops, and unparalleled networking
          opportunities. With over 2,000 attendees, this event is your gateway
          to the latest in AI, Android, Cloud, and more. Don’t miss out on
          Ilorin&apos;s largest tech celebration of the year!
        </p>

        <div className="flex flex-col lg:flex-row justify-between gap-5 px-10 lg:px-10 mt-5">
          <Button as={Link} href={"#"} borderRadius={50} px={10} py={8}>
            Register Now <BsArrowUpRight />
          </Button>
          <Button
            href={"#"}
            as={Link}
            variant={"outline-black"}
            borderRadius={50}
            px={10}
            py={8}
          >
            Apply to Speak
          </Button>
        </div>
      </div>
      <ConfettiContainer />
    </section>
  );
};

export default HomeHero;
