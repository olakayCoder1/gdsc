import React from "react";

import layer from "@public/icons/dates_lanyard.svg";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { ctaLinks } from "@/data";

const DateAndLocation = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 mt-4">
      <aside className="bg-button border-4 border-primary-body rounded-xl p-4 w-full lg:w-[380px] min-h-[200px] text-white space-y-4">
        <div className="flex items-center justify-between">
          <p className="">Dates</p>
          <Image src={layer} alt="layer" />
        </div>

        <h2 className="font-bold text-4xl">October 17 - 19</h2>

        <Button
          as={Link}
          href={ctaLinks.register.link}
          target="_blank"
          borderRadius={50}
          py={8}
          className="!bg-white !text-button hover:opacity-80 flex items-center gap-2"
        >
          Register Now <BsArrowUpRight />
        </Button>
      </aside>

      <aside className="bg-primary-body border-4 border-primary-body rounded-xl p-4 w-full lg:w-[380px] text-white space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-button">Location</p>
          <Image src={layer} alt="layer" />
        </div>

        <h2 className="font-bold text-3xl">
          Diamond Arena ( Diamond Park ), Ilorin, Kwara State.
        </h2>
      </aside>
    </div>
  );
};

export default DateAndLocation;
