import React from "react";
import devfestFrame from "@public/devfest-lanyard.png";
import DateAndLocation from "../components/date-and-location";
import Image from "next/image";

import sponsor1 from "@public/sponsors/sponsor-1.png";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

export default function SponsorsPage() {
  return (
    <div className="px-4 lg:px-20 container mx-auto">
      <section className="lg:w-[800px] mx-auto pt-10">
        <h1 className="text-wrap text-center mb-4 text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-gray-900">
          Our sponsors
        </h1>

        <p className="text-wrap text-center text-[18px] text-primary-gray font-bold">
          We extend our heartfelt gratitude to our esteemed sponsors for their
          invaluable support. Your partnership helps make DevFest Ilorin 2024 an
          extraordinary event, fostering innovation and connecting the tech
          community. Thank you for being a crucial part of our journey!
        </p>

        <DateAndLocation />
      </section>

      <section className="py-10 lg:py-20">
        <Image src={devfestFrame} alt="devfest-frame" />

        <div className="mt-10 flex items-center justify-center">
          <Image alt="sponsor" src={sponsor1} className="lg:w-[50%]" />
        </div>

        <div className="mt-6 flex items-center justify-center">
          <Button
            as={Link}
            href=""
            borderRadius={50}
            px={10}
            py={8}
            className="!bg-primary-body !text-white hover:opacity-80"
          >
            Sponsor Us <BsArrowUpRight />
          </Button>
        </div>
      </section>
    </div>
  );
}
